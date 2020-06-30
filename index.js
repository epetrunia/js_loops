// WHILE

//  1. Вывести # столько раз, сколько указал пользователь.
/**
 *
 * @type {number}
 */
// const num = Number(prompt('Enter your number:'));
// let i = 0;
//
// while (i++ < num) {
//     alert('#');
// }

// 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
/**
 *
 * @type {number}
 */
// let num = Number(prompt('Enter your number'));
// const isPositive = num >= 0;
//
// if (isPositive) {
//     while (num >= 0) {
//         alert(num--);
//     }
// } else {
//     while (num <= 0) {
//         alert(num++);
//     }
// }


// 3. Запросить число и степень. Возвести число в указанную степень и вывести результат.
/**
 *
 * @type {number}
 */
// const base = Number(prompt('Enter your base number:'));
// const extend = Number(prompt('Enter your extend number:'));
// let i = 0;
// let result = 1;
// const isPositive = extend >= 0;
//
// while (i++ < Math.abs(extend)) {
//     result *= base;
// }
//
// if (isPositive) {
//     alert(result);
// } else {
//     alert(1 / result);
// }

// 4.  Запросить 2 числа и найти все общие делители.
/**
 *
 * @type {number}
 */
// const firstNum = Number(prompt('Enter first number'));
// const secondNum = Number(prompt('Enter second number'));
// let i = 0;
//
// while (i++ <= Math.max(firstNum, secondNum)) {
//     if (firstNum % i === 0 && secondNum % i === 0) {
//         alert(i);
//     }
// }

// 5. Посчитать факториал введенного пользователем числа.
/**
 *
 * @type {number}
 */
// const num = Number(prompt('Enter your number'));
// let i = 0;
// let factorial = 1;
//
// while (i++ < num) {
//     if (num <= 1) {
//         factorial = 1;
//     } else {
//         factorial *= i;
//     }
// }
// alert(factorial);
