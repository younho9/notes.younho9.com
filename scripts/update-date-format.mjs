import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

function getDocFiles(pathname) {
	const isMarkdown = (file) => path.extname(file) === '.md';
	const docsDir = path.join(pathname);

	return fs.readdirSync(docsDir).filter((file) => isMarkdown(file));
}

function updateDateFormat(path) {
	const file = fs.readFileSync(path, 'utf-8');

	const {data: frontMatter, content} = matter(file);

	fs.writeFileSync(path, matter.stringify(content, frontMatter), 'utf-8');
}

function main() {
	const docPaths = ['./docs/notes', './docs/journals'];
	const docFiles = docPaths
		.map((docPath) =>
			getDocFiles(docPath).map((docFile) => path.join(docPath, docFile)),
		)
		.flat();

	docFiles.forEach((file) => updateDateFormat(file));
}

main();
