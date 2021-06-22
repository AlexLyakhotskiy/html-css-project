(() => {
    const btns = document.querySelectorAll('button.read-more');
    for (i = 0; i < btns.length; i++) {
        const btn = btns[i];
        const elem = btn.previousElementSibling;
        elem.classList.add('hidden-on-small');
        btn.addEventListener('click', () => {
            elem.classList.toggle('hidden-on-small');
            if (btn.innerText == 'Read more') {
                btn.innerText = 'Less'
            } else {
                btn.innerText = 'Read more'
            }
        })
    }
})();