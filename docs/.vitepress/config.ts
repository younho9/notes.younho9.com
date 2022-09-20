import path from 'path';
import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-filename';
import uniq from 'lodash.uniq';
import {defineConfig} from 'vitepress';
import {
	description,
	facebook,
	github,
	instagram,
	linkedin,
	logo,
	ogImage,
	ogUrl,
	title,
	twitter,
	unsplash,
	spotify,
	author,
	keywords,
} from './meta';
import data from '../data.json';
import {isJournal} from './utils';

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

		editLink: {
			pattern: 'https://github.com/younho9/notes/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},

		socialLinks: [
			{icon: 'github', link: github},
			{icon: 'twitter', link: twitter},
			{icon: 'linkedin', link: linkedin},
			{icon: 'facebook', link: facebook},
			{icon: 'instagram', link: instagram},
			{icon: 'unsplash', link: unsplash},
			{icon: 'spotify', link: spotify},
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
			md.use(require('markdown-it-external-links'), {
				externalClassName: 'external-link',
				internalDomains: ['notes.younho9.com'],
			});
			md.use(require('./markdown/plugins/embed-notes'), {
				resolveFilePath: (fileName: string) =>
					path.resolve(
						'./docs',
						isJournal(fileName)
							? `journals/${fileName}.md`
							: `notes/${fileName}.md`,
					),
			});
			md.use(
				require('markdown-it-wikilinks')({
					htmlAttributes: {
						class: 'wikilink',
					},
					makeAllLinksAbsolute: true,
					postProcessPageName: (pageName: string) => {
						pageName = pageName.trim();
						pageName = pageName
							.split('/')
							.map((pathName) => sanitize(pathName))
							.join('/');

						return isJournal(pageName)
							? `/journals/${pageName}`
							: `/notes/${pageName}`;
					},
				}),
			);
			md.use(require('markdown-it-task-lists'));
			md.use(require('markdown-it-hashtag'));
			md.renderer.rules.hashtag_open = function (tokens: any, idx: number) {
				const tag = tokens[idx].content;

				return `<a href="/docs?tags=${tag}" class="tag">`;
			};
			md.use(require('markdown-it-footnote'));
		},
	},
});

function nav() {
	return [
		{
			text: 'Docs',
			items: [
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
				{
					text: 'Types',
					items: [
						{
							text: 'Notes',
							link: notes()[0].items[0].link,
							activeMatch: '/notes/',
						},
						{
							text: 'Journals',
							link: journals()[0].items[0].link,
							activeMatch: '/journals/',
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
		'/journals/': journals(),
	};
}

function notes() {
	const categories = uniq(data.notes.map(({category}) => category));

	return categories
		.sort((a, b) => a.toLowerCase().localeCompare(b))
		.map((category) => ({
			text: category,
			collapsible: true,
			items: data.notes
				.filter((note) => note.category === category)
				.sort((a, b) => a.title.toLowerCase().localeCompare(b.title))
				.map(({title, fileName}) => ({
					text: title,
					link: `/notes/${fileName.replace(/.md/, '')}`,
				})),
		}));
}

function journals() {
	const categories = uniq(data.journals.map(({category}) => category));

	return categories.reverse().map((category) => ({
		text: String(category),
		collapsible: true,
		items: data.journals
			.filter((journal) => journal.category === category)
			.sort((a, b) => b.title.toLowerCase().localeCompare(a.title))
			.map(({title}) => ({
				text: title,
				link: `/journals/${title}`,
			})),
	}));
}
