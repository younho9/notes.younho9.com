import Theme from 'vitepress/theme';
import LatestDocs from './components/LatestDocs.vue';

import './style/vars.css';
import './style/main.css';

export default {
	...Theme,
	enhanceApp({app}) {
		app.component('LatestDocs', LatestDocs);
	},
};
