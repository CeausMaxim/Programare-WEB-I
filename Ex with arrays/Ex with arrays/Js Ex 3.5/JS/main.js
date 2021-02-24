

// EX.3.5 (Задача №5 - стрелочные функции обработки массивов)

/* Напиши функцию convert(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
	function square(x) { return x * x; } // возведение в квадрат
	console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
	console.log(convert(square, [])); // []
	
Обрати внимание: функция не должна изменять переданный ей массив:

	let arr = [1, 2, 3];
	console.log(convert(square, arr)); // [1, 4, 9]
	console.log(arr); // [1, 2, 3]
 */

square = value => Math.pow(value, 2);

convert = (square, array) => {
	return array.map(square)
};

let arr = [1, 2, 3, 4, 5];
console.log(convert(square, arr));
console.log(arr);