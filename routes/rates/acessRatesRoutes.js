const router = require('express').Router();
const {fixedIncomes} = require('../../service/rates/fixedIncome');

router.get('/fixedincome',(req,res)=>{
    if(res.status(200)) res.send(fixedIncomes)
    else res.send("Houve um erro");
})

module.exports = router