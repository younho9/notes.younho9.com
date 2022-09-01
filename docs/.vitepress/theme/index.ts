import Theme from 'vitepress/theme';
import DocIndex from './components/DocIndex.vue';
import Graph from './components/Graph.vue';
import LatestDocs from './components/LatestDocs.vue';

import './style/vars.css';
import './style/main.css';

export default {
	...Theme,
	enhanceApp({app}) {
		app.component('DocIndex', DocIndex);
		app.component('Graph', Graph);
		app.component('LatestDocs', LatestDocs);
	},
};
