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
var contentRendaFixa = document.getElementById("contentRendaFixa");
var selectRendaFixa = document.getElementById("selectRendaFixa");
var search = document.getElementById("search");

onload = () => {
    botao.addEventListener('click',calculate);
    createPageApresentation();
    acessPageCalculator();
    acessPageInvestments();
    manipulateNav();
    insertOptionsRendaFixa();
    search.addEventListener('click',searchFees);
}

function calculate() {

    let convertCapital = Number(capital.value);
    let convertTime = Number(time.value);
    let convertFee = Number(fee.value);

    let juros = calculating.calcJuros(convertCapital,convertFee,convertTime);
    let montante = calculating.calcMontante(convertCapital,convertFee,convertTime);

    resultRendimento.innerText = "R$ " + juros.toFixed(2);
    resultMontante.innerText = "R$ " + montante.toFixed(2);

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
    imageCalculator.src = '../images/photos/img2.jpg';
    imageInvestments.src = '../images/photos/img1.jpg';

}

function acessPageCalculator(){
    let apresentation = document.querySelector('.apresentation');
    let calculator = document.querySelector('.calculator');
    calculator.addEventListener('click',() => {
        apresentation.classList = 'none';
        pageInvestments.classList = 'none';
        simulate.classList = 'dados';
    })
}

function acessPageInvestments(){
    let apresentation = document.querySelector('.apresentation');
    let investments = document.querySelector('.investments');
    investments.addEventListener('click',() => {
        apresentation.classList = 'none';
        simulate.classList = 'none';
        pageInvestments.classList = 'pageInvestments';
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
    for(let investimentoRendaFixa of rendaFixa){
        selectRendaFixa.innerHTML += `<option>${investimentoRendaFixa.name}</option>`;
    };
}

function searchFees(){
    let investmentTarget = selectRendaFixa.value;
    let associate = (x) => {
        return x.name === investmentTarget
    };
    let result = rendaFixa.find(associate);

    // Teste - mostrando a taxa de rendimento
    let divTeste = document.createElement('div');
    contentRendaFixa.appendChild(divTeste);
    divTeste.innerHTML = "A taxa de rendimento é de " + (result.value * 100).toFixed(2) + " % aa";

    // Update
    let divLastUpdate = document.createElement('div');
    divLastUpdate.innerHTML = LASTUPDATE;
    contentRendaFixa.appendChild(divLastUpdate);

    //Removendo o botão
    contentRendaFixa.removeChild(search);

    // Atualizando o botão
    let newButton = document.createElement('button');
    newButton.innerHTML = 'Pesquisar novamente';
    contentRendaFixa.appendChild(newButton);
    newButton.addEventListener('click', ()=>{
        contentRendaFixa.removeChild(newButton);
        contentRendaFixa.removeChild(divLastUpdate);
        contentRendaFixa.removeChild(divTeste);
        contentRendaFixa.appendChild(search);
    });
}