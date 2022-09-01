import {readFile, writeFile} from 'node:fs/promises';
import matter from 'gray-matter';
import {omitBy} from 'lodash-es';
import is from '@sindresorhus/is';

async function updateFrontMatter(path) {
	const file = await readFile(path, 'utf-8');
	const {data: frontMatter, content} = matter(file);

	const newFrontMatter = omitBy(
		{
			...frontMatter,
			updated: frontMatter.updated ? new Date() : undefined,
		},
		is.undefined,
	);

	await writeFile(path, matter.stringify(content, newFrontMatter));

	console.log(`- [x] ${path}`);
}

async function main() {
	const files = process.argv.slice(2);

	await Promise.all(files.map(updateFrontMatter));
}

main();
