// Faça um Programa que peça dois números e imprima a soma.


let btn = document.getElementById("btn"); 


btn.addEventListener("click",function(){
    //pegando os números
    let numero1 = parseFloat(document.querySelector('#numero').value);
    let numero2 = parseFloat(document.querySelector('#numero2').value);
    let soma = numero1 + numero2

    //Validação de números
    if(!isNaN(numero1 && numero2)){
        // Imprimindo valores
        let paragrafo = document.querySelector("#mensagem"); 
        paragrafo.innerHTML = `Resultado da soma = ${soma}`
        //Mostrando resultado por 3 segundos e recarregando a página para poder usar novamente
        setTimeout(function(){
        paragrafo.style.display = "none"
        window.location.reload(true);
        },3000)
    }else{
        alert("somente números");
    }
})