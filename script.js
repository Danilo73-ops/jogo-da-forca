const palavras = ["javascript", "html", "css", "python", "forca", "desenvolvimento"];
let palavraEscolhida = "";
let palavraOculta = "";
let tentativas = 6;
let letrasUsadas = [];

// Função para escolher uma palavra aleatória
function escolherPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    palavraEscolhida = palavras[indice];
    palavraOculta = "_".repeat(palavraEscolhida.length);
    atualizarPalavra();
}

// Função para atualizar a exibição da palavra
function atualizarPalavra() {
    document.getElementById("palavra").innerText = palavraOculta;
    document.getElementById("num-tentativas").innerText = tentativas;
    document.getElementById("letras-usadas").innerText = "Letras usadas: " + letrasUsadas.join(", ");
}

// Função para verificar a letra
function verificarLetra(letra) {
    if (letrasUsadas.includes(letra)) {
        alert("Você já usou essa letra!");
        return;
    }

    letrasUsadas.push(letra);
    if (palavraEscolhida.includes(letra)) {
        // Se a letra estiver na palavra, atualiza a palavra oculta
        let novaPalavraOculta = "";
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                novaPalavraOculta += letra;
            } else {
                novaPalavraOculta += palavraOculta[i];
            }
        }
        palavraOculta = novaPalavraOculta;
    } else {
        // Se a letra não estiver na palavra, diminui as tentativas
        tentativas--;
    }

    atualizarPalavra();
    verificarResultado();
}

// Função para verificar se o jogo acabou
function verificarResultado() {
    if (palavraOculta === palavraEscolhida) {
        document.getElementById("mensagem").innerText = "Parabéns, você ganhou!";
        document.getElementById("chutar").disabled = true;
    } else if (tentativas === 0) {
        document.getElementById("mensagem").innerText = `Você perdeu! A palavra era: ${palavraEscolhida}`;
        document.getElementById("chutar").disabled = true;
    }
}

// Função de ação do botão
document.getElementById("chutar").addEventListener("click", () => {
    const letra = document.getElementById("letra").value.toLowerCase();
    if (letra && letra.length === 1) {
        verificarLetra(letra);
        document.getElementById("letra").value = "";
    } else {
        alert("Por favor, digite uma letra válida.");
    }
});

// Inicializa o jogo
escolherPalavra();
