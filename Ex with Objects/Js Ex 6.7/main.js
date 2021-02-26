
// EX.6.7 (Задача №7 - getters)

/* Создайте объект person со следующей структурой:
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

Создайте по одной функции get для каждого поля объекта (функции/методы должны принадлежать объекту) */

let person = {
  name: `Person`,
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: `112`,
    email: "email@domain.com",
  },
  address: `Moldova`,

  get getName() {
    return this.name;
  },

  get getAge() {
    return this.age;
  },

  get getSalary() {
    return this.salary;
  },

  get getPhone() {
    return this.contacts.phone;
  },

  get getMail() {
    return this.contacts.email;
  },

  get getAddress() {
    return this.address;
  },
};

console.log(`Numele personei: ${person.getName}`);
console.log(`Varsta personei: ${person.getAge}`);
console.log(`Salariul personei: ${person.getSalary}`);
console.log(`Telefonul personei: ${person.getPhone}`);
console.log(`Posta personei: ${person.getMail}`);
console.log(`Adresa personei: ${person.getAddress}`);

//console.log(person.getName, person.getAge, person.getSalary, person.getPhone, person.getMail, person.getAddress);
