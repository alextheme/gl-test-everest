export default function grid() {
	const gridItems = Array.from(document.querySelectorAll('.item_grid '));

	const mods = {
		'item_grid--position_1_mod': [1],
		'item_grid--position_2_mod': [15, 23],
		'item_grid--position_row_mod': [6, 10, 13, 16, 17, 21, 22, 25, 27, 31],
		'item_grid--position_col_mod': [7, 14, 18, 19, 20, 28, 29, 30],
	};

	function parseIndex(index) {
		const offset = 13;
		const step = 19;
		const remainder = (index - offset) % step;
		return (remainder === 0) ? offset : remainder + offset;
	}

	function getKeyByValue(object, value) {
		const index = parseIndex(value);
		return Object.keys(object).find(key =>	object[key].includes(index));
	}

	// gridItems.forEach((item, index) => {
	// 	const mod = getKeyByValue(mods, index + 1);
	// 	if (mod) item.classList.add(mod);
	// });
}
