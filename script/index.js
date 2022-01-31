function calcJuros(c,i,t){
    return c * (i/100) * t
}

function calcMontante(c,i,t){
    return c + (c * (i/100) * t)
}