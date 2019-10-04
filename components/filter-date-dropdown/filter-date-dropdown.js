
$(document).ready(function () {

    $('.filter-date-dropdown__field').datepicker({
        minDate: new Date(),
        offset: 5,
        dateFormat: 'd M'
    });

    // $('.filter-date-dropdown__field').datepicker({
    //     minDate: new Date(),
    //     offset: 5,
    //     clearButton: true,
    //     prevHtml: "<i class='material-icons datepicker--nav-action__arrow'>arrow_back</i>",
    //     nextHtml: "<i class='material-icons datepicker--nav-action__arrow'>arrow_forward</i>",
    //     navTitles: {
    //         days: 'MM yyyy'
    //     },
    //     dateFormat: 'd M',
    //     multipleDates: true,
    //     range: true,
    //     autoClose: true,
    //     multipleDatesSeparator: ' - '
    // });
    //
    // let closeButton = "<button class='button button_enabled button_style_text datepicker__button_close'><span class='button__text button_style_text__text'>Применить</span></button>";
    //
    // $('.datepicker--buttons').each(function() {
    //     $(this).filter(':not(:has(.datepicker__button_close))').append(closeButton);
    // });
    //
    // $('.datepicker__button_close').click(function() {
    //     $('.filter-date-dropdown__field').each(function() {
    //         $(this).data('datepicker').hide();
    //     })
    // });

});