//alert("Esta aplicação foi criada para fins didáticos, todo o conteúdo aqui aplicado foi por intermédio de estudos e pesquisas!");
//Digita o código da tecla clicada co visor
function digitar(num){
			var atual = visor.value;
			document.getElementById('visor').value = atual + num;
}
//Apaga as informações do visor
function zerar(){
		document.getElementById('visor').value = " ";
}

function changeSkinWhite(){
	//variáveis
	styleBodyCalc = window.document.getElementById('calculadora')
	styleVisor = window.document.getElementById('visor')
	styleButton = window.document.getElementById('teclado').getElementsByTagName('input')
	//aplicação de cores no corpo
	styleBodyCalc.style.background = 'linear-gradient(120deg, rgba(180,180,180,0.5),rgba(250,250,250,1),rgba(190,190,200,0.5), white)'
	styleBodyCalc.style.boxShadow = '0px 5px 15px 2px rgba(0,0,1000,0.3)'
	//cores de visor
	styleVisor.style.background = '#66CDAA'
	styleVisor.style.boxShadow = '0px 0px 30px #20B2AA inset'
	//cores dos botões
	for(var i = 0; i < styleButton.length; i++){
		styleButton.item(i).style.background = 'linear-gradient(0deg, #A9A9A9 4%, #C0C0C0 52%, #DCDCDC 30%, #ffffff)'
	}

}
function changeSkinBlack(){
	//variáveis
	styleBodyCalc = window.document.getElementById('calculadora')
	styleVisor = window.document.getElementById('visor')
	styleButton = window.document.getElementById('teclado').getElementsByTagName('input')
	//aplicação de cores no corpo
	styleBodyCalc.style.background = 'linear-gradient(120deg, rgba(10,10,10,0.5),rgba(50,50,50,1),rgba(20,20,20,0.5), black)'
	styleBodyCalc.style.boxShadow = '0px 5px 15px 2px rgba(0,0,1000,0.3)'
	//cores de visor
	styleVisor.style.background = 'rgb(144, 180, 247)'
	styleVisor.style.boxShadow = '0px 0px 30px rgb(61, 93, 153) inset'
	styleVisor.style.color = 'black';
	//cores dos botões
	for(var i = 0; i < styleButton.length; i++){
		styleButton.item(i).style.background = 'linear-gradient(0deg, rgb(40, 40, 40) 4%, rgb(50, 50, 50) 52%, rgb(90, 90, 90) 30%, rgb(80, 80, 80))'
	}
}