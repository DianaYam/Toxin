
$(document).ready(function () {

    let options = {
        clearButton: true,
        prevHtml: "<i class='material-icons datepicker--nav-action__arrow'>arrow_back</i>",
        nextHtml: "<i class='material-icons datepicker--nav-action__arrow'>arrow_forward</i>",
        navTitles: {
            days: 'MM yyyy'
        },
        multipleDates: true,
        range: true,
        autoClose: true,
        multipleDatesSeparator: ' - '
    };

    $('.calendar').each(function (i, elem) {
        $(elem).datepicker(options);
    });

    let closeButton = "<button class='button button_style_purple-text datepicker-button_close'><span class='button__text'>Применить</span></button>";

    //- нужны ли теперь эти условия??

    $('.datepicker--buttons').each(function() {
        $(this).filter(':not(:has(.datepicker-button_close))').append(closeButton);
    });

    $('.datepicker-button_close').click(function() {
        $('.calendar').each(function() {
            $(this).data('datepicker').hide();
        })
    });

});
