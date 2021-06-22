(() => {
    const starLines = document.querySelectorAll('[data-rating]');
    for (i = 0; i < starLines.length; i++) {
        const rating = starLines[i].getAttribute('data-rating');
        const stars = starLines[i].querySelectorAll('.star-line__star');
        for (j = rating; j < stars.length; j++)
            stars[j].classList.add('star-line__star_empty');
    }
})();