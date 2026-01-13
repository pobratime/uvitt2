const mongoose = require('mongoose')

const questionPairSchema = new mongoose.Schema({
    question: {type: [String], required: true},
    answer: {type: [String], required: true}
})

const gradoviSchema = new mongoose.Schema({
    city:{type: String, required: true},
    description:{type: String, required: true},
    questions: {type: [questionPairSchema], required: true}
})

const Gradovi = mongoose.model('Gradovi', gradoviSchema, 'gradovi');

async function dohvatiInfo(city) {
    const ret = await Gradovi.find().exec();
    console.log(ret.length);
    return ret;
} 

async function dohvatiPitanja(city){
    const ret = await Gradovi.find().exec();
    return ret.opis;
}

module.exports = {
    dohvatiInfo,
    dohvatiPitanja
};
