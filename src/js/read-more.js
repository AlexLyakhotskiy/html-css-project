(() => {
    const btns = document.querySelectorAll('button.read-more');
    for (i = 0; i < btns.length; i++) {
        const btn = btns[i];
        const elem = btn.previousElementSibling;
        elem.classList.add('hidden-on-small');
        btn.addEventListener('click', () => {
            elem.classList.toggle('hidden-on-small');
            if (btn.innerHTML == 'Read more') {
                btn.innerHTML = 'Less'
            } else {
                btn.innerHTML = 'Read more'
            }
        })
    }
})();