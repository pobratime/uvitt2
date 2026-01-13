const mongoose = require('mongoose');
const evrosongModel = require('../model/evrosong');


async function prikaziPocetnu(req, res, next) {
    try {
	
    } catch(err){
        next(err);
    }
}


async function prikaziGlasoveDrzave(req, res, next) {
    try {
      
    } catch(err){
        next(err);
    }
}


async function prikaziKonacno(req, res, next){
	 try {
      
    } catch(err){
        next(err);
    }
}




module.exports = {
    prikaziPocetnu,
    prikaziGlasoveDrzave,
    prikaziKonacno
};
