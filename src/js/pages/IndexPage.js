import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import grid from '../components/gtid';
import popup from '../components/popup';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		grid();
		popup();
	}

	init() {
		pageLoad(() => {
			this.loadFunc();
		});
	}
}
