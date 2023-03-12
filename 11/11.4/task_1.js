// 1.Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// Ответ: Не выполнится, т.к. ошибка в коде генерируется асинхронно, внутренний обработчик try/catch не может ее поймать.