let capital = document.getElementById("capital");

let time = document.getElementById("tempo");

let fee = document.getElementById("taxa");

let resultRendimento = document.getElementById("resultadoJuros");

let resultMontante = document.getElementById("resultadoMontante");


function teste(){
    let c = parseFloat(capital.value);
    console.log(c)
    let i = parseFloat(fee.value);
    console.log(i);
    let t = parseFloat(time.value);
    console.log(t);
}

function calcJuros(j,c,i,t,m){
    c = parseFloat(capital.value);
    i = parseFloat(fee.value);
    t = parseFloat(time.value);
    j = c * (i/100) * t;
    console.log(j);
    m = c + j;
    console.log(m);
    let result1 = resultRendimento;
    result1.innerHTML = "R$" + j;
    let result2 = resultMontante;
    result2.innerHTML = "R$" + m;
}