   
const mongoose = require('mongoose')

const modelo = new mongoose.Schema({
    texto: String,
    enviado: {type: Date, default: Date.now}
})

const cadastro = mongoose.model('cadastro', modelo)

module.exports = cadastro

