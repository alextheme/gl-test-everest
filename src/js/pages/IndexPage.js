import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import grid from '../components/gtid';
import popup from '../components/popup';
import header from '../components/header';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		grid();
		popup(GLOBAL_VARS);
		header();
	}

	init() {
		pageLoad(() => {
			this.loadFunc();
		});
	}
}
