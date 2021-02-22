

// EX.3.1 (Задача №1 - вывод массива)

// 3.1 (a = for)

const number = [1, 2, 3, 4, 5];
const values = number;
for (i = 0; i < values.length; i++) {
    console.log(values[i]);
}

//  3.1 (b = for in)

/* const number = [1, 2, 3, 4, 5];
for (let n in number) {
    console.log(number[n]);
} */

//  3.1 (c = for of)

/* const number = [1, 2, 3, 4, 5];
for (const list of number) {
    console.log(list);
} */

//  3.1(d = forEach) 

/* const number = [1, 2, 3, 4, 5];
number.forEach(element => console.log(element)); */

//  3.1(e = map)

/* const number = [1, 2, 3, 4, 5];
const mapFunction = number.map(x => x + 0);
console.log(mapFunction); */

// 3.1(f = my method)

/* const number = [1, 2, 3, 4, 5];
console.log(number); */