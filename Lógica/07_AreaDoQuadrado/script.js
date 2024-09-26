// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  let base = parseFloat(document.querySelector("#base").value);
  let altura = parseFloat(document.querySelector("#altura").value);
  let area = base * altura;
  let resultado = Math.pow(area, 2);

  if (isNaN(altura && base)) {
    alert("Valor aceito somente em números");
  } else {
    paragrafo.innerHTML = `Valor da área ao quadrado da forma quadrada é de = ${resultado}`;
  }
});
