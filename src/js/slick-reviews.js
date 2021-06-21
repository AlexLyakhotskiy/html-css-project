$(document).ready(function() {
    $('.persons').slick({
        asNavFor: '.articles',
        // slide: 'li',
        mobileFirst: true,
        //infinite: false,
        arrows: false,
        slidesToShow: 1,
        //swipeToSlide: true,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        speed: 250,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                //centerMode: false
            }
        }],
        //initialSlide: 1 //starts with 0, so 2 is 1 :-)
    });

    $('.articles').slick({
        asNavFor: '.persons',
        // slide: 'li',
        mobileFirst: true,
        //infinite: false,
        arrows: false,
        slidesToShow: 1,
        //centerMode: true,
        //focusOnSelect: true,
        adaptiveHeight: true,
        speed: 250,
        //initialSlide: 1 //starts with 0, so 2 is 1 :-)
    });
    $('.articles').slick('slickGoTo', 1, true);
    //$('.articles').slick('slickNext');
});