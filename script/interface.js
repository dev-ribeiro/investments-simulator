var capital = document.getElementById("capital");
var time = document.getElementById("tempo");
var fee = document.getElementById("taxa");
var resultRendimento = document.getElementById("resultadoJuros");
var resultMontante = document.getElementById("resultadoMontante");
var back = document.getElementById("back");
var botao = document.getElementById("botao");
var body = document.getElementsByTagName('body')[0];

botao.addEventListener('click',calculate);

onload = () => {
    createPageApresentation()
}

function calculate() {

    let convertCapital = Number(capital.value);
    let convertTime = Number(time.value);
    let convertFee = Number(fee.value);

    let juros = calcJuros(convertCapital,convertFee,convertTime);
    let montante = calcMontante(convertCapital,convertFee,convertTime);

    resultRendimento.innerHTML = juros;
    resultMontante.innerHTML = montante

}



function createPageApresentation(){

    // Criação dos eleementos
    let divApresentation = document.createElement('div');
    let titleApresentation = document.createElement('h3');
    let divOptions = document.createElement('div');
    let divCalculator = document.createElement('div');
    let titleCalculator = document.createElement('h4');
    let imageCalculator = document.createElement('img');
    let divInvestments = document.createElement('div');
    let titleInvestments = document.createElement('h4');
    let imageInvestments = document.createElement('img');

    // Alocar os elementos
    body.appendChild(divApresentation);
    divApresentation.appendChild(titleApresentation);
    divApresentation.appendChild(divOptions);
    divOptions.appendChild(divCalculator);
    divOptions.appendChild(divInvestments);
    divCalculator.appendChild(titleCalculator);
    divCalculator.appendChild(imageCalculator);
    divInvestments.appendChild(titleInvestments);
    divInvestments.appendChild(imageInvestments);

    // Atribuir classes aos elementos
    divApresentation.classList = 'apresentation';
    divOptions.classList = 'options';
    divCalculator.classList = 'calculator';
    divInvestments.classList = 'investments';

    // Atribuir o conteúdo aos títulos
    titleApresentation.innerText = 'O que deseja acessar?';
    titleCalculator.innerText = 'Calculadora';
    titleInvestments.innerText = 'Investimentos';

    // Atribuir as imagens
    imageCalculator.src = '../assets/images/img2.jpg';
    imageInvestments.src = '../assets/images/img1.jpg';

}

function createPageInvestments(){

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