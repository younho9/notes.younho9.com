import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

function getDocFiles(pathname) {
	const docsDir = path.join(pathname);
	const isMarkdown = (file) => path.extname(file) === '.md';

	return fs.readdirSync(docsDir).filter((file) => isMarkdown(file));
}

function getDocInfo(pathname, type) {
	const docfile = path.join(pathname);
	const content = fs.readFileSync(docfile, 'utf-8');
	const {data} = matter(content);

	const docInfo = {
		filePath: pathname,
		fileName: path.basename(docfile, '.md'),
		...data,
	};

	return docInfo;
}

const data = getDocFiles('./docs/notes').map((file) =>
	getDocInfo(`./docs/notes/${file}`, 'note'),
);

fs.writeFileSync('./docs/data.json', JSON.stringify(data), 'utf-8');
