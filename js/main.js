const navBtn = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.mobile-nav')

navBtn.addEventListener('click', function (event) {
   event.stopPropagation();
   mobileNav.classList.toggle('mobile-nav-active');
   navBtn.classList.toggle('nav-btn-close');
})

window.addEventListener('click', function () {
   if (navBtn.classList.contains('nav-btn-close')) {
      mobileNav.classList.toggle('mobile-nav-active');
      navBtn.classList.toggle('nav-btn-close');
   }
})

mobileNav.addEventListener('click', function (event) {
   event.stopPropagation();
})


// AOS 
AOS.init();

