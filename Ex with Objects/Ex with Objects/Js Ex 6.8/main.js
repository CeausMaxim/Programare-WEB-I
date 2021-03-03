
// EX.6.8 (Задача №8 - работа с ключами объекта)

/* Задан объект 
const weekDays = {
	“Mo”: “Понедельник”,
	“Tu”: “Вторник”,
	“We”: “Среда”,
	“Th”: “Четверг”,
	“Fr”: “Пятница”,
	“Sa”: “Суббота”,
	“Su”: “Воскресенье”,
}

Напишите функцию translate которая переводит названия дней на румынском

const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Примечание: нельзя делать так weekDays[“mon”] = “Luni”
Используйте методы для работы с объектами или массивами. */

const weekDays = {
	"Mo": "Понедельник",
	"Tu": "Вторник",
	"We": "Среда",
	"Th": "Четверг",
	"Fr": "Пятница",
	"Sa": "Суббота",
	"Su": "Воскресенье",
};

let translate = (weekday) => {
	const RomDay = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
	const translDay = Object.entries(weekday); // Object.entries - перечисляет собственные свойства объекта с парами

	for (let day in translDay) {
		translDay[day][1] = RomDay[day];
	}
	return Object.fromEntries(translDay);
}
console.log(translate(weekDays));



