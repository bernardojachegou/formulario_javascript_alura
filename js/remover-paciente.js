var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut"); // parentNote remove o pai do alvo clickado!

	setTimeout(function(){
		event.target.parentNode.remove();
	},500)

});

