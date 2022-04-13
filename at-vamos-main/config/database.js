const mongoose = require('mongoose')

const conexao = async() =>{
    var atlas = mongoose.connect('mongodb+srv://useradmin:admin12345@fiaptecnico.zg8lq.mongodb.net/at')
}

module.exports = conexao