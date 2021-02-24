

// EX.3.8 (Задача №8 - функции обработки массивов)

/* Задан массив
    const colors = [“red”, “green”, “blue”];
Написать функцию
    checkColor(color)
которая вернет позицию цвета в массиве если она есть или -1 если цвета нет. */

const colors = ['red', 'green', 'blue'];

function checkColor() {
    const a = prompt('Enter a color: ');
    if (a == 'red') {
        alert(colors.indexOf("red"));
    } else if (a == 'green') {
        alert(colors.indexOf("green"));
    } else if (a == 'blue') {
        alert(colors.indexOf("blue"));
    } else {
        alert(-1);
    }
}
checkColor(colors);
