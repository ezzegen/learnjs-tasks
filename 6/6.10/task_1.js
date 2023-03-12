// 1. Что выведет функция?

function f() {
    alert(this); // ? Ответ: null.
}

let user = {
    g: f.bind(null)
};

user.g();