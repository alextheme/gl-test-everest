// eslint-disable-next-line import/extensions
import '../plugins/jquery.magnific-popup.min.js';

const popup = () => {
	if ($('.buttonVideo')) $('.buttonVideo').magnificPopup({ type: 'iframe' });
};

export default popup;
