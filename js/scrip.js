const menuHamburguesa = document.getElementById('menu-hamburguesa');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const closeDrawer = document.getElementById('close-drawer');

menuHamburguesa.addEventListener('click', () => {
  drawer.classList.add('drawer-open');
  overlay.classList.add('overlay-active');
});

overlay.addEventListener('click', () => {
  drawer.classList.remove('drawer-open');
  overlay.classList.remove('overlay-active');
});

closeDrawer.addEventListener('click', () => {
  drawer.classList.remove('drawer-open');
  overlay.classList.remove('overlay-active');
});
