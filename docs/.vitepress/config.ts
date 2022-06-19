import {defineConfig} from 'vitepress';
import path from 'path';
import fs from 'fs';

const directoryPath = path.join(__dirname, '../notes');
const files = fs.readdirSync(directoryPath);
const notes = files
	.filter((file) => !file.startsWith('.'))
	.map((publicFile) => publicFile.replace(/.md/, ''));

export default defineConfig({
	title: 'Younho9 Notes',
	description: '',

	lastUpdated: true,

	themeConfig: {
		siteTitle: 'Younho9 Notes',

		logo: 'https://raw.githubusercontent.com/younho9/younho9.dev/main/src/assets/logo.png',

		sidebar: {
			'/notes/': [
				{
					text: 'Notes',
					collapsible: true,
					items: notes.map((note) => ({text: note, link: `/notes/${note}`})),
				},
			],
		},

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
});
