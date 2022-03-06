/**
 * Esta aplicação foi criada para fins didáticos, todo o conteúdo aqui aplicado foi por intermédio de estudos e pesquisas.
 * 
 * Autor: Wesley Santos
 */

/**
 * Calculadora da página.
 */
const calculadora = {

	display: document.querySelector('#visor'),
	skin: document.getElementById('calculadora').classList,
	background: document.getElementById('container'),
	
	iniciar() {
		alert('Calculadora Iniciada')
	},

	cliqueBotoes() {
		document.addEventListener('click', function (evento) {
			const elemento = evento.target;
			if (elemento.classList('number')) {
				console.log('deu certo')
			}
		})
	},

	mudarSkin(valor){
		this.skin.forEach(data => this.skin.remove(data));
		this.skin.add(valor);		
		mudafundo(valor, this.background);
	}
}

calculadora.iniciar();

/**
 * Altera a cor de skin da calculadora de acordo com o botão escolhido.
 * @param {String} valor 
 */
function changeSkin(valor){
	calculadora.mudarSkin(valor);
}

/**
 * Define u plano de fundo pré-definido à página de acordo com o tema de skin escolhido.
 * @param {String} key 
 */
function mudafundo(key, background) {
	switch (key) {
		case 'white':
			background.style
				.backgroundImage = 'linear-gradient(120deg, gray, white, gray)';
			break;

		case 'black':
			background.style
				.backgroundImage = 'linear-gradient(120deg, black, rgb(80, 80, 80), black)';
			break;

		case 'red':
			background.style
				.backgroundImage = 'linear-gradient(120deg, black, rgb(128, 0, 0), black)';
			break;

		case 'green':
			background.style
				.backgroundImage = 'linear-gradient(120deg, black, rgb(0, 128, 0), black)';
			break;

		case 'orange':
			background.style
				.backgroundImage = 'linear-gradient(120deg, black, rgb(220, 100, 0), black)';
			break;
	
		default:
			background.style
				.backgroundImage = 'linear-gradient(120deg, gray, white, gray)';
			break;
	}
}