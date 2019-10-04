
$(document).ready(function () {

    $('.room-card-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: [
            '<i class="material-icons room-card-slider__arrow">navigate_before</i>',
            '<i class="material-icons room-card-slider__arrow">navigate_next</i>'
        ]
    });

    $('.room-extra-info__reviews').each(function() {
        let num = $(this).data('reviews-number');
        let forms = $(this).data('forms');
        let text = getDeclencion(num, forms);

        $(this).html(num + ' ' + text)
    })

});
