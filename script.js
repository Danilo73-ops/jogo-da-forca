// Lista de palavras
const palavras = [
    "DESAFIO",
    "COMPUTADOR",
    "PROGRAMACAO",
    "APRENDIZAGEM",
    "ALGORITMO",
    "DESENVOLVIMENTO",
    "SISTEMAS",
    "TEXTO",
    "DESIGN",
    "CODIGO"
];

// Lista para armazenar palavras já usadas
let palavrasUsadas = [];

// Função para escolher uma palavra aleatória que ainda não foi usada
function escolherPalavra() {
    let escolha;
    do {
        escolha = palavras[Math.floor(Math.random() * palavras.length)];
    } while (palavrasUsadas.includes(escolha));  // Verifica se já foi usada

    palavrasUsadas.push(escolha);  // Adiciona a palavra à lista de usadas
    return escolha;
}

let palavraEscolhida = escolherPalavra();
let letrasCorretas = Array(palavraEscolhida.length).fill("_");
let tentativas = 6;

// Exibir a palavra na tela
document.getElementById("palavra").innerHTML = letrasCorretas.join(" ");
document.getElementById("tentativas").innerHTML = `Tentativas restantes: ${tentativas}`;

// Função para verificar se a letra do usuário está correta
function verificarLetra() {
    const letra = document.getElementById("letra").value.toUpperCase();
    if (letra && letra.length === 1) {
        let acerto = false;
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                letrasCorretas[i] = letra;
                acerto = true;
            }
        }

        if (!acerto) {
            tentativas--;
        }

        // Atualiza a tela
        document.getElementById("palavra").innerHTML = letrasCorretas.join(" ");
        document.getElementById("tentativas").innerHTML = `Tentativas restantes: ${tentativas}`;

        // Verifica se o jogo acabou
        if (letrasCorretas.join("") === palavraEscolhida) {
            document.getElementById("mensagem").innerHTML = "Você venceu!";
        } else if (tentativas === 0) {
            document.getElementById("mensagem").innerHTML = `Você perdeu! A palavra era ${palavraEscolhida}`;
        }

        // Limpa o campo de input
        document.getElementById("letra").value = "";
    }
}
