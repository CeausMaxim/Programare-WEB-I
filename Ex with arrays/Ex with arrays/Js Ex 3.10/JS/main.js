

// EX.3.10 (Задача №10 - функции обработки массивов)

/* Задан массив [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1]
Напишите функцию uniqueSorted, которая удалит дубликаты из массива и вернет отсортированный по возрастанию 
массив из уникальных значений [0, 1, 2,  3, 4, 5, 6, 7, 8, 9]
 */

function uniqueSorted(arr) {
    let result = [];

    for (let str of arr) {
        // includes - Определяет, включает ли массив определенный элемент, возвращая при необходимости true или false
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let number = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
number.sort(function (a, b) { return a - b });

alert(uniqueSorted(number));