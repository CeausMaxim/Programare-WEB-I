/* Дан Input.в него вводится число.
По потери фокуса сделайте так, чтобы если в input введене недействительное число,значение input обнуляется. */


let input = document.getElementById("input");
input.addEventListener(`blur`, () => {
    // blur - событие при потере фокуса
    // Number - объект, представляющий любое число
    if (Number.isInteger(+input.value) == false) {
        input.value = 0;
    }
});