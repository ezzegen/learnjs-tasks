// 3. Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    let result = wait().then((num) => console.log(num));
    return result;
}

f();