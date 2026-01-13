const mongoose = require('mongoose');
const ucenikModel = require('../model/ucenik');


async function prikaziPocetnu(req, res, next) {
    try {
        res.render('pocetna');	
    } catch(err){
        next(err);
    }
}


async function prikaziOcene(req, res, next) {
    try {
        const imePrezime = req.query.imePrezime;
        const trazeno = await ucenikModel.dohvatiOceneUcenika(imePrezime);
        if(trazeno == null) next(err);
        res.render('ocene', {trazeno});
    } catch(err){
        next(err);
    }
}


async function unesiOcenu(req, res, next){
	 try {
        const imePrezime = req.body.imePrezime;
        const predmet = req.body.predmet;
        const ocena = req.body.ocena;
        await ucenikModel.dodajNovuOcenu(imePrezime, predmet, ocena);
        
        const trazeno = await ucenikModel.dohvatiOceneUcenika(imePrezime);
        res.render('ocene', {trazeno});
    } catch(err){
        next(err);
    }
}




module.exports = {
    prikaziPocetnu,
    prikaziOcene,
    unesiOcenu
};
