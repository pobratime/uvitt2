const mongoose = require('mongoose');
const letoviModel = require('../model/letovi');
const gradoviModel = require('../model/gradovi');

async function prikaziPocetnu(req, res, next) {
    try {
        res.render('pocetna');
    } catch(err){
        next(err);
    }
}

async function prikaziLetove(req, res, next) {
    try {
        const polazak = req.body.polaziste;
        const dolazak = req.body.destinacija;
        const datum = req.body.dolazak;
        const ret = await letoviModel.dohvatiLet(polazak, dolazak, datum);
        res.render('letovi', {ret});
    } catch(err){
        next(err);
    }
}


async function prikaziKranjuDestinaciju(req, res, next){
	try {
        const destinacija = req.query.destinacija;
        console.log(destinacija);
        grad = null;
        const ret1 = await gradoviModel.dohvatiInfo(destinacija);
        for(let i = 0; i < ret1.length; i++){
            if(ret1[i].description.includes(destinacija)){
                grad = ret1[i];        
            }
        }
        console.log(grad);
        const ret2 = await gradoviModel.dohvatiPitanja(destinacija);
        // console.log(ret2);
        res.render('krajnja', {ret1, ret2});
    } catch(err){
        next(err);
    }
}

module.exports = {
    prikaziPocetnu,
    prikaziKranjuDestinaciju,
    prikaziLetove
};
