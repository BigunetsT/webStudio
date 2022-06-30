(() => {
  const openMenuBtnRef = document.querySelector('[data-menu-open]');
  const closeMenuBtnRef = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  openMenuBtnRef.addEventListener('click', toggleMenu);
  closeMenuBtnRef.addEventListener('click', toggleMenu);

  function toggleMenu() {
    mobileMenuRef.classList.toggle('is-open');
  }
})();
