
// EX.6.10 (Задача №10 - работа с ключами объекта)

/* Создайте 2 объект person со следующей структурой:
{
    name: `Person`,
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: `112`,
        email: ‘email@domain.com’
},
address: `Moldova`
}

Напишите метод Intersection который получит на входе эти 2 объекта и вернет новый объект только 
из тех полей значение которых равна о обоих объектов. */

const person1 = {
    name: "Person1",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
};

const person2 = {
    name: "Person2",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
};

