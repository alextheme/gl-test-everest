export default function grid() {
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
}
