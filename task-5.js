let country = prompt("What is your country?");
let chinaDostavka = 100;
let chileDostavka = 250;
let australiaDostavka = 170;
let indiaDostavka = 80;
let jamaicaDostavka = 120;
switch (country.toLowerCase()) {
    case "china":
        alert('Доставка в ' + country.toLowerCase() + ' буде коштувати ' + chinaDostavka + ' кредитів');
        break;
    case "chile":
        alert('Доставка в ' + country.toLowerCase() + ' буде коштувати ' + chileDostavka + ' кредитів');
        break;
    case "australia":
        alert('Доставка в ' + country.toLowerCase() + ' буде коштувати ' + australiaDostavka + ' кредитів');
        break;
    case "india":
        alert('Доставка в ' + country.toLowerCase() + ' буде коштувати ' + indiaDostavka + ' кредитів');
        break;
    case "jamaica":
        alert('Доставка в ' + country.toLowerCase() + ' буде коштувати ' + jamaicaDostavka + ' кредитів');
        break;
    default:
        alert('У вашій країні доставка недоступна');
}