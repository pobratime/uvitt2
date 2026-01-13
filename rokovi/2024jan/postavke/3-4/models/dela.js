const mongoose = require('mongoose');

const delaSchema = new mongoose.Schema({
    ime: {type:String},
    dobro: {type:Boolean},
    delo: {type:String},
    poeni: {type:Number},
    pismo: {type:String},
    poslato: {type:Boolean}
});

const delaModel = mongoose.model('delaModel', delaSchema, 'dela');

async function dohvatiDela(){
    const ret = await delaModel.find().sort({ poeni: -1 }).exec();
    if(ret == null || ret.length == 0){
        console.log("ret == null || ret.length == 0 in dohvatiDela()");
        return null;
    }
    return ret;
}

async function dohvatiDelaPoImenu(ime){
    const ret = await delaModel.find({_id: ime}).exec();
    if(ret == null || ret.length == 0){
        console.log("ret == null || ret.length == 0 in dohvatiDelaPoImenu()");
        return null;
    }
    return ret;
}

async function sacuvajDelo(dete, delo, poeni) {
    const novo = new delaModel({
        ime: dete,
        dobro: poeni > 0,
        delo: delo,
        poeni: poeni,
        pismo: "",
        poslato: false
    });
    await novo.save();
}

module.exports = {
    dohvatiDela,
    dohvatiDelaPoImenu,
    sacuvajDelo
};
