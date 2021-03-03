
// EX.6.4 (обработка объектов)

/* Создайте объект user1 со следующей структурой:
{
    name: `User 1`,
    age: 123
}
Создайте объект user2 с той же структурой и копируйте в него объект user1.
Замените в user 2 значения name = `User 2` и age = 321.
Выведите в консоль оба объекта. 
PS: Если у вас выведется 2 раза одинаковые значения, значит задача выполнена неправильно. */

let user1 = {
    name: 'User1',
    age: 123
};

//let user2 = { };
//Object.assign(user2, user1);

let user2 = Object.assign({}, user1);

user2.name = "User2";
user2.age = 321;

console.log(user1, user2);
