// Your custom JavaScript
$(document).ready(function () {

  // Smooth mobile menu handling
  // Close mobile menu when clicking outside
  $(document).click(function (e) {
    if (!$(e.target).closest('.navbar').length) {
      $('.navbar-collapse').collapse('hide');
    }
  });

  // Close mobile menu when clicking a link
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Testimonials Video Swiper
  const testimonialVideoSwiper = new Swiper('.testimonial-video-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 100
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 100
      }
    }
  });

  var testimonialSwiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      768: {
        slidesPerView: 1,
      }
    }
  });

  var featuresOneSwiper = new Swiper(".features-one-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.features-one-navigation .swiper-button-next',
      prevEl: '.features-one-navigation .swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    touchEventsTarget: 'container',
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      }
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  });

  var featuresTwoSwiper = new Swiper(".features-two-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.features-two-navigation .swiper-button-next',
      prevEl: '.features-two-navigation .swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    touchEventsTarget: 'container',
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 1,
      }
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  });

});

