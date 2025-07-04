let searchForm = document.querySelector(".search-form");
document.querySelector("#search").onclick = () => {
  searchForm.classList.toggle("active");

  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-lines").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
