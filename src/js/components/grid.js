import { onWindowResize } from '../utils';
import { GLOBAL_VARS } from '../utils/constants';

export default function grid() {
	/**
	 * the function wraps each word of the text in a block.
	 * Cleans up Html code (span) and instead sets the class "title_accent_word"
	 * @returns void
	 */
	const wrapWordsInBlocks = () => {
		function wrapText($node, text) {
			if (!$node || !text) return;
			const arrText = text.split(' ');

			const clearSpan = word => word.replace('<span>', '').replace('</span>', '');
			const wrapInDiv = (isAccent, word) => `<div class="word word--${isAccent ? 'accent_mod' : ''}">${clearSpan(word)}</div>`;

			//
			let accent = false;
			const str = arrText.reduce((result, word) => {
				accent = !accent ? word.indexOf('<span>') >= 0 : accent;
				const currentData = result + wrapInDiv(accent, word);
				accent = accent ? !(word.indexOf('</span>') >= 0) : accent;
				return currentData;
			}, '');

			$node.html(str);
		}

		if ($('.js-grid_item__title_link')) {
			const $nodeV1 = $('.js-grid_item__title_link');
			wrapText($nodeV1, $nodeV1.html());
		}

		if ($('.v2_grid_item--style_a1_mod .js-v2_grid_item__link_title')) {
			const $nodeV2 = $('.v2_grid_item--style_a1_mod .js-v2_grid_item__link_title');
			wrapText($nodeV2, $nodeV2.html());
		}
	};

	wrapWordsInBlocks();

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
