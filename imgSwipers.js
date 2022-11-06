
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$('.arrow-next').click(function () {
    var currentSlide = $('.active-slide'),
        nextSlide = currentSlide.next(),
        currentDot = $('.active-dot'),
        nextDot = currentDot.next();

    if (nextSlide.length === 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
});

// cards
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});
