export default function grid() {
	/**
	 * the function wraps each word of the text in a block.
	 * Cleans up Html code (span) and instead sets the class "title_accent_word"
	 * @returns void
	 */
	const wrapWordsInBlocks = () => {
		const $node = $('.jsGridItemTitle.grid_item__title--accent1_mod');
		if (!$node) return;

		const html = $node.children('a').html();
		const arrText = html.split(' ');

		const clearSpan = word => word.replace('<span>', '').replace('</span>', '');
		const wrapInDiv = (isAccent, word) => `<div class="${isAccent ? 'title_accent_word' : ''} title_word">${clearSpan(word)}</div>`;

		// !!!!!Digital transformation@@@@@ resulttricted по-!!!!!syntax@@@@@ по-украински'.split(' ');
		let accent = false;
		const str = arrText.reduce((result, word) => {
			accent = !accent ? word.indexOf('<span>') >= 0 : accent;
			const currentData = result + wrapInDiv(accent, word);
			accent = accent ? !(word.indexOf('</span>') >= 0) : accent;
			return currentData;
		}, '');

		$node.children('a').html(str);
	};

	wrapWordsInBlocks();
}
