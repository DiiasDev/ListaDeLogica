// Faça um Programa que converta metros para centímetros.

// Capturando dados com DOM
let btn = document.querySelector("#btn");

// adicionando evento de click no botão
btn.addEventListener("click", function () {
  let metros = document.querySelector("#metros").value;

  // variavel para fazer o calculo
  let centimetros = metros * 100;
  // inserindo o valor no HTML
  paragrafo.innerHTML = `Valor convertido em cm = ${centimetros}`;

  // fazendo o valor desaparecer após 3 segundos
  setTimeout(function () {
    paragrafo.style.display = "none";
    window.location.reload(true);
  }, 3000);
});
