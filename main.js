// 1.Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const result = 5 + 5 + '5';
console.log(result);
console.log("typeof>>", typeof result);

// 2.Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє 
// чи містить змінна email символ @ і рахує загальну кількість символів.
//  Результат виведіть в консоль
const email = "oleksandrakozakevych@gmail.com";
console.log("Містить @?>>", email.includes("@"));
console.log(email.length);

// 3.Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. 
// До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const str1 = "My";
const str2 = "name";
const str3 = "is";
let fullName = ${str1} ${str2} ${str3};
console.log(${fullName} Viktor);

// 4.Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою 
// шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього:
//  «Дякуємо, Олександро! До сплати 300 гривень»
"use strict";
const userName = "Олександро";
const payment = 300;
alert(Дякуємо ${userName}, до сплати ${payment} гривень!);