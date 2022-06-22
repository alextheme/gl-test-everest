export default function grid(globalVars) {
	/**
	 * the function wraps each word of the text in a block.
	 * Cleans up Html code (span) and instead sets the class "title_accent_word"
	 * @returns void
	 */
	const wrapWordsInBlocks = () => {
		const $node = $('.js-grid_item__title_link');
		if (!$node) return;

		const text = $node.html();
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
	};

	wrapWordsInBlocks();

	/**
	 * this function replaces classes for resizing blocks on screen resize
	 */
	const resizingBlocks = () => {
		// 'resize_col_to_row': [14, 20, 30],
		// 'resize_row_to_col': [16, 22, 25],
		// 'resize_min_to_row': [24, 26],
		// 'resize_min_to_col': [24, 26],
		// 'resize_col_to_big': [30],

		// const item_resize = Object.keys(resize_mods).filter(key => resize_mods[key].includes(number_item)) || null;

		// mediaPoint1: 1024,
		// mediaPoint2: 768,
		// mediaPoint3: 480,
		// mediaPoint4: 320,
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
