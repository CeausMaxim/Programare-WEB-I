//                                  Задача 1
/* Сделать фон документа сразу же красным. */

/* document.body.style.background = "red"; */

//                                  Задача 2 
/* Через 3 секунды после загрузки страницы установить зеленый цвет фона */

/* setTimeout(() => {
    document.body.style.background = "green";
}, 3000); */

//                                  Задача 3
/* Добавить кнопку с тектом Orange,дабы при нажатии она окрашивала фон сраницы в оранжевый цвет */

document.getElementById("but1").addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
});

//                                  Задача 4
/* Добавить список (ol).После открытия страницы,каждые 2 секунды в список добавится новый элемент (li) c текстом  `Элемент ${i}`.
Заполнение остановаится когда будет 20 элементов.
У четных элементов зеленый цвет фона, у нечетных фиолетовый. */

/* const catalog = document.createElement("ol");
let PushElements = () => {
    let itemCatalog = [];
    let i = 0;
    let TimeForAddItem = setInterval(() => {
        i++;
        itemCatalog = document.createElement("li");
        itemCatalog.innerHTML = `Элемент ${i}`;

        if (i % 2 == 0) {
            itemCatalog.style.background = "#ee82ee";
        }
        else {
            itemCatalog.style.background = "#008000";
        }
        catalog.append(itemCatalog);
    }, 2000);

    setTimeout(() => {
        clearInterval(TimeForAddItem);
    }, 40000);

}

document.body.append(catalog);
PushElements(); */






