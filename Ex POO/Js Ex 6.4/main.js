/* Реализуйте класс Validator, который будет проверять строки.
К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
Если является - возвращает true, если не является - то false. 
Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDate('12.05.2020')); */

class Validator {
    constructor(email, date, domain, phone) {
        this.email = email;
        this.date = date;
        this.domain = domain;
        this.phone = phone;

    }
    // Регулярные выражения почты,домена,даты и телефона для сравнения с шаблоном.
    checkemail = /\S+@\S+\.\S+/;
    checkdomain = /\S+\.\S+/;
    checkdate = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}$/;
    checkphone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){9,11}(\s*)?$/;

    isEmail() {
        if (this.checkemail.test(this.email)) {
            return true;
        }
        return false;
    }

    isDomain() {
        if (this.checkdomain.test(this.domain)) {
            return true;
        }
        return false;
    }

    isDate() {
        if (this.checkdate.test(this.date)) {
            return true;
        }
        return false;
    }

    isPhone() {
        if (this.checkphone.test(this.phone)) {
            return true;
        }
        return false;
    }
}

var validator = new Validator('maxim@mail.ru', '30.04.2000', 'javascript.info', '+37361234567');

console.log(validator.isEmail());
console.log(validator.isDate());
console.log(validator.isDomain());
console.log(validator.isPhone());
