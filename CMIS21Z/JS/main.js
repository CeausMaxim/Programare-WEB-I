console.log("Hello my friend!");



document.getElementById("but1").addEventListener("click", function() { 
document.body.style.backgroundColor = "red"; });

document.getElementById("but2").addEventListener("click", function() { 
document.body.style.backgroundColor = "green"; });

document.getElementById("but3").addEventListener("click", function() { 
document.body.style.backgroundColor = "blue"; });

for (let i = 0 ; i <= 100; i++) {
	if (i% 2 == 0) {
		console.log(i);
	}
}