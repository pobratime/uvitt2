const filmModels = require('../model/film');
const zanrovi = require('../model/zanrovi')

async function prikaziPocetnu(req, res, next) {
    try {
    } catch(err){
        next(err);
    }
}


async function dohvatiFilm(req, res, next) {
    try {
    } catch(err){
        next(err);
    }
}


async function unesiFilm(req, res, next) {
    try {
    } catch(err){
        next(err);
    }
}

async function unesiGlumca(req, res, next){
    try {
    } catch(err){
        next(err)
    }
}

module.exports = {
    prikaziPocetnu,
    dohvatiFilm,
    unesiFilm,
    unesiGlumca
};
