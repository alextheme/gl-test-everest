// eslint-disable-next-line import/extensions
import '../plugins/jquery.magnific-popup.min.js';

export default () => {
	if ($('.buttonVideo')) $('.buttonVideo').magnificPopup({ type: 'iframe' });
};
