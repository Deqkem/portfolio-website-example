// Выпадающее меню - гамбургер
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navigation'),
    menuItem = document.querySelectorAll('.navigation__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('navigation_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('navigation_active');
    })
  })
});

// модальное окно
window.addEventListener('DOMContentLoaded', () => {
  const btn_header_request = document.querySelector('.header__button');
  const btn_modal_close = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');

  btn_header_request.addEventListener('click', () => {
    modal.classList.toggle('modal_open');
  });

  btn_modal_close.addEventListener('click', () => {
    modal.classList.toggle('modal_open');
  });

});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    // для отступа сверху нужно указать класс элемента навигации
    // const topOffset = document.querySelector('.main-section__nav-container').offsetHeight; 
    // если не нужен отступ сверху 
    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});