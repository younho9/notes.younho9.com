const fs = require('fs');
const path = require('path');

const notePaths = fs
	.readdirSync(path.join(__dirname, '../docs/notes'))
	.map((file) => path.join(__dirname, '../docs/notes', file))
	.filter((filePath) => path.extname(filePath) === '.md');

notePaths.forEach((notePath) => {
	const content = fs.readFileSync(notePath).toString();
	const frontMatterCloseRegex = /(---\n\n)/g;
	const header = path.basename(notePath).split('.md')[0].replace(/-/g, ' ');

	const newContent = content.replace(frontMatterCloseRegex, (match) => {
		return `${match}# ${header}\n\n`;
	});

	fs.writeFileSync(notePath, newContent);
});
