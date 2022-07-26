import wikilinks from 'markdown-it-wikilinks';
import externalLinks from 'markdown-it-external-links';
import sanitize from 'sanitize-filename';
import {defineConfig} from 'vitepress';
import path from 'path';
import fs from 'fs';
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
	author,
	keywords,
} from './meta';

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
	lastUpdated: true,
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
		],

		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © 2022-present ${author}`,
		},
	},

	markdown: {
		config: (md) => {
			md.use(externalLinks, {
				externalClassName: 'external-link',
				internalDomains: ['notes.younho9.com'],
			});

			md.use(
				wikilinks({
					htmlAttributes: {
						class: 'wikilink',
					},
					makeAllLinksAbsolute: true,
					postProcessPageName: (pageName) => {
						pageName = pageName.trim();
						pageName = pageName.split('/').map(sanitize).join('/');

						const isJournal = /^\d{4}-\d{2}-\d{2}$/.test(pageName);

						return isJournal ? `/journals/${pageName}` : `/notes/${pageName}`;
					},
				}),
			);
		},
	},
});

function getDocs(pathname: string) {
	const isPublic = (file: string) => !file.startsWith('.');
	const isMarkdown = (file: string) => path.extname(file) === '.md';

	return fs
		.readdirSync(path.join(__dirname, '../', pathname))
		.filter((file) => isPublic(file) && isMarkdown(file))
		.map((publicFile) => publicFile.replace(/.md/, ''));
}

function nav() {
	return [
		{
			text: 'Notes',
			link: '/notes/index.html',
			activeMatch: '/notes/',
		},
		{
			text: 'Journals',
			link: `/journals/${getDocs('journals').reverse().at(0)}`,
			activeMatch: '/journals/',
		},
	];
}

function sidebar() {
	return {
		'/notes/': [
			{
				text: 'Notes',
				collapsible: true,
				items: getDocs('notes').map((note) => ({
					text: note.replace(/-/g, ' '),
					link: `/notes/${note}`,
				})),
			},
		],
		'/journals/': [
			{
				text: 'Journals',
				collapsible: true,
				items: getDocs('journals')
					.reverse()
					.map((journal) => ({
						text: journal,
						link: `/journals/${journal}`,
					})),
			},
		],
	};
}
