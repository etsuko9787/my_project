$(document).ready(function () {
    $('img').show;
    $('img').fadeIn('slow');
});

$(window).scroll(function () {
    $('.question-text').each(function () {
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 150) {
            $(this).addClass('scrollin');
        }
    });
});


