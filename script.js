// var loader = document.getElementById("preloader");
//         window.addEventListener("load", function(){
//             loader.style.display = "none";
//         })



var swiper = new Swiper(".mySwiper", {
  // zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay: 5000,
    loop: Infinity,
  },
});
