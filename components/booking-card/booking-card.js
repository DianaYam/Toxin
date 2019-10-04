
$(document).ready(function () {

    let dateDropdown = $('.booking-card__date-dropdown');

    $(dateDropdown).on('change', function() {

        let parent = $(this).parent();
        let daysElem = parent.find('.booking-price-calc__days');
        let subtotalElem = parent.find('.booking-price-calc__subtotal');
        let totalSumElem = parent.find('.booking-card-total__sum');
        let table = parent.find('.booking-price-calc');

        let days = $(this).data('days');
        let price = $(table).data('price');
        let serviceCharge = $(table).data('service-charge');
        let serviceChargeDiscount = $(table).data('service-charge-discount');
        let additionalServiceCharge = $(table).data('additional-service-charge');

        let subtotal = days * price || 0;
        $(subtotalElem).text(subtotal.toString().replace( /\B(?=(?:\d{3})+$)/g, ' ' ));

        //- итоговая формула подсчёта цены не совсем понятна. Сделала, чтобы сходился результат
        let total = subtotal === 0 ? 0 : subtotal - serviceChargeDiscount + serviceCharge + additionalServiceCharge;

        $(totalSumElem).text(total.toString().replace( /\B(?=(?:\d{3})+$)/g, ' ' ));

        $(daysElem).text(days + ' ' + getDeclencion(days, ['сутки', 'суток', 'суток']));
    });

    $(dateDropdown).change();

});
