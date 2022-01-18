let capital = document.getElementById("capital");

let time = document.getElementById("tempo");

let fee = document.getElementById("taxa");

let resultRendimento = document.getElementById("resultadoJuros");

let resultMontante = document.getElementById("resultadoMontante");

let botao = document.getElementById("botao");
botao.addEventListener("click",calcJuros)

function calcJuros(j,c,i,t,m){
    c = Number(capital.value);
    i = Number(fee.value);
    t = Number(time.value);
    j = c * (i/100) * t;
    console.log(j);
    m = c + j;
    console.log(m);
    let result1 = resultRendimento;
    result1.innerHTML = " R$ " + j;
    let result2 = resultMontante;
    result2.innerHTML = " R$ " + m;
}