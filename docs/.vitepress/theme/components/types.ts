export interface DocItem {
	filePath: string;
	fileName: string;
	title: string;
	category: string;
	tags?: string[];
	aliases?: string[];
	related?: string[];
	created: string;
	updated: string;
}
