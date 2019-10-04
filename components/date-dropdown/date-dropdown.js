
$(document).ready(function () {

    $('.date-dropdowns__calendar-field').datepicker({
        minDate: new Date(),
        offset: 4,
        dateFormat: 'dd.mm.yyyy',
        onSelect: function(formattedDate, date, inst) {
            let wrap = $(inst.el).parents('.date-dropdowns');

            if(date.length === 2) {
                wrap.find('.date-dropdown__start-field').val(formattedDate.slice(0, 10));
                wrap.find('.date-dropdown__end-field').val(formattedDate.slice(-10));

                //- вычисление числа суток в диапазоне (для booking-card)
                let milliseconds = date[1] - date[0];
                let days = milliseconds/1000/60/60/24;
                wrap.data('days', days);
                wrap.change();
            }
            else if(date.length === 0) {
                wrap.find('.date-dropdown__start-field').val(null);
                wrap.find('.date-dropdown__end-field').val(null);

                //- если даты не выбраны, ставим 0
                wrap.data('days', 0);
                wrap.change();
            }
        }
    });

    $('.date-dropdown__field').on('click', function () {
        $(this).parents('.date-dropdowns').find('.date-dropdowns__calendar-field').data('datepicker').show();
    });

    // $('.date-dropdowns__calendar-field').datepicker({
    //     minDate: new Date(),
    //     offset: 4,
    //     clearButton: true,
    //     prevHtml: "<i class='material-icons datepicker--nav-action__arrow'>arrow_back</i>",
    //     nextHtml: "<i class='material-icons datepicker--nav-action__arrow'>arrow_forward</i>",
    //     navTitles: {
    //         days: 'MM yyyy'
    //     },
    //     dateFormat: 'dd.mm.yyyy',
    //     multipleDates: true,
    //     range: true,
    //     autoClose: true,
    //     onSelect: function(formattedDate, date, inst) {
    //         let wrap = $(inst.el).parents('.date-dropdowns');
    //
    //         if(date.length === 2) {
    //             wrap.find('.date-dropdown__start-field').val(formattedDate.slice(0, 10));
    //             wrap.find('.date-dropdown__end-field').val(formattedDate.slice(-10));
    //
    //             //- вычисление числа суток в диапазоне (для booking-card)
    //             let milliseconds = date[1] - date[0];
    //             let days = milliseconds/1000/60/60/24;
    //             wrap.data('days', days);
    //             wrap.change();
    //         }
    //         else if(date.length === 0) {
    //             wrap.find('.date-dropdown__start-field').val(null);
    //             wrap.find('.date-dropdown__end-field').val(null);
    //
    //             //- если даты не выбраны, ставим 0
    //             wrap.data('days', 0);
    //             wrap.change();
    //         }
    //     }
    // });

    // let closeButton = "<button class='button button_enabled button_style_text datepicker__button_close'><span class='button__text button_style_text__text'>Применить</span></button>";
    //
    // $('.datepicker--buttons').each(function() {
    //     $(this).filter(':not(:has(.datepicker__button_close))').append(closeButton);
    // });
    //
    // $('.datepicker__button_close').click(function() {
    //     $('.date-dropdowns__calendar-field').each(function() {
    //         $(this).data('datepicker').hide();
    //     })
    // });

});