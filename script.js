function btnRolar(parametro) {
    const numDados = document.getElementById("numDados").value;
    const resultado = document.getElementById("resultado");
    const imagem = document.getElementById("imagem");
    const valores = [];
    const imagens = [];

    for(let i = 0; i < numDados; i++) {
        const valor = Math.floor(Math.random() * 6) + 1;
        valores.push(valor);
        imagens.push(`<img src = "img/${valor}.png" alt = "Dado ${valor}">`);
    }

    resultado.textContent = `Dados: ${valores.join(", ")}`;
    imagem.innerHTML = imagens.join("");
}