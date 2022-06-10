// eslint-disable-next-line import/extensions
import '../plugins/jquery.magnific-popup.min.js';

const popup = () => {
	if ($('.buttonVideo')) $('.buttonVideo').magnificPopup({ type: 'iframe' });

	// const res = [];
	// // [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39].forEach((num) => {
	// [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].forEach((num) => {
	// 	const arr = [];
	// 	for (let nextNum = num; nextNum <= 102; nextNum += 19) {
	// 		arr.push(nextNum);
	// 	}
	// 	res.push(arr);
	// });
	// console.log(res);

	// const offset = 13;
	// const step = 19;
	// const remainder = (40 - offset) % step;
	// const startNumber = (40 - offset - remainder) / step;

	// console.log('i: ', remainder, startNumber);
	// res.forEach((arr) => {
	// 	arr.forEach((num) => {
	// 		// const remainder = (num - offset) % step;
	// 		// const startNumber = (num - offset - remainder) / step;

	// 		// console.log('i: ', remainder);
	// 	});
	// });
};

export default popup;
