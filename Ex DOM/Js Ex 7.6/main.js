// Сделать таблицу 8 на 8.Закрасить все в виде шахматной доски с помощью JS.
// Использовать querySelector

let table_Row = document.querySelectorAll(".table-row");

for (let rows in table_Row) {
    let table_cell = table_Row[rows].cells;
    if (rows % 2 == 0) {
        for (let cells in table_cell) {
            if (cells % 2 == 0) {
                table_cell[cells].classList.add("black");
            }
        }
    }
    else {
        for (let cells in table_cell) {
            if (cells % 2 == 1) {
                table_cell[cells].classList.add("black");
            }
        }
    }
}