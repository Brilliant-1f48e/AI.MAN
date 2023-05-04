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
