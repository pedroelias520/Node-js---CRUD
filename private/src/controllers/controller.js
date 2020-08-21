const Pedido = require('../models/model.js')

let pedido = new Pedido()

exports.home = (req, res)=>{
    res.render('../views/pages/home.htm');
}  

exports.AdicionarPedido = (req, res) => {
    let modelo_text = req.body.modelo_text
    let problema_text = req.body.problema_text 
    let contato_text = req.body.contato_text
    let cpf_text = req.body.contato_text 

    pedido.AdicionarPedido().then((result)=>{

    }).catch(error => {
        
    })
}