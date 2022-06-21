const fs = require('fs');
const path = require('path');

const notes = fs
	.readdirSync(path.join(__dirname, '../docs/notes'))
	.filter((file) => path.extname(file) === '.md');

notes.forEach((fileName) => {
	fs.renameSync(
		path.join(__dirname, '../docs/notes/', fileName),
		path.join(__dirname, '../docs/notes/', fileName.replace(/_/g, '-')),
	);
});
