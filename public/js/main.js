const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('#header ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// effect shadow in header
//const header = document.getElementById('header')
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// testimonials carrose

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// ScrollReveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 400,
  reset: true
})

scrollReveal.reveal(
  `#home .text,
   #home .image,
   #home .text,
   #about .image,
   #about .text,
   #services .card,
   #services i,
   #testimonials .title,
   #contact .title,
   #contact .text,
   #contact .button,
   #contact .links,
   footer .brand,
   footer .text,
   footer .social`,
  {
    interval: 100
  }
)

//bottom back to top

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
