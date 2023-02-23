const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}



//swiper//
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  autoplay: {
    daley: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 600,
  loop: true,
  freeMode: false,
  mousewheel: false,
  keyboard: false,
  slidesPerView: 1,

//   breakpoints: { 
//     200: {
//       slidesPerView: 1,
//     },
//     880: {
//       slidesPerView: 2,
//     },
//     1250: {
//       slidesPerView: 3,
//     }
//   },
});
