/* 4.
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
'use strict'

alert(sumInput(validInput()))

// Функция для создания числового массива.
function validInput() {
    let numArray = [];

    while (true) {
        let numInput = prompt('Введите число', 0);

        // Валидация введенных данных.
        if (!isFinite(numInput) || !numInput) {
            return numArray;
        };

        numArray.push(+numInput);
    }

}

// Функция для суммирования данных массива.
function sumInput(array) {
    return array.reduce((sum, current) => sum + current, 0)
}
