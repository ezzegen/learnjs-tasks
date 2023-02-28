/*
9.
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

let login = prompt('Введите свой логин:', ['login']);


const controlPassword = (passwd) => {
    if (passwd == 'Я главный') {
        return 'Здравствуйте!'
    } else if (!passwd) {
        return 'Отменено'
    } else {
        return 'Неверный пароль'
    }
}

const controlLogin = (loginName) => {
    if (loginName == 'Админ') {
        return controlPassword(prompt('Введите пароль:', ['password']))
    } else if (!loginName) {
        return 'Отменено'
    } else {
        return 'Я вас не знаю!'
    }
}

alert(controlLogin(login))