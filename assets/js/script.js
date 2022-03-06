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
	finalizouConta: false,
	
	iniciar() {
		alert('Calculadora Iniciada')
		this.pressionaEnter();
	},

	clearDisplay() {
		this.display.value = '0';
	},

	apagaUm() {
		this.display.value = this.display.value.slice(0, -2);
		if (this.display.value == '') {
			this.clearDisplay();
		}
	},

	limite() {
		if (this.display.value.length == 17){
			return true;
		}
	},

	mudarSkin(valor){
		this.skin.forEach(data => this.skin.remove(data));
		this.skin.add(valor);		
		mudarfundo(valor, this.background);
	},

	realizaConta() {
		let conta = this.display.value;
		try {
			conta = eval(conta);
			if (conta == isNaN) {
				console.log(conta);
				alert('Conta Inválida')
				return '0'
			} else {
				this.finalizouConta = true;
				return conta;
			}
		} catch(error) {
			alert('Conta Inválida')
			return '0'
		}
	},

	insereValor(valor) {

		console.log(valor);

		valor = valor.replace('÷', '/');
		valor = valor.replace(',', '.');

		if (this.finalizouConta) {
			this.clearDisplay();
			this.finalizouConta = false;
		}

		if (valor === '=') {
			console.log(this.display.value);
			valor = this.realizaConta();
			this.display.value = valor;
		}
		if (!this.finalizouConta) {
			if( this.display.value == '0' ) {
				this.display.value = valor;
			} else {
				if (!this.limite()) {
					this.display.value += valor;
				}
			}
		}
		if (valor === 'CE') {
			this.clearDisplay();
		}
		if (valor === '<') {
			this.apagaUm();			
		}
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
function mudarfundo(key, background) {
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