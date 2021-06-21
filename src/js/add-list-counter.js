(() => {
    const lst = document.querySelector('.articles');
    const lstItems = lst.querySelectorAll('li');
    const max = lstItems.length;
    for (i = 0; i < max; i++) {
        var elem = document.createElement('p');
        elem.className = 'articles__counter';
        elem.innerHTML = (i + 1) + '/' + max;
        lstItems[i].appendChild(elem);
    }
})();