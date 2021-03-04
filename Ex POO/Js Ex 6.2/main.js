/* Реализуйте класс Person, который будет иметь следующие свойства: name (имя), surname (фамилия). 
Необходимо понять что getter и setter класса и использовать их.

Вот так должен работать класс:

var worker = new Person('Иван', 'Иванов');

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.setSurname('Петров')); //выведет 'Иванов'
console.log(worker.getSurname()); //выведет 'Петров' */


class Person {
    constructor(_firstName, _surname) {
        this._firstName = _firstName;
        this._surname = _surname;
    }

    getName() {
        return this._firstName;
    }

    getSurname() {
        return this._surname;
    }

    setSurname(value) {
        return this._surname = value;
    }
}



var person = new Person('Maxim', 'Ceaus');

console.log(person.getName());
console.log(person.getSurname());
console.log(person.setSurname('Petrov'));
console.log(person.getSurname());