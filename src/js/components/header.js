const header = (vars) => {
	$(window).on('resize', () => {
		if ($(window).width() < 1200) return;

		if ($('.header__menu').hasClass('mfp-hide')) $('.header__menu').removeClass('mfp-hide');
		if ($('.header__search_input_wrap').hasClass('mfp-hide')) $('.header__search_input_wrap').removeClass('mfp-hide');
	});

	let windowScrollTop = $(window).scrollTop();

	// scroll - hide / show menu
	$(window).on('scroll', (event) => {
		const currWindowScrollTop = $(window).scrollTop();
		if (currWindowScrollTop > windowScrollTop) {
			$('.header').addClass('header--hide_mod');
		} else {
			$('.header').removeClass('header--hide_mod');
		}

		windowScrollTop = currWindowScrollTop;
	});

	// button menu
	$('.menuTrigger').magnificPopup({
		items: {
			src: '.header__menu',
			type: 'inline',
		},
		alignTop: true,
	});

	// button search
	$('.btnSearchMob').magnificPopup({
		items: {
			src: '.header__search_input_wrap',
			type: 'inline',
		},
		alignTop: true,
		disableOn: 1200,

		mainClass: '',
	});
};

export default header;
