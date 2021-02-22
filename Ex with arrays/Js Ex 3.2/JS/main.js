

// EX.3.2 (Задача №2 - обработка массива)

// Создать массив который содержит минимум 5 учеников (алгоритм должен работать для любого количества учеников) и их оценки (минимум 4 оценки)

/* Написать следующие функции обработки этого массива: 
1.	считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
2.	выводит учеников у которых средняя оценка < 5
3.	находит учеников с максимальной и минимальной оценкой
4.	сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
5.	выводит тех учеников чья средняя оценка больше средней оценки всего класса */

let students = [
    {
        name: "Misha",
        marks: [5, 2, 3, 4, 4]
    },
    {
        name: "Maksim",
        marks: [10, 9, 8, 7, 6]
    },
    {
        name: "Sasha",
        marks: [9, 9, 9, 8, 8]
    },
    {
        name: "Dimon",
        marks: [10, 7, 6, 9, 5]
    },
    {
        name: "Viktor",
        marks: [9, 8, 8, 9, 10]
    }
];

// punct 1

nameAverage = () => {
    for (const person of students) {
        console.log(person.name);
        let average = person.marks.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        console.log(average / person.marks.length);
    }
};

// punct 2

lowerAverage = () => {
    for (const person of students) {
        let average = person.marks.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        if (average / person.marks.length < 5) {
            console.log(person.name);
        }
    }
};

// punct 3

// punct 4

// punct 5
classAverage = () => {
    let average = 0;
    for (const person of students) {
        average += studentAverage(person.marks);
    }
    return average / students.length
};

studentAverage = array => {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0) / array.length;
};

higherAverage = (average) => {
    console.log("Средняя оценка класса:")
    console.log(average);
    console.log("Ученики с наибольшим баллом: ");
    for (const person of students) {
        studentAverage(person.marks) > average ? console.log(person.name) : 0;
    }
};

nameAverage();
console.log("====================");
lowerAverage();
console.log("====================");

console.log("====================");

console.log("====================");
higherAverage(classAverage());