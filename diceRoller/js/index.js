function rollDice4() {
	var d4 = document.getElementById('d4');
	var status = document.getElementById("status");
	var d4ran = Math.floor(Math.random() * 4) + 1;
	var d4Result = document.getElementById('d4Result');

	d4.innerHTML = d4ran;
	d4Result.innerHTML += d4ran + ('+');

}

function rollDice6() {
	var d6 = document.getElementById('d6');
	var status = document.getElementById("status");
	var d6ran = Math.floor(Math.random() * 6) + 1;
	var d6Result = document.getElementById('d6Result');

	d6.innerHTML = d6ran;
	d6Result.innerHTML += d6ran + ('+');
}

function rollDice8() {
	var d8 = document.getElementById('d8');
	var status = document.getElementById("status");
	var d8ran = Math.floor(Math.random() * 8) + 1;
	var d8Result = document.getElementById('d8Result');

	d8.innerHTML = d8ran;
	d8Result.innerHTML += d8ran + ('+');
}

function rollDice10() {
	var d10 = document.getElementById('d10');
	var status = document.getElementById("status");
	var d10ran = Math.floor(Math.random() * 10) + 1;
	var d10Result = document.getElementById('d10Result');

	d10.innerHTML = d10ran;
	d10Result.innerHTML += d10ran + ('+');
}

function rollDice12() {
	var d12 = document.getElementById('d12');
	var status = document.getElementById("status");
	var d12ran = Math.floor(Math.random() * 12) + 1;
	var d12Result = document.getElementById('d12Result');

	d12.innerHTML = d12ran;
	d12Result.innerHTML += d12ran + ('+');
}

function rollDice20() {
	var d20 = document.getElementById('d20');
	var status = document.getElementById("status");
	var d20ran = Math.floor(Math.random() * 20) + 1;
	var d20Result = document.getElementById('d20Result');

	d20.innerHTML = d20ran;
	d20Result.innerHTML += d20ran + ('+');
}


// ESSA FUNÇÃO PARA LIMPAR TODOS OS RESULTADOS, ATUALMENTE SÓ FUNCIONA COM O ID QUE EU DIGITAR...
function clearAll(elementID) {
	document.getElementById(elementID).innerHTML = "";
};