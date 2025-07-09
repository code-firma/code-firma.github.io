const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// Закриття при кліку поза меню
document.addEventListener('click', (e) => {
  const isClickInside = burger.contains(e.target) || menu.contains(e.target);
  if (!isClickInside && menu.classList.contains('active')) {
    closeMenu();
  }
});

// Функція відкриття/закриття
burger.addEventListener('click', () => {
  const isOpen = menu.classList.contains('active');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

function openMenu() {
  menu.classList.add('active');
  burger.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  menu.classList.remove('active');
  burger.classList.remove('open');
  document.body.classList.remove('no-scroll');
}
// Закриває меню при натисканні на посилання всередині нього
document.querySelectorAll('.header_menu a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});