
				// EX NR 1 //
/*  const num = prompt("Введите число: ");

if (num > 0) {
	alert(1);
}

else if (num < 0) {
	alert(-1);
}

else if (num == 0) {
	alert(0);
}

else {
	alert("Error");
}  */

				// EX NR 2 //
/*  const age = prompt("Введите ваш возраст: ");

if (age >= 14 && age <= 90) {
	alert("True");
}	else {
	alert("False");
} 

 const age = prompt("Введите ваш возраст: ");

if (!(age >= 14 && age <= 90)) {
	alert("False");
}	else {
	alert("True");
} */
				// EX NR 3 // 
const username = 'Maxim';
const password = 'snake21';

const inLogin = document.getElementById('form__login');
const inPassword = document.getElementById('form__password');
const submit =  document.getElementById('form__submit');

const cheking = () => {
	if (inLogin.value !== username && inPassword.value == password) {
		alert('Неверный логин');
	}

	if (inLogin.value == username && inPassword.value !== password) {
		alert('Неверный пароль');
	}

	if (inLogin.value !== username && inPassword.value !== password) {
		alert('Ошибка Валидации');
	}

}

submit.addEventListener('click', () => {
	cheking();
});

				// EX NR 4 //
/*const a = prompt("Введите начало интервала: ");
const b = prompt("Введите конец интервала: ");

let calculate = () =>{
	let evensum = 0;
	for (let i = a; i <= b; i++) {
	if (i % 2 == 0) {
		evensum = evensum + i;	
		}
	}
	return evensum;
}

	console.log(calculate());*/