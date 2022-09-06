import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

function getDocFiles(pathname) {
	const isMarkdown = (file) => path.extname(file) === '.md';
	const docsDir = path.join(pathname);

	return fs.readdirSync(docsDir).filter((file) => isMarkdown(file));
}

function getDocInfo(pathname, type) {
	const docfile = path.join(pathname);
	const content = fs.readFileSync(docfile, 'utf-8');
	const {data} = matter(content);

	const docInfo = {
		filePath: pathname,
		fileName: path.basename(docfile, '.md'),
		type,
		...data,
	};

	return docInfo;
}

const data = {
	notes: getDocFiles('./docs/notes').map((file) =>
		getDocInfo(`./docs/notes/${file}`, 'note'),
	),
	journals: getDocFiles('./docs/journals').map((file) =>
		getDocInfo(`./docs/journals/${file}`, 'journal'),
	),
};

fs.writeFileSync('./docs/data.json', JSON.stringify(data), 'utf-8');
