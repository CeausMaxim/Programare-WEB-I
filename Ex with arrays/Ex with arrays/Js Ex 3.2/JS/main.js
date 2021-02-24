

// EX.3.2 (Задача №2 - обработка массива)

// Создать массив который содержит минимум 5 учеников (алгоритм должен работать для любого количества учеников) и их оценки (минимум 4 оценки)

/* Написать следующие функции обработки этого массива:
1.	считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
2.	выводит учеников у которых средняя оценка < 5
3.	находит учеников с максимальной и минимальной оценкой
4.	сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
5.	выводит тех учеников чья средняя оценка больше средней оценки всего класса */

const students = [
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
        marks: [9, 6, 9, 8, 8]
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

//  1

let namestudMarks = (array) => {
    for (let person of array) {
        console.log(person.name + ': ' + person.average);
    }
}

let AverageMark = (students) => {
    const marks = [];
    for (let i in students) {
        let sum = 0;
        for (let j in students[i].marks) {
            sum += students[i].marks[j];
        }
        const student = {};

        student.name = students[i].name;
        student.average = sum / students[i].marks.length;
        marks.push(student);
    }
    return marks;
}

namestudMarks(AverageMark(students));

console.log(" ");
//  2
let AverageLowerFive = (students) => {
    const studMarks = AverageMark(students);
    const mass = [];

    for (let person of studMarks) {
        if (person.average < 5) {
            mass.push(person.name);
        }
    }
    return mass;
}

console.log('Средняя оценка учеников ниже 5:' + AverageLowerFive(students).map((value) => {
    return ' ' + value;
}));

console.log(" ");

//  3
let MarksMinMax = (students) => {
    const personMarks = AverageMark(students);
    let MaxMarkName = "";
    let MinMarkName = "";
    let max = 0;
    let min = 0;

    for (let person of personMarks) {
        if (person.average > max) {
            max = person.average;
            MaxMarkName = person.name;
        }

        if (person.average < max) {
            min = person.average;
            MinMarkName = person.name;
        }
    }
    console.log('Максимальная отметка: ', max, 'у ученика', MaxMarkName);
    console.log('Минимальная отметка: ', min, 'у ученика', MinMarkName);
}

MarksMinMax(students);

console.log(" ");

//  4
let sortMarksOfStudent = (students) => {
    const personMarks = AverageMark(students);
    return personMarks.sort((first, second) => first.average < second.average ? 1 : -1);
}

namestudMarks(sortMarksOfStudent(students));

console.log(" ");

//  5
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

AverageMark();

AverageLowerFive();

higherAverage(classAverage());
