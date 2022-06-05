// eslint-disable-next-line import/extensions
import '../plugins/jquery.magnific-popup.min.js';

const popup = () => {
	const $btnLink = $('.grid_item__video_link');
	if ($btnLink) {
		$btnLink.magnificPopup({ type: 'iframe' });
	}
};

export default popup;
