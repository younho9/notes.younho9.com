import fs from 'node:fs';
import path from 'node:path';
import {format} from 'date-fns';

function getDocFiles(pathname) {
	const isMarkdown = (file) => path.extname(file) === '.md';
	const docsDir = path.join(pathname);

	return fs.readdirSync(docsDir).filter((file) => isMarkdown(file));
}

const docPaths = ['./docs/notes', './docs/journals'];
const docFiles = docPaths
	.map((docPath) =>
		getDocFiles(docPath).map((docFile) => path.join(docPath, docFile)),
	)
	.flat();

function updateDateFormat(file) {
	const content = fs.readFileSync(file, 'utf-8');

	const dateRegex =
		/(created|updated):\s(\d{4}-\d{2}-\d{2})(?:\s(\d{2}:\d{2}))?\n/g;

	const newContent = content.replace(dateRegex, (match, matter, date, time) => {
		const newDate = new Date(`${date}T${time ?? '00:00'}+09:00`);

		return `${matter}: ${format(newDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}\n`;
	});

	fs.writeFileSync(file, newContent, 'utf-8');
}

docFiles.forEach((file) => updateDateFormat(file));
