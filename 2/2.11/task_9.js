/* 9.
Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль,
если ничего не введено или нажата клавиша Esc – показать «Отменено»,
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».
 */
'use strict'

let login = prompt('Введите логин:', ['login']);

if (login == 'Админ') {
    let password = prompt('Введите пароль:', ['password']);

    if (password == 'Я главный') {
        alert('Здравствуйте!');
    } else if (!(password)) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (!(login)) {
    alert('Отменено');
} else {
    alert('Я вас не знаю!')
}