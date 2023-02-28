/* 5.
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
*/
'use strict'

function getMaxSubSum(array) {
    let maxSum = 0;
    let tempSum = 0;

    for (let num of array) {
        tempSum += num;
        maxSum = Math.max(maxSum, tempSum);

        if (tempSum < 0) {
            tempSum = 0;
        }
    }

    return maxSum;
}



console.log(getMaxSubSum([-1, 2, 3, -9])) // == 5 (сумма выделенных элементов)
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // == 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // == 100
console.log(getMaxSubSum([1, 2, 3])) // == 6 (берём все)
console.log(getMaxSubSum([-1, -2, -3])) // = 0
