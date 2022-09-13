export enum DocType {
	'Note' = 'note',
	'Journal' = 'journal',
}

export interface DocItem {
	filePath: string;
	fileName: string;
	type: DocType;
	title: string;
	category: string;
	tags?: string[];
	aliases?: string[];
	related?: string[];
	created: string;
	updated: string;
}
