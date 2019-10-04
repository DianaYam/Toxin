
$(document).ready(function () {

    $('.checkbox-block').click(function() {
        console.log('checked');

        $(this).toggleClass('checkbox-block_checked');

        let input = $(this).find('.checkbox-input');

        $(input).prop("checked", !input.prop("checked"));
    });

});
