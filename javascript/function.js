//alert("Esta aplicação foi criada para fins didáticos, todo o conteúdo aqui aplicado foi por intermédio de estudos e pesquisas!");
//Digita o código da tecla clicada co visor

/*Variável global para alteração dos temas*/
/*calculadora = document.getElementById('calculadora')
calculadora.classList.remove('white')
console.log("deu certo")*/
/*var classe = document.querySelector('#calculadora.white')*/


function digitar(num){
	var atual = visor.value;
	document.getElementById('visor').value = atual + num;
}
/*Função que altera as classe dos elementos*/
function mudarClasse(elemento, classeNova){
	elemento.classList.remove('white', 'black', 'red', 'green', 'orange');
    elemento.classList.add(classeNova);
}
function changeSkinWhite(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'white')
}
function changeSkinBlack(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'black')
}
function changeSkinRGB(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'red')
}
function changeSkinGreen(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'green')
}
function changeSkinOrange(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'orange')
}