
// EX.6.6 (Задача №6 - массив объектов)

/* Задан массив из точек [{1, 2}, {3, 4}, {null, 4}, {3, undefined}]
Написать функцию которая удалит из массива все неправильно заданные точки и вернет массив 
из точек у которых координаты указаны правильно.
[{1, 2}, {3, 4}] */

let point = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: null, y: 4 }, { x: 3, y: undefined },];

const deleteIncorectPoint = (obj) => {
    return obj.filter((value, index) => typeof (obj[index].x) === 'number' && typeof (obj[index].y) === 'number');
}

console.log(deleteIncorectPoint(point));


