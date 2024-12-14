let palavras = ["MELANCIA", "BANANA", "LARANJA", "MANGA"];
let palavraEscolhida = "";
let palavraDisplay = [];
let tentativasRestantes = 6;
let letrasErradas = [];
let letrasCorretas = [];

function iniciarJogo() {
    palavraEscolhida = escolherPalavra();
    palavraDisplay = Array(palavraEscolhida.length).fill("_");
    document.getElementById("palavra").innerText = palavraDisplay.join(" ");
    document.getElementById("tentativas").innerText = tentativasRestantes;
    document.getElementById("mensagem").innerText = "";
}

function escolherPalavra() {
    let escolha;
    do {
        escolha = palavras[Math.floor(Math.random() * palavras.length)];
    } while (palavrasUsadas.includes(escolha));

    palavrasUsadas.push(escolha);
    return escolha;
}

function tentarLetra() {
    let letra = document.getElementById("inputLetra").value.toUpperCase();

    if (letra && !letrasErradas.includes(letra) && !letrasCorretas.includes(letra)) {
        if (palavraEscolhida.includes(letra)) {
            letrasCorretas.push(letra);
            atualizarPalavra(letra);
        } else {
            letrasErradas.push(letra);
            tentativasRestantes--;
            document.getElementById("tentativas").innerText = tentativasRestantes;
        }

        document.getElementById("inputLetra").value = "";
        verificarFimDeJogo();
    }
}

function atualizarPalavra(letra) {
    for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letra) {
            palavraDisplay[i] = letra;
        }
    }

    document.getElementById("palavra").innerText = palavraDisplay.join(" ");
}

function verificarFimDeJogo() {
    if (palavraDisplay.join("") === palavraEscolhida) {
        document.getElementById("mensagem").innerText = "Parabéns, você adivinhou a palavra!";
    } else if (tentativasRestantes <= 0) {
        document.getElementById("mensagem").innerText = `Você perdeu! A palavra era: ${palavraEscolhida}`;
    }
}

function chutarPalavra() {
    let chute = prompt("Chute a palavra!");
    if (chute.toUpperCase() === palavraEscolhida) {
        document.getElementById("mensagem").innerText = "Parabéns, você acertou!";
    } else {
        document.getElementById("mensagem").innerText = `Você errou! A palavra era: ${palavraEscolhida}`;
    }
}

let palavrasUsadas = [];
iniciarJogo();
