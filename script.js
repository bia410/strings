function extrairPalavras() {
  const texto = document.getElementById("inputTexto").value.toLowerCase();
  const palavras = texto.match(/\b[a-zá-ú]{3,}\b/gi) || [];

  const frequencia = {};

  palavras.forEach(palavra => {
    if (!palavrasRuins.includes(palavra)) {
      frequencia[palavra] = (frequencia[palavra] || 0) + 1;
    }
  });

  const palavrasOrdenadas = Object.entries(frequencia)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const resultado = palavrasOrdenadas.map(([palavra, count]) =>
    `<p><strong>${palavra}</strong>: ${count}</p>`).join("");

  document.getElementById("resultado").innerHTML = resultado || "<p>Nenhuma palavra relevante encontrada.</p>";
}
