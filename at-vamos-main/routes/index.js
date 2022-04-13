module.exports = (app) => {
    app.get('/', (req,res) => {
        res.render('index.ejs')
    })


module.exports = (app) => {

    var conexao = require('../config/database')

    app.get('/',async(req,res) => {
        conexao()
        var cadastro = require('../models/cadastro')
        var documentos = await cadastro.find().sort({'_id':-1})

            res.render('index.ejs',{dados:documentos})
    })

    app.post('/', (req, res)=>{

        var conexao = require('../config/database')

        conexao()

        var modelo = require('../models/database')

        var documento = new modelo({
            texto: req.body.texto
        })
        .save()
        .then(()=>{
            res.redirect('/')
        
        })
        .catch(()=>{
            res.send("Não foi possível gravar documento no banco de dados")
        })
    })

}

}