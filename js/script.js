
$(".delay").css("display", "none"), $(document).ready((function() {
    jQuery(window).width() <= 480 ? ($(".show-desktop").hide(), $(".show-mobile").show(), document.getElementById("for-student").classList.add("offset-3")) : ($(".show-desktop").show(), $(".show-mobile").hide()), $(".mask-cep").mask("00000-000"), $(".mask-data").mask("00/00/0000"), $(".mask-cel").mask("0000-0000"), $(".mask-cell-ddd").mask("(00) 00000-0000"), $(".mask-cpf").mask("000.000.000-00", {
        reverse: !0
    }), new Swiper(".blog-slider", {
        spaceBetween: 30,
        effect: "fade",
        loop: !5,
        mousewheel: {
            invert: !1
        },
        pagination: {
            el: ".blog-slider__pagination",
            clickable: !0
        },
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        }
    });
    

})), $("#navbar-stick").stickyNavbar({
    activeClass: "active",
    sectionSelector: "scrollto",
    animDuration: 350,
    startAt: 200,
    easing: "swing",
    animateCSS: !1,
    animateCSSRepeat: !1,
    cssAnimation: "fadeInDown",
    jqueryEffects: !1,
    jqueryAnim: "slideDown",
    selector: "li",
    mobile: !1,
    mobileWidth: 450,
    zindex: 9999,
    stickyModeClass: "sticky",
    unstickyModeClass: "unsticky"
}), $(".open-menu").on("click", (function() {
    $(".overlay").addClass("open")
})), $(".item-nav").on("click", (function() {
    $(".overlay").removeClass("open")
})), $(".close-menu").on("click", (function() {
    $(".overlay").removeClass("open")
}));
