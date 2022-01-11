let valorReal = document.getElementById("capital").value;

let time = document.getElementById("tempo").value;

let fee = document.getElementById("taxa").value;

let resultRendimento = document.getElementById("resultadoJuros");

let resultMontante = document.getElementById("resultadoMontante");


function teste(){
    console.log("teste")
}

function calcJM(j,m,c,i,t){

    valorReal = c;
    time = t;
    fee = i;

    j = c * t * (i/100)

    console.log(j)

    m = c + j

    console.log(m)

}