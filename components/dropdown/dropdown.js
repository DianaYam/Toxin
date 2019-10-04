
$(document).ready(function () {

    $('.dropdown-result').click(function() {
        $(this).parents('.dropdown').toggleClass('dropdown_opened');
    });

    $('.dropdown-list-button_clear').click(function() {
        $(this).parents('.dropdown-list').find('.dropdown-option-quantity__number').val(0).change();
    });

    $('.dropdown-list-button_apply').click(function() {
        $(this).parents('.dropdown').removeClass('dropdown_opened');
    });

    $('.dropdown-option-quantity__number').change(function() {
        let input = $(this);
        let value = + input.val();
        let label = input.parent();

        value === 0
            ? label.prev().addClass('dropdown-option-quantity-button_disabled')
            : label.prev().removeClass('dropdown-option-quantity-button_disabled')
        ;

        value === 9
            ? label.next().addClass('dropdown-option-quantity-button_disabled')
            : label.next().removeClass('dropdown-option-quantity-button_disabled')
        ;

        input.parents('.dropdown-content').find('.dropdown-result__text').change();
    });

    $('.dropdown-option-quantity-button_down').click(function() {
        let input = $(this).next().find('.dropdown-option-quantity__number');
        let inputVal = + input.val();

        if (inputVal !== 0) {
            let newVal = inputVal - 1;
            input.val(newVal).change();
        }
    });

    $('.dropdown-option-quantity-button_up').click(function() {
        let input = $(this).prev().find('.dropdown-option-quantity__number');
        let inputVal = + input.val();

        if (inputVal !== 9) {
            let newVal = inputVal + 1;
            input.val(newVal).change();
        }
    });

    //- генерация результирующего текста

    function arraySum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        return sum
    }

    function addCommas(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]) {
                newArr.push(arr[i])
            }
        }

        let result = newArr[0];
        for (let i = 1; i < newArr.length; i++) {
            result = result + ', ' + newArr[i]
        }
        return result
    }

    function cutIfNessesary(str, symbols) {
        if (str.length > symbols) {
            let pos = str.lastIndexOf(','); // для отсечения последней опции (например, числа ванных)
            return addEllipsis(str.slice(0, pos).trim());
        }
        return str
    }

    function addEllipsis(str) {
        return str + '...'
    }

    function changeConfigutationDropdownText(elem) {
        let resultText = '';

        let values = [];
        $(elem).parents('.dropdown-content').find('.dropdown-option-quantity__number').each(function(index, elem) {
            values.push(+ $(elem).val())
        });

        if(arraySum(values) !== 0) {

            let bedrooms = values[0]===0 ? '' : values[0] + ' ' + getDeclencion(values[0], ['спальня', 'спальни', 'спален']);

            let beds = values[1]===0 ? '' : values[1] + ' ' + getDeclencion(values[1], ['кровать', 'кровати', 'кроватей']);

            let bathrooms = values[2]===0 ? '' : values[2] + ' ' + getDeclencion(values[2], ['ванная', 'ванные', 'ванных']);

            resultText = addCommas([bedrooms, beds, bathrooms]);
            resultText = cutIfNessesary(resultText, 21)
        }
        else {
            resultText = $(elem).data('text')
        }

        $(elem).text(resultText);
    }

    function changeGuestsDropdownText(elem) {
        let resultText = '';

        let values = [];
        $(elem).parents('.dropdown-content').find('.dropdown-option-quantity__number').each(function(index, elem) {
            values.push(+ $(elem).val())
        });

        let valSum = arraySum(values);

        let clearBtn = $(elem).parents('.dropdown-content').find('.dropdown-list-button_clear');

        if(valSum !== 0) {
            resultText = valSum + ' ' + getDeclencion(valSum, ['гость', 'гостя', 'гостей']);
            clearBtn.removeClass('dropdown-list-button_hidden')
        }
        else {
            resultText = $(elem).data('text');
            clearBtn.addClass('dropdown-list-button_hidden')
        }

        $(elem).text(resultText);
    }

    $('.dropdown_config .dropdown-result__text').change(function() {
        changeConfigutationDropdownText(this)
    });

    $('.dropdown_guests .dropdown-result__text').change(function() {
        changeGuestsDropdownText(this)
    });
});
