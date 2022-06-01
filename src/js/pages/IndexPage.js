import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import grid from '../components/gtid';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		grid();
	}

	init() {
		pageLoad(() => {
			this.loadFunc();
		});
	}
}
