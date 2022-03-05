/**
 * Esta aplicação foi criada para fins didáticos, todo o conteúdo aqui aplicado foi por intermédio de estudos e pesquisas.
 * 
 * Autor: Wesley Santos
 */



/*Função que altera as classe dos elementos*/
function mudarClasse(elemento, classeNova){
	elemento.classList.remove('white', 'black', 'red', 'green', 'orange');
    elemento.classList.add(classeNova);
}
function changeSkinWhite(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'white')
	document.getElementById('container').style.backgroundImage = 'linear-gradient(120deg, gray, white, gray)'
	document.getElementById('container').style.transition = 0.5;
}
function changeSkinBlack(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'black')
	document.getElementById('container').style.backgroundImage = 'linear-gradient(120deg, black, rgb(80, 80, 80), black)'
}
function changeSkinRGB(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'red')
	document.getElementById('container').style.backgroundImage = 'linear-gradient(120deg, black, rgb(128, 0, 0), black)'
}
function changeSkinGreen(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'green')
	document.getElementById('container').style.backgroundImage = 'linear-gradient(120deg, black, rgb(0, 128, 0), black)'
}
function changeSkinOrange(){
	calculadora = document.getElementById('calculadora')
	mudarClasse(calculadora, 'orange')
	document.getElementById('container').style.backgroundImage = 'linear-gradient(120deg, black, rgb(220, 100, 0), black)'
}

