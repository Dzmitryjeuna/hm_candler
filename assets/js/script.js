const btn = document.querySelector('.nav__btn');
const nav = document.querySelector('.header__nav-list');

btn.addEventListener('click', () => {
  nav.classList.toggle('nav--open')
});

const swiperOne = new Swiper('.reviews__items', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

});

const swiperTwo = new Swiper('.certificate__items', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

const qan = document.querySelector('.questions__items');
const qanTitles = document.querySelectorAll('.questions__item-title');

qanTitles.forEach.call(qanTitles, function (qanTitle) {
  qanTitle.addEventListener('click', function() {


    const currentItem = qanTitle.parentElement;
    const currentText = currentItem.querySelector('.questions__item-text');

    qanTitle.classList.toggle('questions__item-title--active');
    currentText.classList.toggle('questions__item-text--visible');

    if (currentText.classList.contains('questions__item-text--visible')) {
      currentItem.style.paddingBottom = '20px'
      currentText.style.maxHeight = currentText.scrollHeight + 'px'
    } else {
      currentItem.style.paddingBottom = null
      currentText.style.maxHeight = null
    }
  });
}); 
