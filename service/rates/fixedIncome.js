const SELIC_OVER = 13.25;
const IPCA = 15;

const fixedIncomes = [
    {name:"Tesouro SELIC",rate:SELIC_OVER + '%'},
    {name:"IPCA",rate:IPCA + '%'},
];

module.exports = {fixedIncomes}