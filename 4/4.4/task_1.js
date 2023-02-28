// 1. Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

// Ответ: ошибка 