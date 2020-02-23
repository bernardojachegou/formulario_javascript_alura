var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) { // função addEventListener serve para indicar uma ação na página;
	event.preventDefault(); // preventDefault serve para evitar um comportamento padrão de um determinado elemento;

	var form = document.querySelector("#form-adiciona");
	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);
	console.log(erros);
	if(erros.length > 0 ){
		exibeMensagensDeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);

	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}


function obtemPacienteDoFormulario(form) {

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr"); // createElement serve para criar um novo elemento HTML
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // appendChild serve para colocar um elemento dentro do outro;
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente) {

	var erros = [];

	if(!validaPeso(paciente.peso)) { 
		erros.push("Peso inválido!");
	}
	if(!validaAltura(paciente.altura)) {
		erros.push("Altura inválida!");
	}
	if( paciente.nome.length == 0){
		erros.push("O nome precisa ser especificado!");
	}
	if( paciente.peso.length == 0){
		erros.push("O peso precisa ser especificado!");
	}
	if( paciente.altura.length == 0){
		erros.push("A altura precisa ser especificada");
	}
	if( paciente.gordura.length == 0){
		erros.push("A gordura precisa ser especificada!");
	}
	return erros;
}