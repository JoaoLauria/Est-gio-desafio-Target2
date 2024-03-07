function inverterString() {
    let palavra = document.getElementById("palavraInput").value;
    let palavraInvertida = '';

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    document.getElementById("inverter").innerText = "Palavra invertida: " + palavraInvertida;
}
