const header = (vars) => {
	$(window).on('resize', () => {
		if ($(window).width() < 1200) return;

		if ($('.header__menu_wrapper').hasClass('mfp-hide')) $('.header__menu_wrapper').removeClass('mfp-hide');
		if ($('.header__search_input_wrap').hasClass('mfp-hide')) $('.header__search_input_wrap').removeClass('mfp-hide');
	});

	let windowScrollTop = $(window).scrollTop();

	$(window).on('scroll', (event) => {
		const cuurWindowScrollTop = $(window).scrollTop();
		if (cuurWindowScrollTop > windowScrollTop) {
			$('.header').addClass('header--hide_mod');
		} else {
			$('.header').removeClass('header--hide_mod');
		}

		windowScrollTop = cuurWindowScrollTop;
	});

	// button menu
	$('.menuTrigger').magnificPopup({
		items: {
			src: '.header__menu_wrapper',
			type: 'inline',
		},
		alignTop: true,
		mainClass: 'menu_popup_bg manu_popup_wrap',
	});

	// button search
	$('.btnSearchMob').magnificPopup({
		items: {
			src: '.header__search_input_wrap',
			type: 'inline',
		},
		alignTop: true,
		disableOn: 1200,

		mainClass: 'search_popup_bg search_popup_wrap',
	});

	// triggerMenu();
};

export default header;
