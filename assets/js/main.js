/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
const swiperCategories = new Swiper(".categories-container", {
  // Optional parameters
  direction: "horizontal",
  //   loop: true,
  slidesPerView: 6,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== SWIPER PRODUCTS ===============*/

/*=============== PRODUCTS TABS ===============*/

const tabs = document.querySelectorAll("[data-target]");
const tabContent = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    console.log(target);
    tabContent.forEach((e) => {
      e.classList.remove("active-tab");
    });
    target.classList.add("active-tab");
    tabs.forEach((e) => {
      e.classList.remove("active-tab");
    });
    tab.classList.add("active-tab");
  });
});
