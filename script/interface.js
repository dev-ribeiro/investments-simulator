var capital = document.getElementById("capital");
var time = document.getElementById("tempo");
var fee = document.getElementById("taxa");
var resultRendimento = document.getElementById("resultadoJuros");
var resultMontante = document.getElementById("resultadoMontante");
var apresentation = document.getElementById("apresentation");
var calculator = document.getElementById("calculator");
var investments = document.getElementById("investments");
var back = document.getElementById("back");
var botao = document.getElementById("botao");

botao.addEventListener('click',calcular);
calculator.addEventListener('click',closeWindow);
investments.addEventListener('click',createPage);
back.addEventListener('click',returnMenu);

function calcular() {

    let convertCapital = Number(capital.value);
    let convertTime = Number(time.value);
    let convertFee = Number(fee.value);

    let juros = calcJuros(convertCapital,convertFee,convertTime);
    let montante = calcMontante(convertCapital,convertFee,convertTime);

    resultRendimento.innerHTML = juros;
    resultMontante.innerHTML = montante

}

function closeWindow(){
    apresentation.classList = "none"
}

function returnMenu(){
    apresentation.classList = "apresentation"
}

function createPage(){
    let body = document.getElementsByTagName('body')[0];
    let div1 = document.createElement('div');
    div1.innerHTML = "Este conteúdo ainda está em desenvolvimento, volte novamente em outro momento.";
    div1.classList = "teste";
    body.appendChild(div1);
    let div2 = document.createElement('div');
    div2.innerHTML = "Voltar";
    div2.classList = "teste2";
    div1.appendChild(div2);
    div2.addEventListener('click',()=>{
        div1.classList = "none"
    })
}