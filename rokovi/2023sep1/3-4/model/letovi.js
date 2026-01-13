const mongoose = require('mongoose')

const letoviSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    direct: { type: String, required: true },
    duration: { type: Number, required: true },
    freeSpace: { type: Number, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
});

const Letovi = mongoose.model('Letovi', letoviSchema, 'letovi');

async function dohvatiLet(from, to, date) {
    console.log(from);
    console.log(to);
    console.log(date);
    const datum = date.split('-').reverse().join('.') + '.';
    const ret = await Letovi.find({
        from: from,
        to: to,
        date: datum 
    }).exec();
    console.log(typeof ret);
    console.log(ret);
    return ret;
}

module.exports = {
    dohvatiLet
};


