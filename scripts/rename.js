const fs = require('fs');

const files = fs.readdirSync(__dirname + '/../docs/notes');

files.forEach((file) => {
	const fileName = file.split('.')[0];
	const newFileName = fileName.replace(/\s/g, '_');

	fs.renameSync(
		__dirname + '/../docs/notes/' + file,
		__dirname + '/../docs/notes/' + newFileName + '.md',
	);
});
