let numerosSorteados = [];
let numeroLimite = 10;
let secretNumber = randomNumber();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Secret Number');
exibirTextoNaTela('p', 'Chose a number between 1 and 10');
}

exibirMensagemInicial();

function verificarChute() {
    let number = document.querySelector('input').value;
    
    if (number == secretNumber) {
        exibirTextoNaTela('h1', 'You got it!');
        let palavraTentativa = tentativas > 1 ? 'trys' : 'try';
        let mensagemTentativas = `Congrats you discovered the secret number with ${tentativas} ${palavraTentativa} `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (number > secretNumber) {
        exibirTextoNaTela('p', 'The secret number is lower');
        } else {
        exibirTextoNaTela('p', 'The secret number is higher');
        }
        tentativas++;
        limparcampo();
    }
}

function randomNumber() {
    let chosenNumber = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = numerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(chosenNumber)) {
        return randomNumber();
    } else {
        numerosSorteados.push(chosenNumber);
        console.log(numerosSorteados);
        return chosenNumber;
    }
}

function limparcampo() {
    number = document.querySelector('input');
    number.value = '';
    
}

function restartGame() {
    secretNumber = randomNumber();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

