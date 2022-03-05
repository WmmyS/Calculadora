//alert("Esta aplicação foi criada para fins didáticos, todo o conteúdo aqui aplicado foi por intermédio de estudos e pesquisas!");
//Digita o código da tecla clicada co visor

/*Variável global para alteração dos temas*/
/*calculadora = document.getElementById('calculadora')
calculadora.classList.remove('white')
console.log("deu certo")*/
/*var classe = document.querySelector('#calculadora.white')*/

var operacao = false;
var somav = false;
var subtrairv = false;
var multiplicarv = false;
var equacao = 0;
var valor1 = 0;
var valor2 = 0;

function digitar(num){
	//inserir os valores precionados no visor
	var atual = visor.value;
	
	
	//substituir o primeiro 0 "zero" pelo número digitado
	if(atual == 0){
		atual = ""
		console.log("Havia valor = 0")
	}
	//zerar o visor após o acionamento da operação
	if( operacao == true){
		atual = "";
		operacao = false;
		console.log("Havia operação")
		document.getElementById('visor').value = num;
	}else{	
	document.getElementById('visor').value = (atual + num);
	console.log("Valor digitado "+visor.value)
	}
}

function resetar(){
	//reseta os valores do vidor da calculadora
	 document.getElementById('visor').value = 0;
	 valor1 = 0;
	 somav=false;
	 subtrairv = false;
	 multiplicarv = false;
}
//função do botão somar, incluindo soma direta e soma +=
function soma(){
	if(somav == true){
		valor1 += parseInt(visor.value);
		console.log("valor1 = "+(valor1));
		visor.value = parseInt(valor1);
		operacao = true;
		equacao = 0;
	}else{
		valor1 += parseInt(visor.value);
		console.log("valor1 = "+(valor1));
		operacao = true;
		somav = true;
	}
	equacao = 1;
	
	return operacao, valor1, somav, equacao
}

function subtrair(){
	if(subtrairv == true){
		valor2 = (parseInt(visor.value));
		var resultado = valor1 - valor2;
		visor.value = resultado
		valor1 = resultado;
		valor2 = 0;
		operacao = true;
		equacao = 0;
	}else{
		valor1 = (parseInt(visor.value));
		console.log("valor1 = "+(valor1));
		operacao = true;
		subtrairv = true;
	}
	equacao = 2;
	
	return operacao, valor1, somav, equacao
}

function multiplicar(){
	if(multiplicarv == true){
		valor1 *= parseInt(visor.value);
		valor2 = valor1;
		console.log("valor1 = "+(valor1));
		visor.value = parseInt(valor1);
		operacao = true;
		equacao = 0;
	}else{
		valor1 = (parseInt(visor.value));
		console.log("valor1 = "+(valor1));
		operacao = true;
		multiplicarv = true;
	}
	equacao = 3;
	
	return operacao, valor1, multiplicarv, equacao, valor2
}

function igual(){
	if(equacao == 1){
		valor1 += parseInt(visor.value);
		visor.value = (valor1);
		operacao = true;
		somav = false;
	}else{
		if(equacao == 2){
			valor1 -= parseInt(visor.value);
			visor.value = (valor1);
			operacao = true;
			subtrairv = false;
		}else{
			multiplicar();
			/*if(equacao == 3){
				valor1 *= parseInt(visor.value);
				visor.value = (valor1);
				operacao = true;
				subtrairv = false;
			}*/
		}
	}
	equacao = 0;
	valor1 = 0;
}






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

