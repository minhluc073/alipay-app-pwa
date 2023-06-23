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
    speed: 1000,
    parallax: true,
    slidesPerView: 1.2,
    spaceBetween: 12,
    loop: true,
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
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
    },
  });
}
if ($("div").hasClass("swiper-container")) {
  var swiper = new Swiper(".brand-tes", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 8,
  });
}
if ($("div").hasClass("swiper-container")) {
  var swiper = new Swiper(".tes-2", {
    loop: true,
    slidesPerView: 2,
  });
}
if ($("div").hasClass("swiper-container")) {
  var swiper = new Swiper(".tes-food", {
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 1000,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 2.2,
      },
    },
  });
}
if ($("div").hasClass("swiper-container")) {
  var swiper = new Swiper(".tes-noti", {
    loop: true,
    slidesPerView: 3,
    // spaceBetween: 8,
  });
}
if ($("div").hasClass("swiper-container")) {
  var swiper = new Swiper(".tes-gift-1", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: -100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
