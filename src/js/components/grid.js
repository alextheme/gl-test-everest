export default function grid(globalVars) {
	/**
	 * the function wraps each word of the text in a block.
	 * Cleans up Html code (span) and instead sets the class "title_accent_word"
	 * @returns void
	 */
	const wrapWordsInBlocks = () => {
		function validateText($node, text) {
			if (!$node || !text) return;

			let at = text.split(' ');

			if (at.length === 5) {
				$node.css('color', 'yellow');
			} else if (at.length > 5) {
				at.length = 5;
				$node.css('color', 'yellow');
			}
		}

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

		const $nodeV1 = $('.js-grid_item__title_link');
		wrapText($nodeV1, $nodeV1.html());

		const $nodeV2 = $('.v2_grid_item--style_a1_mod .js-v2_grid_item__link_title');
		wrapText($nodeV2, $nodeV2.html());
	};

	wrapWordsInBlocks();

	/**
	 * this function replaces classes for resizing blocks on screen resize
	 */
	const resizingBlocks = () => {
		const widthWindow = $(window).width();

		// 1200px - 1024px
		if (widthWindow <= 1200 && widthWindow > globalVars.mediaPoint1) {
			console.log('1200px - 1024px');
		}

		// 1024px - 768px
		if (widthWindow <= globalVars.mediaPoint1 && widthWindow > globalVars.mediaPoint2) {
			console.log('1024px - 768px');
		}

		// 768px - 480px
		if (widthWindow <= globalVars.mediaPoint2 && widthWindow > globalVars.mediaPoint3) {
			console.log('768px - 480px');
		}
	};

	resizingBlocks();
	$(window).on('resize', () => {
		resizingBlocks();
	});
}
