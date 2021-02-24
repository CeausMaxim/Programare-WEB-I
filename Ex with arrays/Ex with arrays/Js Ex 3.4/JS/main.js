

// EX.3.4 (Задача №4 - обработка массива)

/* Напишите функцию sumInputNumbers(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */

let sumInputNumbers = () => {
    let elementsArray = [];
    let sumaOfelements = 0;

    while (true) {
        let number = prompt("Введите числовое значение: ", 0);
        if (number === "" || number === null || !isFinite(number)) {
            break;
        }
        console.log(number);
        elementsArray.push(Number(number));
    }
    for (let element of elementsArray) {
        sumaOfelements += element;
    }
    return sumaOfelements;
}

alert("Сумма введенных числовых значений: " + sumInputNumbers());