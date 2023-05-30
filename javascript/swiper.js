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
    spaceBetween: -35,
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
      500: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 4,
      },
    },
  });
}


