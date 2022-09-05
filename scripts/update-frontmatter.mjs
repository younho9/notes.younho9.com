import {readFile, readdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import {omitBy} from 'lodash-es';
import is from '@sindresorhus/is';
import MarkdownIt from 'markdown-it';
import Plugin from 'markdown-it-regexp';

function updateUpdated(frontmatter) {
	return omitBy(
		{
			...frontmatter,
			updated: frontmatter.updated ? new Date() : undefined,
		},
		is.undefined,
	);
}

function updateTags(frontmatter, content) {
	const tagRegex = /(?<=[\s>])(\#[a-zA-Z]+\b)(?![;()])/g;

	const inlineTags = [...content.matchAll(tagRegex)]
		.map((matches) => matches[1])
		.map((tag) => tag.split('#')[1]);

	const newTags = new Set(
		frontmatter.tags ? [...frontmatter.tags, ...inlineTags] : [...inlineTags],
	);

	return omitBy(
		{
			...frontmatter,
			tags: newTags.size > 0 ? [...newTags] : undefined,
		},
		is.undefined,
	);
}

function updateRelated(frontmatter, content) {
	const relatedDocs = getRelatedDocs(content);

	return omitBy(
		{
			...frontmatter,
			related: relatedDocs.size > 0 ? [...relatedDocs] : undefined,
		},
		is.undefined,
	);

	function getRelatedDocs(content) {
		const relatedDocs = new Set();
		const wikilinkPlugin = Plugin(
			/\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/,
			(match) => {
				relatedDocs.add(match[1]);

				return match[0];
			},
		);

		new MarkdownIt().use(wikilinkPlugin).render(content);

		return relatedDocs;
	}
}

async function updateFrontatter(path) {
	const file = await readFile(path, 'utf-8');
	const {data: frontmatter, content} = matter(file);

	const newFrontmatter = updateUpdated(
		updateTags(updateRelated(frontmatter, content), content),
	);

	await writeFile(path, matter.stringify(content, newFrontmatter));

	console.log(`- [x] ${path}`);
}

async function getDocFiles() {
	const docDirs = ['./docs/notes', './docs/journals'];
	const isMarkdown = (file) => path.extname(file) === '.md';

	const docFiles = (
		await Promise.all(
			docDirs.map(async (docDir) =>
				(await readdir(docDir))
					.filter((file) => isMarkdown(file))
					.map((docFile) => path.join(docDir, docFile)),
			),
		)
	).flat();

	return docFiles;
}

async function main(files) {
	await Promise.all(files.map((file) => updateFrontatter(file)));
}

/**
 * Update on pre-commit
 */
main(process.argv.slice(2));

/**
 * Bulk update
 */
// main(await getDocFiles());
