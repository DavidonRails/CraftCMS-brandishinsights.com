(function() {
    var burger = $('.nav-toggle');
    var menu = $('.nav-menu');
    burger.on('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

$(function() {
    $('.matchHeight').matchHeight();
});


$(function(){
    $('.accordion').find('.accordion-toggle').click(function() {
        $(this).next().slideToggle('600');
        $(".accordion-content").not($(this).next()).slideUp('600');
    });
    $('.accordion-toggle').on('click', function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
})