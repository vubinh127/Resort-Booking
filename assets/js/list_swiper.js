var swiperBanner = new Swiper(".banner_slide", {
    autoplay: true,
    loop:  true
});

var swiperHotel = new Swiper(".hotel_slide", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 3
        }
    }
});

var swiperHotelCombo = new Swiper(".hotel_combo_slide", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 4
        }
    }
});


var swiperHotelCombo = new Swiper(".type_hotel_slide", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 5
        }
    }
});

var swiperHotelDomestic = new Swiper(".product-hotel-cat-domestic", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 4,
        }
    }
});

var swiperGuide = new Swiper(".box-guide ", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 4,
        }
    }
});

const gallerySwiper = new Swiper('#gallerySwiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    centeredSlides: true,
});

var swiperSameHotel = new Swiper(".same_hotel_slide", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        992: {
            slidesPerView: 4
        }
    }
});