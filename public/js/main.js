$(document).ready(function ($) {
	loadSite($)
	const newPagesId = ["accounts-parent", "home-page", "user-info"]
	document.body.addEventListener('DOMNodeInserted', function (event) {
		if (newPagesId.includes(event.target.id)) {
			loadSite($)
		}
	}, false);
});
function loadSite($) {
	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#site-loader').length > 0) {
				$('#site-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function () {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 10,
			navText: ['<span class="icon-chevron-left"/>', '<span class="icon-chevron-right"/>'],
			responsive: {
				500: {
					items: 1
				},
				650: {
					items: 2
				},
				800: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		});
	};
	carousel();

	var counter = function () {
		$('#section-counter').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('site-animated')) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.site-number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber({
						number: num,
						numberStep: comma_separator_number_step
					}, 7000);
				});
			}
		}, { offset: '95%' });
	}
	counter();

	var contentWayPoint = function () {
		$('.site-animate').waypoint(function (direction) {
			if (direction === 'down' && !$(this.element).hasClass('site-animated')) {
				$(this.element).addClass('item-animate');
				setTimeout(function () {
					$('body .site-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn site-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft site-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight site-animated');
							} else {
								el.addClass('fadeInUp site-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});
				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function () {
		$(".smoothscroll[href^='#'], #site-nav ul li a[href^='#']").on('click', function (e) {
			e.preventDefault();
			var hash = this.hash,
				navToggler = $('.navbar-toggler');
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, 'easeInOutExpo', function () {
				window.location.hash = hash;
			});
			if (navToggler.is(':visible')) {
				navToggler.click();
			}
		});
		$('body').on('activate.bs.scrollspy', function () {
			console.log('nice');
		})
	};
	OnePageNav();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	$('#m_date').datepicker({
		'format': 'm/d/yyyy',
		'autoclose': true
	});
	$('#m_time').timepicker();

	$(".err_msg").bind("DOMSubtreeModified", function () {
		const eleId = this.id.split("_")[0];
		const scrollId = eleId + "_label";
		//document.getElementById(eleId).focus();
		document.getElementById(scrollId).scrollIntoView();
	});
}