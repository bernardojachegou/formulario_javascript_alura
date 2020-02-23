var titulo = document.querySelector(".titulo"); // querySelector seleciona apenas um elemento;
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll seleciona todos os elementos;


for(var i= 0; i < pacientes.length ; i++) { // Loop de repetição FOR;

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent; 

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);


	if(!pesoValido) { 
		console.log("Peso Inválido!");
		pesoValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido"); // Metodo para modificar o CSS//
	}

	if(!alturaValida) {
		console.log("Altura Inválido!");
		alturaValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

	if (alturaValida && pesoValido) { // Operador lógico E = &&;
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc; // toFixed para limitar as casas decimais;
	}
}

function validaPeso(peso){

	if(peso >= 0 && peso < 300) { // Operador lógico OU = ||;
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura){

	if(altura >= 0 && altura <= 2.50) {
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);	

	return imc.toFixed(2);
}


titulo.addEventListener("click", function() { // o uso de funções anonimas dentro de um addEventListener;
	console.log("Eu fui clicada!");
});
