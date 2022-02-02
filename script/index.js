// const YEAR = 2022;
const SELICOVER = 0.0925;
const INFLACAO = 0.1006;

let calculating = {
    calcJuros: (c,i,t)=>{
        return c * (i/100) * t
    },

    calcMontante: (c,i,t)=>{
        return c + (c * (i/100) * t)
    }
};

let rendaFixa = {
    selic_2022: [
        {name:'Tesouro SELIC 2024',value:SELICOVER + 0.000733},
        {name:'Tesouro SELIC 2026',value:SELICOVER + 0.002201}
    ],
    ipca_2022: [
        {name:'Tesouro IPCA+ 2026',value:INFLACAO + 0.0524},
        {name:'Tesouro IPCA+ 2035',value:INFLACAO + 0.0554},
        {name:'Tesouro IPCA+ 2045',value:INFLACAO + 0.0554},
        {name:'Tesouro IPCA+ com juros semestrais 2030',value:INFLACAO + 0.0541},
        {name:'Tesouro IPCA+ com juros semestrais 2040',value:INFLACAO + 0.0555},
        {name:'Tesouro IPCA+ com jursos semestrais 2055',value:INFLACAO + 0.0557},
    ],
    prefixado_2022: [
        {name:'Tesouro prefixado 2024',value:0.1121},
        {name:'Tesouro prefixado 2026',value:0.1095},
        {name:'Tesouro prefixado com juros semestrais 2031',value:0.1108},
    ],
}