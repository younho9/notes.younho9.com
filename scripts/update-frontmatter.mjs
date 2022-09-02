import {readFile, readdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import {omitBy} from 'lodash-es';
import is from '@sindresorhus/is';

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

async function updateFrontatter(path) {
	const file = await readFile(path, 'utf-8');
	const {data: frontmatter, content} = matter(file);

	const newFrontmatter = updateUpdated(updateTags(frontmatter, content));

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
