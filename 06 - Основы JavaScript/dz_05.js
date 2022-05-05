'use strict';

/*
1. Создать функцию, генерирующую шахматную доску.
При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
(использовать createElement / appendChild)
*/

const chess = {
    gameContainerEl: document.getElementById('chess'),

    // генерим поле
    generateMap() {
        // Строки, которые есть на поле.
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        // Колонки, которые есть на поле.
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        // Пробегаемся по каждой строке.
        for (let row = 0; row < rows.length; row++) {
            // Создаем элемент строки.
            const tr = document.createElement('tr');
            // Добавляем строку в контейнер игры.
            this.gameContainerEl.appendChild(tr);

            // Пробегаемся по каждой колонке.
            for (let col = 0; col < cols.length; col++) {
                // Создаем элемент ячейки.
                const td = document.createElement('td');
                // Добавляем ячейку в строку.
                tr.appendChild(td);

                // Если либо строка, либо колонка равна 0, значит это не игровое поле.
                if (rows[row] === 0 && cols[col] !== 0) {
                    // Если это верхнее или нижнее поля, отображаем какие колонки есть, 0 не выводим.
                    td.innerHTML = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0) {
                    // Если это левое или правое поля, отображаем цифры игрового поля, 0 не выводим.
                    td.innerHTML = rows[row].toString();
                }

                // Если ячейка черная - красим ее.
                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = '#805830';
                }
            }
        }
    },

    // раскрашиваем ячейки в шахматном порядке
    isCellIsBlack(rowNum, colNum) {
        // Если ячейка боковая (не игровое поле), их красить не нужно.
        if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
            return false;
        }

        // Определяем по четности/нечетности строки и колонки.
        return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
        // Либо можно сделать проще.
        // return (rowNum + colNum) % 2 === 1;
    },
};

// Запускаем метод отображения карты.
chess.generateMap();


/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */
// Будет div в который вы будете выплевывать информацию о корзине
//
// ДОП: Можно сдлеать вывод всех товаров в корзине и внизу приписать итог

// Есть 3 товара (Наименование, Кол-во, Стоимость 1 шт)
let product1 = ['Товар 1', '3', '1000'];
let product2 = ['Товар 2', '2', '2000'];
let product3 = ['Товар 3', '1', '3000'];


// Объект Корзина с Методами добавления, удаления и расчета стоимости
const basket = {
    prodB: [],
    basketAmount: 0,
    basketPrice: 0,
    basketContainerEl: document.getElementById('basket'),

    // Инициализируем корзину и выводим ее содержимое
    init() {
        const pTag = document.querySelector('p');
        pTag.remove();

        if (this.prodB.length) {
            this.countBasketPrice();
            document.querySelector('#basket').insertAdjacentHTML(
                'beforeend',
                `<p>В корзине: ${this.basketAmount} товаров на сумму ${this.basketPrice} рублей</p>`);
        } else {
            const pBasket = document.createElement('p');
            pBasket.innerHTML = 'Корзина пуста';
            this.basketContainerEl.appendChild(pBasket);
        }
    },

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
        this.basketAmount = 0;
        this.basketPrice = 0;
        this.prodB.forEach((prod) => {
            this.basketAmount += parseInt(prod[1]);
            this.basketPrice += (parseInt(prod[2]) * parseInt(prod[1]));
        });
        return this.basketAmount, this.basketPrice;
    },

}

basket.init();
basket.addBasket(product1);
basket.addBasket(product2);
basket.init();
basket.addBasket(product3);
basket.init();
basket.delBasket(product3);
basket.init();

/*
3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода.
Весь вид каталога генерируется JS.
 */
// НЕ ОСИЛЕЛ
