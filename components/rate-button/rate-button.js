
$(document).ready(function () {

    $('[data-changeable="true"] .rate-button__star').click(function() {
        $(this)
            .addClass('rate-button__star_checked')
            .parent()
            .siblings()
            .children()
            .removeClass('rate-button__star_checked')
            .end()
            .end()
            .prevAll()
            .children()
            .addClass('rate-button__star_checked')
        ;
    });

});
