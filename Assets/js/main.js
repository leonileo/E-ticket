var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });