'use strict';
/*
1. Дан код:
    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2
    d = b++; alert(d);           // 1
    c = (2+ ++a); alert(c);      // 5
    d = (2+ b++); alert(d);      // 4
    alert(a);                    // 3
    alert(b);                    // 3
Почему код даёт именно такие результаты?

ОТВЕТ:
ПРЕФИКСНАЯ форма ++number увеличивает number и возвращает новое значение 2
ПОСТФИКСНАЯ форма number++ также увеличивает number, но возвращает старое значение (которое было до увеличения)
 */


/*
2. Чему будет равен x в примере ниже?
    var a = 2;
    var x = 1 + (a *= 2);

 ОТВЕТ:
 5
 (a *= 2) - то же что и "a = a * 2" - дает 4
 */


/*
3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */
console.log('Задача №3');

let a = Math.floor(Math.random() * 10);
// генерим через тернарный оператор и умножение на 1/-1 отрицательно число
a *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
let b = Math.floor(Math.random() * 10);
// генерим через тернарный оператор и умножение на 1/-1 отрицательно число
b *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
console.log(a, b) // для проверки

if (a >= 0 && b >= 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    console.log(a + b)
} else {
    console.log('Введите числа')
}


/*
4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
 */
console.log('\nЗадача №4');

//  Генерация случайного числа в диапазоне min max
// Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
let number = Math.floor(Math.random() * (16));
console.log('Наше случайное число: ', number)

switch (number) {
    case 0 : console.log(number++);
    case 1 : console.log(number++);
    case 2 : console.log(number++);
    case 3 : console.log(number++);
    case 4 : console.log(number++);
    case 5 : console.log(number++);
    case 6 : console.log(number++);
    case 7 : console.log(number++);
    case 8 : console.log(number++);
    case 9 : console.log(number++);
    case 10 : console.log(number++);
    case 11 : console.log(number++);
    case 12 : console.log(number++);
    case 13 : console.log(number++);
    case 14 : console.log(number++);
    case 15 : console.log(number++); break
    default : console.log('Число должно быть в диапазоне [0..15]');
}


/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
 */
console.log('\nЗадача №5');

// function arithmeticOperations (arg1, arg2) {
//     let sumArray = [];
//     sumArray.unshift(arg1 + arg2);
//     sumArray.unshift(arg1 - arg2);
//     sumArray.unshift(arg1 * arg2);
//     sumArray.unshift(arg1 / arg2);
//     return console.log(`Арифметические операции аргументов ${arg1} и ${arg2}\n\
// + -> ${sumArray[3]}\n- -> ${sumArray[2]}\n\
// * -> ${sumArray[1]}\n/ -> ${sumArray[0]}\n`);
// }

function add(arg1, arg2) {
    return console.log(arg1 + arg2)
}

function subt(arg1, arg2) {
    return console.log(arg1 - arg2)
}

function mult(arg1, arg2) {
    return console.log(arg1 * arg2)
}

function div(arg1, arg2) {
    return console.log(arg1 / arg2)
}

add(6,2);
subt(6,2);
mult(6,2);
div(6,2);

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
 */
console.log('\nЗадача №6');

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+' : return add(arg1, arg2);
        case '-' : return subt(arg1, arg2);
        case '*' : return mult(arg1, arg2);
        case '/' : return div(arg1, arg2);
        default : console.log('Проверьте правильность аргументов!');
    }
}

mathOperation(6,2, '+');
mathOperation(6,2, '-');
mathOperation(6,2, '*');
mathOperation(6,2, '/');
mathOperation(2,2, 'abs');


/*
7. *Сравнить null и 0. Попробуйте объяснить результат.

ОТВЕТ:
Насколько я понял
0 - это значение типа number
null - это тип object, который на самом деле не Объект - обозначает отсутствие объекта (то есть конкретно отсутствие)
undefined - это неопределенность
null ==  undefined // true
НО: null ===  undefined // false

При этом:
0 > null // false
0 > null // false
0 == null // false
0 === null // false
0 >= null // true - это связано с Алгоритмом сравнения в JS
 */


/*
8. *С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.
 */
console.log('\nЗадача №8');

function power(val, pow) {

    if (pow === 0) return 1;
    return val * power(val, pow-1);
}

console.log(power(2 ,1));
console.log(power(2 ,2));
console.log(power(2 ,4));