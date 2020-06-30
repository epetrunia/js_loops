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


// Задания, в которых необходимо использовать DO WHILE.

//  1. Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
// let result;
//
// do {
//     result = Number(prompt('2 + 2 * 2 = '));
// } while (result !== 6);

// 2. Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.
/**
 *
 * @type {number}
 */
// let num = 1000;
// let i = 0;
//
// do {
//     num /= 2;
//     i++
// } while (num > 50);
// alert(i);


// Задания, в которых необходимо использовать FOR.

// 1. Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
/**
 *
 * @type {number}
 */
const num = Number(prompt('Enter you number:'));

for (let i = 1; i <= 100; i++) {
    if (i % num === 0) {
        alert(i);
    }
}
