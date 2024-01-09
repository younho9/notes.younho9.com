import path from 'node:path';
import fs from 'node:fs';
import matter from 'gray-matter';
import type * as MarkdownIt from 'markdown-it';

const EMBED_NOTES_RE = /(?<!`)!\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\](?<!`)/;

type Options = {
	embedNotesRe: RegExp;
	notFoundMessage: string;
	circularMessage: string;
	srcDir: string;
};

const breadthFirstFileSearch = (rootPath: string, targetFile: string) => {
	const queue = [rootPath];

	while (queue.length > 0) {
		const currentPath = queue.shift() as string;
		const files = fs.readdirSync(currentPath);

		for (const file of files) {
			const filePath = path.join(currentPath, file);
			const stat = fs.statSync(filePath);

			const fileName = path.parse(file).name;
			const targetFileName = path.parse(targetFile).name;

			if (stat.isFile() && fileName === targetFileName) {
				return path.resolve(filePath);
			}

			if (stat.isDirectory()) {
				queue.push(filePath);
			}
		}
	}

	return null;
};

const embedNotesPlugin: MarkdownIt.PluginWithOptions<Partial<Options>> = (
	md,
	opts,
) => {
	const defaultOptions: Options = {
		embedNotesRe: EMBED_NOTES_RE,
		notFoundMessage: "Note '{{NOTE}}' not found.",
		circularMessage: "Circular reference between '{{NOTE}}' and '{{PARENT}}'.",
		srcDir: './docs',
	};

	const options: Options = {
		...defaultOptions,
		...opts,
	};

	const replaceEmbedNotesByContent = (
		src: string,
		parentFilePath?: string,
		filesProcessed?: string[],
	) => {
		filesProcessed = filesProcessed ? [...filesProcessed] : [];

		if (parentFilePath) {
			filesProcessed.push(parentFilePath);
		}

		let match;

		while ((match = options.embedNotesRe.exec(src))) {
			const fileName = match[1];
			const label = match[3];

			const filePath = breadthFirstFileSearch(options.srcDir, fileName);

			if (filePath === null) {
				throw new Error(options.notFoundMessage.replace('{{NOTE}}', fileName));
			}

			if (filesProcessed.indexOf(filePath) !== -1) {
				throw new Error(
					options.circularMessage
						.replace('{{NOTE}}', filePath)
						.replace('{{PARENT}}', parentFilePath ?? ''),
				);
			}

			const file = fs.readFileSync(filePath, 'utf-8');
			const {content, data} = matter(file);

			const embedContent = replaceEmbedNotesByContent(
				content,
				filePath,
				filesProcessed,
			);

			src =
				src.slice(0, match.index) +
				`::: details [[${fileName}|${label ?? data.title}]]\n` +
				embedContent +
				`:::\n` +
				`\n` +
				src.slice(match.index + match[0].length, src.length);
		}

		return src;
	};

	const embedNotes: MarkdownIt['core']['process'] = (state) => {
		state.src = replaceEmbedNotesByContent(state.src);
	};

	md.core.ruler.before('normalize', 'embedNotes', embedNotes);
};

export default embedNotesPlugin;
