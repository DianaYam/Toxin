
$(document).ready(function () {

    $('.radio').click(function() {

        let input = $(this).find('.radio__input');

        let radioName = $(input).attr('name');

        $('.radio__input').each(function() {
            if ( $(this).attr('name') === radioName ) {
                $(this)
                    .attr('checked', false)
                    .parents('.radio')
                    .removeClass('radio_checked')
                ;
            }
        });

        $(this).addClass('radio_checked');

        $(input).attr('checked', true);

    });

});
