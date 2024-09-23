// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
let btn = document.getElementById("btn");




btn.addEventListener("click",function(){
    // capturando valor do input
    let numero = parseFloat(document.querySelector("#numero").value);

    // Criando e exibindo numero com validação
    if(!isNaN(numero)){
    let paragrafo = document.getElementById("mensagem");
    paragrafo.innerHTML = `Número digitado foi ${numero}`
    setTimeout(function(){
        paragrafo.style.display = "none";
    },3000)
    }else{
    alert("somente números")
    }
    
})