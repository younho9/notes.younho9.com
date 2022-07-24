import wikilinks from 'markdown-it-wikilinks';
import externalLinks from 'markdown-it-external-links';
import sanitize from 'sanitize-filename';
import {defineConfig} from 'vitepress';
import path from 'path';
import fs from 'fs';

export default defineConfig({
	lang: 'ko-KR',
	title: 'Younho9 Notes',
	description: '',
	head: [
		['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }], // prettier-ignore
	],

	lastUpdated: true,

	themeConfig: {
		siteTitle: 'Younho9 Notes',

		logo: 'https://raw.githubusercontent.com/younho9/younho9.dev/main/src/assets/logo.png',

		nav: nav(),

		sidebar: sidebar(),

		editLink: {
			pattern: 'https://github.com/younho9/notes/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},

		socialLinks: [
			{icon: 'github', link: 'https://github.com/younho9'},
			{icon: 'twitter', link: 'https://twitter.com/younho_9'},
			{icon: 'linkedin', link: 'https://www.linkedin.com/in/younho9'},
			{icon: 'facebook', link: 'https://www.facebook.com/younho9.choo'},
			{icon: 'instagram', link: 'https://www.instagram.com/younho_9/'},
		],

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022-present Younho Choo',
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
