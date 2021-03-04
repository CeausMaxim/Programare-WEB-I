/* Реализуйте класс Person, который будет иметь следующие свойства: name (имя), surname (фамилия). 
Необходимо понять что такое конструктор класса и использовать его.

Вот так должен работать класс:

var worker = new Person('Иван', 'Иванов');

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов' */


/* class Person {
    constructor() {
        this.name = "Maxim";
        this.surname = "Ceaus";
    }
}

var person = new Person();

console.log(person.name);
console.log(person.surname); */

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

var person = new Person('Maxim', 'Ceaus');

console.log(person.name);
console.log(person.surname);