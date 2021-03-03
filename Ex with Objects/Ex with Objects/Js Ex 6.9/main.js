
// EX.6.9 (Задача №9 - работа с ключами объекта)

/* Задан объект
const weekDays = {
	“Luni”: “Mo”,
	“Marti”: “Tu”,
	“Miercuri”: “We”,
	“Joi”: “Th”,
	“Vineri”: “Fr”,
	“Simbata”: “Sa”,
	“Duminica”: “Su”
}
Напишите функцию которая получит как параметр этот объект и вернет следующий объект
const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Придумайте подходящее название для этой функции. */

const weekDays = {
	"Luni": "Mo",
	"Marti": "Tu",
	"Miercuri": "We",
	"Joi": "Th",
	"Vineri": "Fr",
	"Simbata": "Sa",
	"Duminica": "Su"
};

let replaceKeyandValue = (object) => {
	const TempObj = {};
	// Object.key - возвращает массив ключей
	Object.keys(object).forEach(function (value) {
		let mykeys = object[value];
		TempObj[mykeys] = value;
	});
	return TempObj;
}
console.log(replaceKeyandValue(weekDays));
