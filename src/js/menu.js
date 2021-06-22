(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnsCloseArr = document.querySelectorAll('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnsCloseArr.forEach(el =>
    el.addEventListener('click', () => {
      mobileMenuRef.classList.toggle('is-open');
    }),
  );
})();
