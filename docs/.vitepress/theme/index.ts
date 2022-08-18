import Theme from 'vitepress/theme';
import LatestNotes from './components/LatestNotes.vue';
import LatestJournals from './components/LatestJournals.vue';

import './style/vars.css';
import './style/main.css';

export default {
	...Theme,
	enhanceApp({app}) {
		app.component('LatestNotes', LatestNotes);
		app.component('LatestJournals', LatestJournals);
	},
};
