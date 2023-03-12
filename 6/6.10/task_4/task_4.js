/* 4. 
Вызов askPassword() в приведённом ниже коде должен проверить пароль и
затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).
*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};
// Ответ: для корректного отображения нужно передать контекст в функции-аргументы.
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));