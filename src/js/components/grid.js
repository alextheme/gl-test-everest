import { onWindowResize } from '../utils';
import { GLOBAL_VARS } from '../utils/constants';

export default function grid() {
	/**
	 * this functions replaces classes for resizing blocks on screen resize
	 */
	let reducedWidth1 = false;
	let reducedWidth2 = false;
	const arrayNodes1 = Array.from($('.v2_grid_item')).filter($node => $($node).hasClass('v2_grid_item v2_grid_item--size_32_mod'));
	const arrayNodes2 = Array.from($('.v2_grid_item')).filter($node => $($node).hasClass('v2_grid_item v2_grid_item--size_21_mod'));

	const resizingBlocks = () => {
		if ($(window).width() <= GLOBAL_VARS.mediaPoint2_1) {		// <= 720px
			if (!reducedWidth1) {
				arrayNodes1.forEach($node => $($node).removeClass('v2_grid_item v2_grid_item--size_32_mod').addClass('v2_grid_item v2_grid_item--size_22_mod'));
				reducedWidth1 = true;
			}
		} else {
			if (reducedWidth1) {
				arrayNodes1.forEach($node => $($node).removeClass('v2_grid_item v2_grid_item--size_22_mod').addClass('v2_grid_item v2_grid_item--size_32_mod'));
				reducedWidth1 = false;
			}
		}

		if ($(window).width() <= GLOBAL_VARS.mediaPoint3) {		// <= 480px
			if (!reducedWidth2) {
				arrayNodes2.forEach($node => $($node).removeClass('v2_grid_item v2_grid_item--size_21_mod').addClass('v2_grid_item v2_grid_item--size_12_mod'));
				reducedWidth2 = true;
			}
		} else {
			if (reducedWidth2) {
				arrayNodes2.forEach($node => $($node).removeClass('v2_grid_item v2_grid_item--size_12_mod').addClass('v2_grid_item v2_grid_item--size_21_mod'));
				reducedWidth2 = false;
			}
		}
	};

	resizingBlocks();
	onWindowResize(resizingBlocks);
}
