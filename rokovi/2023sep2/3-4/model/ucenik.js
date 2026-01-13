const mongoose = require('mongoose');

const oceneSchema = new mongoose.Schema({
    predmet: { type: String, required: true },
    ocena: { type: Number, required: true }
});

const ucenikSchema = new mongoose.Schema({
    imePrezime: { type: String, required: true },
    razred: { type: Number, required: true },
    odeljenje: { type: Number, required: true },
    ocene: { type: [oceneSchema], required: true },
    slika: { type: String, required: true }
});

const Ucenik = mongoose.model('Ucenik', ucenikSchema, 'ucenici');

async function dohvatiOceneUcenika(imePrezime) {
    return await Ucenik.findOne({ imePrezime }).exec();
}

async function dodajNovuOcenu(imePrezime, predmet, ocena) {
    return await Ucenik.updateOne(
        { imePrezime },
        { $push: { ocene: { predmet, ocena } } }
    );
}

module.exports = {
    Ucenik,
    dohvatiOceneUcenika,
    dodajNovuOcenu
};
