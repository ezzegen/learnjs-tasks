// 4. Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
    i += 0.2;
    console.log(i.toFixed(15))
}
// Ответ: потому что i никогда не будет равно 10 из-за погрешности.
// 9.999999999999996, 10.199999999999996