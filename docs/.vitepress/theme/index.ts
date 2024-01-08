import {Theme} from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import {CarbonIconsVue, Search24, FilterRemove24} from '@carbon/icons-vue';
import GridLoader from 'vue-spinner/src/GridLoader.vue';
import DocIndex from './components/DocIndex.vue';
import Graph from './components/Graph.vue';
import Metadata from './components/Metadata.vue';
import Random from './components/Random.vue';

import './style/vars.css';
import './style/main.css';

export default <Theme>{
	extends: DefaultTheme,
	enhanceApp({app}) {
		app.use(CarbonIconsVue, {
			components: {
				ISearch: Search24,
				IFilterRemove: FilterRemove24,
			},
		});
		app.component('GridLoader', GridLoader);
		app.component('DocIndex', DocIndex);
		app.component('Graph', Graph);
		app.component('Metadata', Metadata);
		app.component('Random', Random);
	},
};
