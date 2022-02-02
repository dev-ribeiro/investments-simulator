var capital = document.getElementById("capital");
var time = document.getElementById("tempo");
var fee = document.getElementById("taxa");
var resultRendimento = document.getElementById("resultadoJuros");
var resultMontante = document.getElementById("resultadoMontante");
var nav = document.getElementById("nav");
var simulate = document.getElementById("simulate");
var pageInvestments = document.getElementById("pageInvestments");
var botao = document.getElementById("botao");
var body = document.getElementsByTagName("body")[0];
var selectRendaFixa = document.getElementById("selectRendaFixa");

botao.addEventListener('click',calculate);

onload = () => {
    createPageApresentation();
    acessPageCalculator();
    acessPageInvestments();
    manipulateNav();
    insertOptionsRendaFixa();
}

function calculate() {

    let convertCapital = Number(capital.value);
    let convertTime = Number(time.value);
    let convertFee = Number(fee.value);

    let juros = calculating.calcJuros(convertCapital,convertFee,convertTime);
    let montante = calculating.calcMontante(convertCapital,convertFee,convertTime);

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

function acessPageCalculator(){
    let apresentation = document.querySelector('.apresentation');
    let calculator = document.querySelector('.calculator');
    calculator.addEventListener('click',() => {
        apresentation.classList = 'none';
        pageInvestments.classList = 'none';
    })
}

function acessPageInvestments(){
    let apresentation = document.querySelector('.apresentation');
    let investments = document.querySelector('.investments');
    investments.addEventListener('click',() => {
        apresentation.classList = 'none';
        simulate.classList = 'none';
    })
}

function manipulateNav(){

    // Criando os elementos
    let navElementCalculadora = document.createElement('a');
    let navElementInvestimentos = document.createElement('a');
    let navElementHome = document.createElement('a');

    // Atribuindo o conteúdo
    navElementCalculadora.innerText = 'Calculadora';
    navElementInvestimentos.innerText = 'Opções de Investimentos';
    navElementHome.innerText = 'Home';

    // Alocando na nav
    nav.appendChild(navElementCalculadora);
    nav.appendChild(navElementInvestimentos);
    nav.appendChild(navElementHome);

    // Acessando os itens do menu
    let apresentation = document.querySelector('.apresentation');

    // Criando os eventos
    navElementCalculadora.addEventListener('click',()=>{
        apresentation.classList = 'none';
        pageInvestments.classList = 'none';
        simulate.classList = 'dados';
    });
    navElementInvestimentos.addEventListener('click',()=>{
        apresentation.classList = 'none';
        simulate.classList = 'none';
        pageInvestments.classList = 'pageInvestments';
    });
    navElementHome.addEventListener('click',()=>{
        apresentation.classList = 'apresentation';
    });
}

function insertOptionsRendaFixa(){
    for(let selic of rendaFixa.selic_2022){
        selectRendaFixa.innerHTML += `<option>${selic.name}</option>`
    };

    for(let ipca of rendaFixa.ipca_2022){
        selectRendaFixa.innerHTML += `<option>${ipca.name}</option>`
    };

    for(let prefixado of rendaFixa.prefixado_2022){
        selectRendaFixa.innerHTML += `<option>${prefixado.name}</option>`
    };
};

