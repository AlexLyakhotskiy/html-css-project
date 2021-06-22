(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("is-open");
    body.classList.toggle("is-open");

  });

  // mobileBtnClose.addEventListener("click", () => {
  //   mobileMenuRef.classList.toggle("is-open");
  //   menuBtnRef.classList.toggle("is-open");
  // });
})();