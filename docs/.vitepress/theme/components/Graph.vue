<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import {data} from './graph/data';
import * as d3 from 'd3';

const checkDark = () => document.documentElement.classList.contains('dark');
const isDark = ref(checkDark());
const darkModeObserver = new MutationObserver(() => {
	isDark.value = checkDark();
	Actions.updateStyle();
});
const resizeGraph = () => {
	graph.width(window.innerWidth).height(window.innerHeight);
};

let graph;

onMounted(async () => {
	graph = (await import('force-graph')).default();

	initDataviz();

	const graphData = augmentGraphInfo(data);
	Actions.refreshWorkspaceData(graphData);

	window.addEventListener('resize', resizeGraph);
	darkModeObserver.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['class'],
	});
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', resizeGraph);
	darkModeObserver.disconnect();
});

const CONTAINER_ID = 'graph';

const getStyle = (name) => {
	return getComputedStyle(document.documentElement).getPropertyValue(name);
};

const getDefaultStyle = () => ({
	background: getStyle(`--vp-c-bg`),
	fontSize: 10,
	lineColor: getStyle('--vp-c-text-1'),
	lineWidth: 0.2,
	particleWidth: 1.0,
	highlightedForeground: getStyle('--vp-c-brand'),
	node: {
		note: getStyle('--vp-c-text-1'),
		placeholder: getStyle('--vp-c-text-3'),
		tag: getStyle('--vp-c-brand'),
	},
});

const model = {
	selectedNodes: new Set(),
	hoverNode: null,
	focusNodes: new Set(),
	focusLinks: new Set(),
	graph: {
		nodeInfo: {},
		links: [],
	},
	data: {
		nodes: [],
		links: [],
	},
	style: getDefaultStyle(),
	showNodesOfType: {
		placeholder: true,
		note: true,
		tag: true,
		image: false,
	},
};

function update(patch) {
	patch(model);

	const focusNodes = new Set();
	const focusLinks = new Set();

	if (model.hoverNode) {
		focusNodes.add(model.hoverNode);
		const info = model.graph.nodeInfo[model.hoverNode];
		info.neighbors.forEach((neighborId) => focusNodes.add(neighborId));
		info.links.forEach((link) => focusLinks.add(link));
	}

	if (model.selectedNodes) {
		model.selectedNodes.forEach((nodeId) => {
			focusNodes.add(nodeId);
			const info = model.graph.nodeInfo[nodeId];
			info.neighbors.forEach((neighborId) => focusNodes.add(neighborId));
			info.links.forEach((link) => focusLinks.add(link));
		});
	}

	model.focusNodes = focusNodes;
	model.focusLinks = focusLinks;
}

const Actions = {
	refreshWorkspaceData: (graphInfo) =>
		update((m) => {
			m.graph = graphInfo;

			let types = new Set();

			Object.values(model.graph.nodeInfo).forEach((node) =>
				types.add(node.type),
			);

			const existingTypes = Object.keys(model.showNodesOfType);

			existingTypes.forEach((exType) => {
				if (!types.has(exType)) {
					delete model.showNodesOfType[exType];
				}
			});

			types.forEach((type) => {
				if (model.showNodesOfType[type] == null) {
					model.showNodesOfType[type] = true;
				}
			});

			updateForceGraphDataFromModel(m);
		}),

	selectNode: (nodeId, isAppend) =>
		update((m) => {
			if (!isAppend) {
				m.selectedNodes.clear();
			}
			if (nodeId != null) {
				m.selectedNodes.add(nodeId);
			}
		}),

	highlightNode: (nodeId) =>
		update((m) => {
			m.hoverNode = nodeId;
		}),

	updateStyle: () => {
		const defaultStyle = getDefaultStyle();
		model.style = {
			...defaultStyle,
		};
		graph.backgroundColor(model.style.background);
	},

	updateFilters: () => {
		update((m) => {
			updateForceGraphDataFromModel(m);
		});
	},
};

function initDataviz() {
	const elem = document.getElementById(CONTAINER_ID);
	const painter = new Painter();
	graph(elem)
		.graphData(model.data)
		.backgroundColor(model.style.background)
		.linkHoverPrecision(8)
		.d3Force('x', d3.forceX())
		.d3Force('y', d3.forceY())
		.d3Force('collide', d3.forceCollide(graph.nodeRelSize()))
		.linkWidth(() => model.style.lineWidth)
		.linkDirectionalParticles(1)
		.linkDirectionalParticleWidth((link) =>
			getLinkState(link, model) === 'highlighted'
				? model.style.particleWidth
				: 0,
		)
		.nodeCanvasObject((node, ctx, globalScale) => {
			const info = model.graph.nodeInfo[node.id];
			if (info == null) {
				console.error(`Could not find info for node ${node.id} - skipping`);
				return;
			}
			const size = getNodeSize(info.neighbors.length);
			const {fill, border} = getNodeColor(node.id, model);
			const fontSize = model.style.fontSize / globalScale;
			const nodeState = getNodeState(node.id, model);
			const textColor = fill.copy({
				opacity:
					nodeState === 'regular'
						? getNodeLabelOpacity(globalScale)
						: nodeState === 'highlighted'
						? 1
						: Math.min(getNodeLabelOpacity(globalScale), fill.opacity),
			});
			const label = info.title;

			painter
				.circle(node.x, node.y, size, fill, border)
				.text(label, node.x, node.y + size + 1, fontSize, textColor);
		})
		.onRenderFramePost((ctx) => {
			painter.paint(ctx);
		})
		.linkColor((link) => getLinkColor(link, model))
		.onNodeHover((node) => {
			Actions.highlightNode(node?.id);
		})
		.onNodeClick((node, event) => {
			Actions.selectNode(node.id, event.getModifierState('Shift'));
		})
		.onBackgroundClick((event) => {
			Actions.selectNode(null, event.getModifierState('Shift'));
		})
		.zoom(1.2);
}

function augmentGraphInfo(graph) {
	Object.values(graph.nodeInfo).forEach((node) => {
		node.neighbors = [];
		node.links = [];
		if (node.tags && node.tags.length > 0) {
			node.tags.forEach((tag) => {
				const tagNode = {
					id: tag.label,
					title: tag.label,
					type: 'tag',
					properties: {},
					neighbors: [],
					links: [],
				};
				graph.nodeInfo[tag.label] = tagNode;
				graph.links.push({
					source: tagNode.id,
					target: node.id,
				});
			});
		}
	});
	graph.links.forEach((link) => {
		const a = graph.nodeInfo[link.source];
		const b = graph.nodeInfo[link.target];
		a.neighbors.push(b.id);
		b.neighbors.push(a.id);
		a.links.push(link);
		b.links.push(link);
	});
	return graph;
}

function updateForceGraphDataFromModel(m) {
	const nodeIdsToAdd = new Set(
		Object.values(m.graph.nodeInfo ?? {})
			.filter((n) => model.showNodesOfType[n.type])
			.map((n) => n.id),
	);

	const nodeIdsToRemove = new Set();

	m.data.nodes.forEach((node) => {
		if (nodeIdsToAdd.has(node.id)) {
			nodeIdsToAdd.delete(node.id);
		} else {
			nodeIdsToRemove.add(node.id);
		}
	});

	nodeIdsToRemove.forEach((id) => {
		const index = m.data.nodes.findIndex((n) => n.id === id);
		m.data.nodes.splice(index, 1);
	});

	nodeIdsToAdd.forEach((nodeId) => {
		m.data.nodes.push({
			id: nodeId,
		});
	});

	m.data.links = m.graph.links
		.filter((link) => {
			const isSource = Object.values(m.data.nodes).some(
				(node) => node.id === link.source,
			);
			const isTarget = Object.values(m.data.nodes).some(
				(node) => node.id === link.target,
			);
			return isSource && isTarget;
		})
		.map((link) => ({...link}));

	m.hoverNode = m.graph.nodeInfo[m.hoverNode] != null ? m.hoverNode : null;
	m.selectedNodes = new Set(
		Array.from(m.selectedNodes).filter((nId) => m.graph.nodeInfo[nId] != null),
	);

	graph.graphData(m.data);
}

const getNodeSize = d3
	.scaleLinear()
	.domain([0, 30])
	.range([0.5, 2])
	.clamp(true);

const getNodeLabelOpacity = d3
	.scaleLinear()
	.domain([1.2, 2])
	.range([0, 1])
	.clamp(true);

function getNodeTypeColor(type, model) {
	const style = model.style;
	return style.node[type ?? 'note'] ?? style.node['note'];
}

function getNodeColor(nodeId, model) {
	const info = model.graph.nodeInfo[nodeId];
	const style = model.style;
	const typeFill = info.properties.color
		? d3.rgb(info.properties.color)
		: d3.rgb(getNodeTypeColor(info.type, model));
	switch (getNodeState(nodeId, model)) {
		case 'regular':
			return {fill: typeFill, border: typeFill};
		case 'lessened':
			const transparent = d3.rgb(typeFill).copy({opacity: 0.05});
			return {fill: transparent, border: transparent};
		case 'highlighted':
			return {
				fill: typeFill,
				border: d3.rgb(style.highlightedForeground),
			};
		default:
			throw new Error('Unknown type for node', nodeId);
	}
}

function getLinkColor(link, model) {
	const style = model.style;
	switch (getLinkState(link, model)) {
		case 'regular':
			return style.lineColor;
		case 'highlighted':
			return style.highlightedForeground;
		case 'lessened':
			return d3.hsl(style.lineColor).copy({opacity: 0.5});
		default:
			throw new Error('Unknown type for link', link);
	}
}

function getNodeState(nodeId, model) {
	return model.selectedNodes.has(nodeId) || model.hoverNode === nodeId
		? 'highlighted'
		: model.focusNodes.size === 0
		? 'regular'
		: model.focusNodes.has(nodeId)
		? 'regular'
		: 'lessened';
}

function getLinkState(link, model) {
	return model.focusNodes.size === 0
		? 'regular'
		: Array.from(model.focusLinks).some(
				(fLink) =>
					fLink.source === link.source.id && fLink.target === link.target.id,
		  )
		? 'highlighted'
		: 'lessened';
}

class Painter {
	circlesByColor = new Map();
	bordersByColor = new Map();
	texts = [];

	_addCircle(x, y, radius, color, isBorder = false) {
		if (color.opacity > 0) {
			const target = isBorder ? this.bordersByColor : this.circlesByColor;
			if (!target.has(color)) {
				target.set(color, []);
			}
			target.get(color).push({x, y, radius});
		}
	}

	_areSameColor(a, b) {
		return a.r === b.r && a.g === b.g && a.b === b.b && a.opacity === b.opacity;
	}

	circle(x, y, radius, fill, border) {
		this._addCircle(x, y, radius + 0.2, border, true);
		if (!this._areSameColor(border, fill)) {
			this._addCircle(x, y, radius, fill);
		}
		return this;
	}

	text(text, x, y, size, color) {
		if (color.opacity > 0) {
			this.texts.push({x, y, text, size, color});
		}
		return this;
	}

	paint(ctx) {
		for (const target of [this.bordersByColor, this.circlesByColor]) {
			for (const [color, circles] of target.entries()) {
				ctx.beginPath();
				ctx.fillStyle = color;
				for (const circle of circles) {
					ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
				}
				ctx.closePath();
				ctx.fill();
			}
			target.clear();
		}

		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';
		for (const text of this.texts) {
			ctx.font = `${text.size}px Sans-Serif`;
			ctx.fillStyle = text.color;
			ctx.fillText(text.text, text.x, text.y);
		}
		this.texts = [];

		return this;
	}
}
</script>

<template>
	<div
		id="graph"
		style="position: absolute; top: 0; left: 0; right: 0; bottom: 0"
	/>
</template>
