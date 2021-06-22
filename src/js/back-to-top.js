(() => {
  const mybutton = document.querySelector('[data-btn-top]');

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = 'inline-flex';
    } else {
      mybutton.style.display = 'none';
    }
  }
  mybutton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
})();
