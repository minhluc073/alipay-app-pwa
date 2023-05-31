if ($("div").hasClass("swiper-container")) {
  var swiper = new Swiper(".recipient-tes", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 4,
    navigation: {
      clickable: true,
      nextEl: ".button-lo-next",
      prevEl: ".button-lo-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    // },
  });
}

if ($("div").hasClass("swiper-container")) {
  var swiper = new Swiper(".banner-tes", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      clickable: true,
      nextEl: ".button-lo-next",
      prevEl: ".button-lo-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween:  0,
      },
      375: {
        slidesPerView: 1,
        spaceBetween:  -30,
      },
      500: {
        slidesPerView: 1,
        spaceBetween:  -150,

      },
      600: {
        slidesPerView: 2,
        spaceBetween:  30,

      },
      900: {
        slidesPerView: 3,
        spaceBetween:  12,

      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 12,

      },
    },
  });
}


