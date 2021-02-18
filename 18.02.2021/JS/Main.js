        // Создать массив из 5 чисел,вычислить и афишировать сумму

// const numbers = [1, 2, 3, 4, 5];
// let suma = 0;
// for (let m of numbers)
//     suma += m;
// alert(suma);

        // Массив с оценками ученика, Нужно высчитать и афишировать в консоль среднуюю оценку

// const marks = [6.5, 8.15, 9.8, 7.04, 10];
// let suma = 0;
// for (let m of marks)
//     suma += m;
// const average = suma/marks.length;
// console.log(average);

        // With reduce

// const marks = [1, 2, 3, 4, 5];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(marks.reduce(reducer));


        // Есть оценки и средняя учеников,надо определить является ли ученик задолжником

const marks = [6.7, 4.3, 10, 8.4, 7.08];
    for (let m of marks) {
        if (m < 5) {
            alert("Задолжник");
        } else {
            alert("Не задолжник");
        }
    }
