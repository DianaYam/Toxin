
//- функция склонения слов в зависимости от количества

//- пример использования:
// getDeclencion(2, ['минута', 'минуты', 'минут']); // 2 минуты

window.getDeclencion = function (number, forms) {
    let n = Math.abs(number) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { return forms[2]; }
    if (n1 > 1 && n1 < 5) { return forms[1]; }
    if (n1 === 1) { return forms[0]; }
    return forms[2];
};

