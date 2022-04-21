'use strict';
/*
1. Написать функцию, преобразующую число в объект.
Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

/**
 * Метод преобразования числа в Объект
 * @param num - число для преобразования
 * @returns {{сотни: number, десятки: number, единицы: number}|{}} - возврат преобразованного Объекта
 */
function transform(num) {
    if ((num > 999) || (num < 0)) {
        console.log('Допустимый ввод чисел от 0 до 999');
        return {};
    } else {
        let numObject = {
            'единицы': num % 10,
            'десятки': Math.floor(num % 100 / 10),
            'сотни': Math.floor(num / 100)
        };

        return numObject;
    }
}

console.log(transform(1465));
console.log(transform(245));
console.log(transform(32));
console.log(transform(400));
console.log(transform(5));
console.log(transform(0));


/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов.
Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

// Есть 3 товара
let product1 = ['Товар 1', '3', '1000'];
let product2 = ['Товар 2', '2', '2000'];
let product3 = ['Товар 3', '1', '3000'];

// Объект Корзина с Методами добавления, удаления и расчета стоимости
const basket = {
    prodB: [],

    // Добавление товара в корзину
    addBasket(name) {
        this.prodB.push(name);
    },

    // Удаление товара из корзины
    delBasket(name) {
        this.prodB.pop(name);
    },

    // Расчет кол-ва и стоимости товаров в корзине
    countBasketPrice() {
        let basketAmount = 0;
        let basketPrice = 0;
        this.prodB.forEach((prod) => {
            basketAmount += parseInt(prod[1]);
            basketPrice += parseInt(prod[2]);
        });
        // return basketAmount, basketPrice;
        console.log('Товаров в корзине\nКол-во: ' + basketAmount + '\nСтоимость: ' + basketPrice );
    }
}

basket.addBasket(product1);
basket.addBasket(product2);
basket.addBasket(product3);
basket.delBasket(product3);

basket.countBasketPrice();


/*
3.* Подумать над глобальными сущностями.
К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
но в разных местах давал возможность вызывать разные методы.
 */

// Создать объект и прописать Методы для различных ситуаций?
// const prod = {
//     name: '',
//     count: 0,
//     price: 0,
//
//     metodOne() {
//         // code
//     },
//
//     metodTwo() {
//         // code
//     }
// }

