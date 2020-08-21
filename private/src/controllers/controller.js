const Pedido = require('../models/model')

let pedido = new Pedido();

exports.home = (req, res)=>{
    res.render('../views/pages/home.htm');
}  

exports.AdicionarPedido = (req, res) => {
    let modelo_text = req.body.modelo_text
    let problema_text = req.body.problema_text 
    let contato_text = req.body.contato_text
    let cpf_text = req.body.contato_text 

    pedido.AddPedido(modelo_text,problema_text,contato_text,cpf_text).
    then((result)=>{
        console.log('Pedido adicionado')
        res.render('')
    }).catch(error => {
        console.log('Erro ao adicionar pedido:$',error)
    })
}

exports.RemoverPedido = (req,res) => {
    let numero_ordem = req.body.numero_ordem

    pedido.RemovePedido(numero_ordem).then((result) => {
        console.log("O pedido foi removido")
    }).catch(error => {
        console.log("Problema ai remover pedido",error)
        console.log("Confirme se o numero do pedido está correto")
    })
}

exports.AtualizarPedido = (req,res) => {
    let numero_ordem = req.body.numero_ordem
    let modelo_text = req.body.modelo_text
    let problema_text = req.body.problema_text 
    let contato_text = req.body.contato_text
    let cpf_text = req.body.contato_text 

    pedido.UpdatePedido(modelo_text,problema_text,contato_text,cpf_text,numero_ordem).then((result)=>{
        console.log("Pedido Atualizado!")
    }).catch(error=>{
        console.log("ERRO AO ATUALIZAR PEDIDO:",error)
    })
} 



