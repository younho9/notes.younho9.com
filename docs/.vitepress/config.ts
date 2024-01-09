import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-filename';
import {uniq} from 'lodash-es';
import {defineConfig} from 'vitepress';
import {
	description,
	github,
	linkedin,
	logo,
	ogImage,
	ogUrl,
	title,
	twitter,
	author,
	keywords,
} from './meta';
import data from '../data.json';
import markdownItExternalLinks from 'markdown-it-external-links';
import markdownItEmbedNotes from './markdown/plugins/embed-notes';
import markdownItWikilinks from 'markdown-it-wikilinks';
import markdownItTaskLists from 'markdown-it-task-lists';
import markdownItHashtag from 'markdown-it-hashtag';
import markdownItFootnote from 'markdown-it-footnote';

export default defineConfig({
	lang: 'ko-KR',
	title,
	description,
	head: [
		['meta', {name: 'theme-color', content: '#ffffff'}],
		['link', {rel: 'icon', href: logo, type: 'image/svg+xml'}],
		['link', {rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16'}], // prettier-ignore
		['meta', {name: 'author', content: author}],
		['meta', {name: 'keywords', content: keywords.join(', ')}], // prettier-ignore
		['meta', {property: 'og:title', content: title}],
		['meta', {property: 'og:description', content: description}],
		['meta', {property: 'og:url', content: ogUrl}],
		['meta', {property: 'og:image', content: ogImage}],
		['meta', {name: 'twitter:title', content: title}],
		['meta', {name: 'twitter:description', content: description}],
		['meta', {name: 'twitter:image', content: ogImage}],
		['meta', {name: 'twitter:card', content: 'summary_large_image'}],
		['link', {rel: 'mask-icon', href: logo, color: '#ffffff'}],
		['link', {rel: 'apple-touch-icon', href: logo, sizes: '180x180'}],
	],
	lastUpdated: false,
	themeConfig: {
		siteTitle: title,
		logo,
		nav: nav(),
		sidebar: sidebar(),
		search: {
			provider: 'local',
			options: {
				_render(src, env, md) {
					const html = md.render(src, env);

					if (env.frontmatter?.title) {
						return md.render(`# ${env.frontmatter.title}`) + html;
					}

					return html;
				},
			},
		},
		editLink: {
			pattern: 'https://github.com/younho9/notes/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},
		socialLinks: [
			{icon: 'github', link: github},
			{icon: 'twitter', link: twitter},
			{icon: 'linkedin', link: linkedin},
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © 2022-present ${author}`,
		},
	},
	markdown: {
		theme: {
			light: 'vitesse-light',
			dark: 'vitesse-dark',
		},
		config: (md: MarkdownIt) => {
			md.use(markdownItExternalLinks, {
				externalClassName: 'external-link',
				internalDomains: ['notes.younho9.com'],
			});
			md.use(markdownItEmbedNotes, {
				srcDir: './docs/notes',
			});
			md.use(
				markdownItWikilinks({
					htmlAttributes: {
						class: 'wikilink',
					},
					makeAllLinksAbsolute: true,
					postProcessPageName: (pageName: string) => {
						pageName = pageName
							.trim()
							.split('/')
							.map((pathName) => sanitize(pathName))
							.join('/');

						return `/notes/${pageName}`;
					},
				}),
			);
			md.use(markdownItTaskLists);
			md.use(markdownItHashtag);
			md.renderer.rules.hashtag_open = function (tokens: any, idx: number) {
				const tag = tokens[idx].content;

				return `<a href="/docs?tags=${tag}" class="tag">`;
			};
			md.use(markdownItFootnote);
		},
	},
	srcExclude: [
		'notes/.obsidian/**/*',
		'notes/archived/**/*',
		'notes/private/**/*',
		'notes/templates/*.md',
	],
});

function nav() {
	return [
		{
			text: 'Docs',
			items: [
				{
					text: 'All Notes',
					link: notes()[0].items[0].link,
					activeMatch: '/notes/',
				},
				{
					text: 'References',
					items: [
						{
							text: 'Index',
							link: '/docs.html',
							activeMatch: 'docs',
						},
						{
							text: 'Random',
							link: '/random.html',
						},
					],
				},
			],
		},
		{
			text: 'Graph',
			link: '/graph.html',
			activeMatch: 'graph',
		},
	];
}

function sidebar() {
	return {
		'/notes/': notes(),
	};
}

function notes() {
	const categories = uniq(data.map(({category}) => category));

	return categories
		.sort((a, b) => a.toLowerCase().localeCompare(b))
		.map((category) => ({
			text: category,
			collapsible: true,
			items: data
				.filter((note) => note.category === category)
				.sort((a, b) => a.title.toLowerCase().localeCompare(b.title))
				.map(({title, fileName}) => ({
					text: title,
					link: `/notes/${fileName.replace(/.md/, '')}`,
				})),
		}));
}
