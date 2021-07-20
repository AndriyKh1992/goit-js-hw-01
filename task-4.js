let credits = 23580;
let pricePerDroid = 3000;
let kst = prompt("How many droids want to buy?");
if (kst === null) {
    console.log('Скасовано користувачем!');
}
else {
    let totalPrice = kst * pricePerDroid;
    if (totalPrice > credits) {
        console.log("'Недостатньо коштів на рахунку!'")
    }
    else {
        console.log('Ви купили ' + kst + ' дроїдів, на рахунку залишилося ' + (credits - totalPrice) + ' кредитів.');
    }
}