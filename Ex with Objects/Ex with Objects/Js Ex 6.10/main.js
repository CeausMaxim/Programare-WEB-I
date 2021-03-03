
// EX.6.10 (Задача №10 - работа с ключами объекта)

/* Создайте 2 объекта person со следующей структурой:
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
из тех полей значение которых равны у обоих объектов. */

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

let Intersection = (person1, person2) => {
    // Object.entries - перечисляет собственные свойства объекта парами
    const pers1 = Object.entries(person1);
    const pers2 = Object.entries(person2);
    const Person3 = [];

    for (let i in pers1) {
        for (let n in pers2) {
            // JSON.stringify - преобразует объект в JSON формат
            if (JSON.stringify(pers1[i]) == JSON.stringify(pers2[n])) {
                // добавляем в конец 
                Person3.push(pers2[n]);
            }
        }
    }
    // обратно в объект
    return Object.fromEntries(Person3);

}
console.log(Intersection(person1, person2));
