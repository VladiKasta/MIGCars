const swiper = new Swiper(".swiper", {
  // Optional parameters
  /* autoHeight: true, */
  slidesPerView: 1,

  loop: true,
  autoplay: {
    delay: 3000, // задержка между переключениями в миллисекундах
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

const swiperCategory = new Swiper(".swiper_category", {
  // Optional parameters

  slidesPerView: 5.5,
  spaceBetween: 10,

  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },

    480: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },

    1050: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    1300: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1520: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
  },

  // And if we need scrollbar
});

const swiperBrands = new Swiper(".about_us_swiper", {
  // Optional parameters
  autoHeight: true,
  /* slidesPerView: 2.5, */
  spaceBetween: 10,

  loop: true,

  autoplay: {
    delay: 1000, // задержка между переключениями в миллисекундах
  },

  // If we need pagination

  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 1.5,
      spaceBetween: 5,
    },

    480: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },

    1050: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1520: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
  },

  // And if we need scrollbar
});
