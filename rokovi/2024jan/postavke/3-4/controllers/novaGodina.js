const modelDela = require('../models/dela');

async function prikaziPocetnuStranicu(req, res, next) {
    try {
        const dela = await modelDela.dohvatiDela(); 
        res.render('index', {dela})
    } catch (err) {
        next(err);
    }
}

async function prikaziDete(req, res, next) {
    try {
        const dela = await modelDela.dohvatiDelaPoImenu(req.params._id);
        res.render('kid', {dela});
    } catch (err) {
        next(err);
    }
}

async function unesiDelo(req, res, next){
    try {
        const ime = req.body.imeProsldjeno;
        const delo = req.body.deloProsledjeno; 
        const poeni = req.body.poeniProsledjeno;
        if(ime == '' || delo == '' || poeni == null) next();

        console.log(ime + " " + delo + " " + poeni);
        const novo = await modelDela.sacuvajDelo(ime, delo, poeni);
        const dela = await modelDela.dohvatiDela();
        await res.render('index', {dela});
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziDete,
    unesiDelo
};
