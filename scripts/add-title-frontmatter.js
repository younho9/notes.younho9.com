const fs = require('fs');
const path = require('path');

const notePaths = fs
	.readdirSync(path.join(__dirname, '../docs/notes'))
	.map((file) => path.join(__dirname, '../docs/notes', file))
	.filter((filePath) => path.extname(filePath) === '.md');

notePaths.forEach((notePath) => {
	const content = fs.readFileSync(notePath).toString();
	const title = path.basename(notePath).split('.md')[0].replace(/-/g, ' ');

	const frontMatterStartRegex = /(---\n)/;

	const newContent = content.replace(frontMatterStartRegex, (match) => {
		return `${match}title: ${title}\n`;
	});

	fs.writeFileSync(notePath, newContent);
});
