import {Burger} from "../../assets/js/burger.js";


const paginationItems = ["RILLCUY", "TRUKAHH", "ASELII", "KOCKGMG", "MDITURU"];

const ourTechnologiesTabs = new Swiper(".tabs-our-technologies", {
    pagination: {
        el: ".pagination-tabs-our-technologies",
        type: "bullets",
        clickable: true,
        bulletClass: "pagination-tabs-our-technologies-item",
        bulletActiveClass: "_active",
        renderBullet: function (index, classname) {
            return `<span class=${classname}>${paginationItems[index]}</span>`;
        },
    },
});

const thingsWeSupportSlider = new Swiper(".slider-things-we-support", {
    slidesPerView: 4.5,
    navigation: {
        nextEl: ".slider-things-we-support-button-next",
        prevEl: ".slider-things-we-support-button-prev",
        disabledClass: "_disabled"
    }
});


const whatThaySaySlider = new Swiper(".slider-what-they-say", {
    navigation: {
        nextEl: ".slider-what-they-say-button-next",
        prevEl: ".slider-what-they-say-button-prev",
        disabledClass: "_disabled"
    }
});


const supportedByUpperSlider = new Swiper(".slider-supported-by-upper", {
    slidesPerView: 5,
    centeredSlides: true,
    centeredSlidesBounds: true,
});

const supportedByLowerSlider = new Swiper(".slider-supported-by-lower", {
    slidesPerView: 5,
    centeredSlides: true,
    centeredSlidesBounds: true,
});

const menuBurger = new Burger(".menu", {});
