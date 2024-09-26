let botao = document.getElementById("btn");

botao.addEventListener("click", function () {
  //pegando valores do input e de PI
  let raio = parseFloat(document.querySelector("#raio").value);
  let pi = 3.14;

  // Variavel para calcular a área
  let area = pi * (raio * raio);

  //Validação de valores
  if (isNaN(raio)) {
    alert("Valor em metros, por favor");
  } else {
    paragrafo.innerHTML = `valor da área do circulo é ${area.toFixed(2)}`;
  }
});
