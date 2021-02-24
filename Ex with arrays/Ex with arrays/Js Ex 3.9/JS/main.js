

// EX.3.9 (Задача №9 - функции обработки массивов)

/* Задан массив [1, “a”, 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]
Напишите функцию filter которая удалит лишнее из массива (все что не является цифрой) 
и вернет чистый массив [1, 2, 3, 4, 5, 6, 7, 8, 9] */

const numbers = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

function cleanArray(number) {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof number !== 'number' || number > 9) {  // typeof - определяет тип параметра(число,строка,объект)
      return false;
    }
  }
  return number;
}

console.log(numbers.filter(cleanArray));