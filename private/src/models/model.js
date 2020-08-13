const conn = require ('.../conection');

let Pedido = function name() {}

Pedido.prototype.AddPedido = function (modelopc,problema,contato,cpf){
    this.modelopc = modelopc
    this.problema = problema 
    this.contato = contato 
    this.cpf = cpf 

    let query = `INSERT INTO pedidos values (default,'${this.cpf}','${this.contato}','${this.modelopc}','${this.problema}')`;

    

}

Pedido.prototype.RemovePedido = function(){

}

Pedido.prototype.UpdatePedido = function(){

}

Pedido.prototype.ViewPedidos = function(){

}

