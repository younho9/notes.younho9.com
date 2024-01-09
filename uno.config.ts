import {
	defineConfig,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss';

export default defineConfig({
	presets: [presetUno()],
	theme: {
		colors: {
			primary: '#6da13f',
		},
	},
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
