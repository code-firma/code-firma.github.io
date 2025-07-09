document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.header_menu a');
  const sections = [];

  // Збір секцій за href посилань
  menuLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const id = href.slice(1);
      const section = document.getElementById(id);
      if (section) {
        sections.push(section);
      }

      // Прокрутка до секції при кліку
      link.addEventListener('click', e => {
        e.preventDefault();

        // Закриваємо бургер-меню, якщо є така функція
        if (typeof closeMenu === 'function') {
          closeMenu();
        }

        section.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  // Очистити усі активні стани
  const clearActive = () => {
    menuLinks.forEach(link => link.classList.remove('active'));
  };

  // Intersection Observer — відслідковує, яка секція в viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        const id = entry.target.id;
        const activeLink = document.querySelector(`.header_menu a[href="#${id}"]`);
        if (activeLink) {
          clearActive();
          activeLink.classList.add('active');
        }
      }
    });
  }, {
    root: null,
    threshold: 0.5 // коли секція займає 50% висоти екрана
  });

  sections.forEach(section => observer.observe(section));
});