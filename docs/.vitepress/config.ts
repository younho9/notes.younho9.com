import path from 'path';
import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-filename';
import {uniq} from 'lodash-es';
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
		},
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
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Unsplash</title><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"/></svg>',
				},
				link: unsplash,
				ariaLabel: 'unsplash',
			},
			{
				icon: {
					svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
				},
				link: spotify,
				ariaLabel: 'spotify',
			},
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
				resolveFilePath: (fileName: string) =>
					path.resolve(`./docs/notes/${fileName}.md`),
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
