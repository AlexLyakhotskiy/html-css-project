(() => {
    // MENU:
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

    //READ MORE:
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

    //STAR LINE:
    const starLines = document.querySelectorAll('[data-rating]');
    for (i = 0; i < starLines.length; i++) {
        const rating = starLines[i].getAttribute('data-rating');
        const stars = starLines[i].querySelectorAll('.star-line__star');
        for (j = rating; j < stars.length; j++)
            stars[j].classList.add('star-line__star_empty');
    }

    //ADD LIST COUNTER:
    const lst = document.querySelector('.articles');
    const lstItems = lst.querySelectorAll('li');
    const max = lstItems.length;
    for (i = 0; i < max; i++) {
        var elem = document.createElement('p');
        elem.className = 'articles__counter';
        elem.innerHTML = (i + 1) + '/' + max;
        lstItems[i].appendChild(elem);
    }

    //TIME:
    var timeDisplay = document.getElementById('time');

    function refreshTime() {
        var dateString = new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
            timeZone: 'America/New_York',
        });
        var formattedString = dateString.replace(', ', ', ');
        timeDisplay.innerHTML = formattedString;
    }
    setInterval(refreshTime, 1000);

    //BACK TO TOP:
    const mybutton = document.querySelector('[data-btn-top]');

    window.onscroll = function() {
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

//SLICK SLIDER:
$(document).ready(function() {
    $('.persons').slick({
        asNavFor: '.articles',
        mobileFirst: true,
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        speed: 250,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        }],
    });

    $('.articles').slick({
        asNavFor: '.persons',
        mobileFirst: true,
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: true,
        speed: 250,
    });
    $('.articles').slick('slickGoTo', 1, true);
});