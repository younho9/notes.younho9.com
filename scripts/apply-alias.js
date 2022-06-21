const fs = require('fs');
const path = require('path');

const notePaths = fs
	.readdirSync(path.join(__dirname, '../docs/notes'))
	.map((file) => path.join(__dirname, '../docs/notes', file))
	.filter((filePath) => path.extname(filePath) === '.md');

notePaths.forEach((path) => {
	const content = fs.readFileSync(path).toString();
	const wikiLinkRegex = /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/g;

	const newContent = content.replace(wikiLinkRegex, (match, aliasName) => {
		const fileName = aliasName.replace(/\s/g, '-');

		if (fileName === aliasName) {
			return match;
		}

		return `[[${fileName}|${aliasName}]]`;
	});

	fs.writeFileSync(path, newContent);
});
