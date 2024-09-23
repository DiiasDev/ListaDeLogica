// Faça um Programa que peça dois números e imprima a soma.

let btn = document.getElementById("btn"); 

btn.addEventListener("click",function(){
    // pegando nome do aluno
    let nome = document.querySelector("#nome").value;

    //pegando os números
    let nota1 = parseFloat(document.querySelector('#nota').value);
    let nota2 = parseFloat(document.querySelector('#nota2').value);
    let nota3 = parseFloat(document.querySelector('#nota3').value);
    let nota4 = parseFloat(document.querySelector('#nota4').value);

    //logica para calcular media
    let media = (nota1 + nota2 + nota3 + nota4) / 4; 

    //validação para imprimir
    if(!isNaN(nota1 && nota2 && nota3 && nota4)){
        let paragrafo = document.getElementById("paragrafo");
        paragrafo.innerHTML = `Valor da média do aluno ${nome} é de ${media.toFixed(2)}`
        setTimeout(function(){
            paragrafo.style.display = 'none'
            //lógica para atualizar a página
            window.location.reload(true);
        },6000)
    }else{
        alert("No campo de números, é aceitado somente números")
    }
})