// Lista de palavras
const palavras = ["HTML", "JAVASCRIPT", "GITHUB", "REACT", "NODE", "CSS", "PYTHON"];
let palavraEscolhida;
let letrasUsadas = [];
let letrasCorretas = [];
let tentativas = 6;

// Função para escolher uma palavra aleatória e garantir que não repita
function escolherPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length);
    palavraEscolhida = palavras[indiceAleatorio];

    // Remove a palavra escolhida da lista para evitar repetições
    palavras.splice(indiceAleatorio, 1);

    letrasCorretas = Array(palavraEscolhida.length).fill("_");
    letrasUsadas = [];
}

// Exibe a palavra oculta
function exibirPalavra() {
    const palavraElement = document.getElementById("palavra");
    palavraElement.innerHTML = letrasCorretas.join(" ");
}

// Verifica se a letra está na palavra
function verificarLetra(letra) {
    if (letrasUsadas.includes(letra)) {
        alert("Você já tentou essa letra.");
        return;
    }

    letrasUsadas.push(letra);

    let acertou = false;
    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letra) {
            letrasCorretas[i] = letra;
            acertou = true;
        }
    }

    if (!acertou) {
        tentativas--;
        atualizarTentativas();
    }

    exibirPalavra();
    verificarFimDeJogo();
}

// Atualiza a quantidade de tentativas restantes
function atualizarTentativas() {
    const tentativasElement = document.getElementById("tentativas");
    tentativasElement.innerHTML = `Tentativas restantes: ${tentativas}`;
}

// Verifica se o jogo acabou
function verificarFimDeJogo() {
    if (letrasCorretas.join("") === palavraEscolhida) {
        alert("Você venceu! A palavra era: " + palavraEscolhida);
    } else if (tentativas === 0) {
        alert("Você perdeu! A palavra era: " + palavraEscolhida);
    }
}

// Exibe a lista de letras já usadas
function exibirLetrasUsadas() {
    const letrasUsadasElement = document.getElementById("letrasUsadas");
    letrasUsadasElement.innerHTML = `Letras usadas: ${letrasUsadas.join(", ")}`;
}

// Inicia o jogo
function iniciarJogo() {
    if (palavras.length === 0) {
        alert("Não há mais palavras disponíveis para jogar!");
        return;
    }

    escolherPalavra();
    exibirPalavra();
    atualizarTentativas();
    exibirLetrasUsadas();
}

// Lida com o clique da letra
function jogar(letra) {
    verificarLetra(letra);
    exibirLetrasUsadas();
}

// Adiciona um ouvinte para o botão reiniciar
document.getElementById("reiniciar").addEventListener("click", iniciarJogo);

// Chama a função de iniciar o jogo
iniciarJogo();
