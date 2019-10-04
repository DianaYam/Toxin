
$(document).ready(function () {

    $(".range-slider").each(function() {
        $(this).slider({
            animate: "slow",
            range: true,
            min: $(this).attr('data-min'),
            max: $(this).attr('data-max'),
            step: + $(this).attr('data-step') || 1,
            values: [ + $(this).data('min-value'), + $(this).data('max-value') ],
            slide: function (e, ui) {
                const value1 = ui.values[0].toLocaleString('ru-RU');
                const value2 = ui.values[1].toLocaleString('ru-RU');
                const result = $(this).prev();

                $(result)
                    .find('.range-header__from')
                    .text(value1 + '\u20BD')
                    .end()
                    .find('.range-header__to')
                    .text(value2 + '\u20BD')
                ;
            }
        });
    });

    $(".range-header__result").each(function() {
        const value1 = $(this).parent().next().slider("values", 0).toLocaleString('ru-RU');
        const value2 = $(this).parent().next().slider("values", 1).toLocaleString('ru-RU');

        $(this)
            .find('.range-header__from')
            .text(value1 + '\u20BD')
            .end()
            .find('.range-header__to')
            .text(value2 + '\u20BD')
        ;
    });

});
