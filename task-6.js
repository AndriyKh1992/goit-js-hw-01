let needToAsk = true;
let total = 0;
do {
    const input = prompt('Enter number');
    if (input === null) {
        needToAsk = false;
    }
    else {
        total += Number(input);
    }
}
while (needToAsk);
alert('Загальна сума чисел дорівнює ' + total);