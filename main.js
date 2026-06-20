/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('.nav-menu'),
      navToggle = document.querySelector('.nav-toggle'),
      navClose = document.querySelector('.nav-close');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('show-menu');
  });
});

/*==================== STYLE SWITCHER ====================*/
const styleSwitcher = document.getElementById('style-switcher'),
      switcherToggle = document.getElementById('switcher-toggler'),
      switcherClose = document.getElementById('switcher-close'),
      themeToggler = document.getElementById('theme-toggler'),
      themeImgs = document.querySelectorAll('.theme-img');

if (switcherToggle && styleSwitcher) {
  switcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('show-switcher');
  });
}

if (switcherClose && styleSwitcher) {
  switcherClose.addEventListener('click', () => {
    styleSwitcher.classList.remove('show-switcher');
  });
}

/*==================== DARK LIGHT THEME ====================*/
const applyTheme = (isDark) => {
  document.body.classList.toggle('dark-theme', isDark);
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');

  const icon = themeToggler?.querySelector('i');
  if (icon) {
    icon.className = isDark ? 'ri-moon-line' : 'ri-sun-line';
  }
};

const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

if (themeToggler) {
  themeToggler.addEventListener('click', () => {
    applyTheme(!document.body.classList.contains('dark-theme'));
  });
}

/*==================== COLORS ====================*/
const savedHue = localStorage.getItem('portfolio-hue');

if (savedHue) {
  document.documentElement.style.setProperty('--hue', savedHue);
}

themeImgs.forEach((img) => {
  img.addEventListener('click', () => {
    const hue = img.dataset.hue;

    if (hue) {
      document.documentElement.style.setProperty('--hue', hue);
      localStorage.setItem('portfolio-hue', hue);
    }
  });
});
