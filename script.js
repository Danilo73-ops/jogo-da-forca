let palavras = ['javascript', 'forca', 'programacao', 'desenvolvimento', 'computador'];
let palavraEscolhida;
let tentativas = 6;
let letrasUsadas = [];
let palavraAtual = [];
let jogoAtivo = true;

function escolherPalavra() {
    // Escolher palavra aleatória
    let indice = Math.floor(Math.random() * palavras.length);
    palavraEscolhida = palavras[indice];
    palavras.splice(indice, 1); // Remove a palavra escolhida da lista para não repetir
    palavraAtual = Array(palavraEscolhida.length).fill('_');
    document.getElementById('palavra').innerText = palavraAtual.join(' ');
    document.getElementById('tentativas').innerText = `Tentativas restantes: ${tentativas}`;
    document.getElementById('letrasUsadas').innerText = `Letras usadas: ${letrasUsadas.join(', ')}`;
}

function exibirTeclado() {
    let teclado = document.getElementById('teclado');
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    teclado.innerHTML = '';

    letras.forEach(letra => {
        let botao = document.createElement('button');
        botao.innerText = letra;
        botao.onclick = function() {
            tentarLetra(letra);
        };
        teclado.appendChild(botao);
    });
}

function tentarLetra(letra) {
    if (!jogoAtivo || letrasUsadas.includes(letra)) return;

    letrasUsadas.push(letra);
    document.getElementById('letrasUsadas').innerText = `Letras usadas: ${letrasUsadas.join(', ')}`;

    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                palavraAtual[i] = letra;
            }
        }
        document.getElementById('palavra').innerText = palavraAtual.join(' ');
    } else {
        tentativas--;
        document.getElementById('tentativas').innerText = `Tentativas restantes: ${tentativas}`;
    }

    if (tentativas === 0) {
        alert('Você perdeu!');
        jogoAtivo = false;
    } else if (!palavraAtual.includes('_')) {
        alert('Você venceu!');
        jogoAtivo = false;
    }
}

function chutarPalavra() {
    let chute = document.getElementById('chutarPalavra').value.toLowerCase();
    if (chute === palavraEscolhida) {
        document.getElementById('palavra').innerText = palavraEscolhida.toUpperCase();
        alert('Você venceu!');
        jogoAtivo = false;
    } else {
        tentativas--;
        document.getElementById('tentativas').innerText = `Tentativas restantes: ${tentativas}`;
    }
    document.getElementById('chutarPalavra').value = '';
}

function reiniciarJogo() {
    tentativas = 6;
    letrasUsadas = [];
    palavraAtual = [];
    jogoAtivo = true;
    escolherPalavra();
    exibirTeclado();
}

document.getElementById('reiniciar').onclick = reiniciarJogo;
document.getElementById('chutarBtn').onclick = chutarPalavra;

escolherPalavra();
exibirTeclado();
