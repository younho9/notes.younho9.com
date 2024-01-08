import {readFile, readdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import {omitBy, uniq} from 'lodash-es';
import is from '@sindresorhus/is';
import MarkdownIt from 'markdown-it';
import Plugin from 'markdown-it-regexp';

function omitUndefined(object) {
	return omitBy(object, is.undefined);
}

function updateAliases(frontmatter) {
	if (is.undefined(frontmatter.title)) {
		return;
	}

	const newAliases = frontmatter.aliases
		? [frontmatter.title, ...frontmatter.aliases]
		: [frontmatter.title];

	return omitUndefined({
		...frontmatter,
		aliases: newAliases.length > 0 ? uniq([...newAliases]) : undefined,
	});
}

function updateUpdated(frontmatter) {
	return omitUndefined({
		...frontmatter,
		updated: frontmatter.updated ? new Date() : undefined,
	});
}

function updateTags(frontmatter, content) {
	const inlineTags = getInlineTags(content);
	const newTags = frontmatter.tags
		? [...frontmatter.tags, ...inlineTags]
		: [...inlineTags];

	return omitUndefined({
		...frontmatter,
		tags: newTags.length > 0 ? uniq([...newTags]) : undefined,
	});

	function getInlineTags(content) {
		const tags = [];
		const tagPlugin = Plugin(/(^|\s)#([a-zA-Z_]+)/g, (match) => {
			tags.push(match[0].split('#')[1].trim());

			return match[0];
		});

		new MarkdownIt({linkify: true}).use(tagPlugin).render(content);

		return tags;
	}
}

function updateRelated(frontmatter, content) {
	const relatedDocs = getRelatedDocs(content);

	return omitUndefined({
		...frontmatter,
		related: relatedDocs.length > 0 ? uniq([...relatedDocs]) : undefined,
	});

	function getRelatedDocs(content) {
		const relatedDocs = [];
		const wikilinkPlugin = Plugin(
			/\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/,
			(match) => {
				relatedDocs.push(match[1]);

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

	const newFrontmatter = updateAliases(
		updateUpdated(updateTags(updateRelated(frontmatter, content), content)),
	);

	await writeFile(
		path,
		matter.stringify(
			content,
			omitUndefined({
				title: newFrontmatter.title,
				category: newFrontmatter.category,
				tags: newFrontmatter.tags,
				aliases: newFrontmatter.aliases,
				related: newFrontmatter.related,
				created: newFrontmatter.created,
				updated: newFrontmatter.updated,
			}),
		),
	);

	console.log(`- [x] ${path}`);
}

async function getDocFiles() {
	const docDirs = ['./docs/notes'];
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
