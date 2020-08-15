const conn = require(".../conection");
const pool = require("../../../../../../Downloads/Exemplo_MVC_com_Node-master/Exemplo_MVC_com_Node-master/connection");

let Pedido = function name() {};

function GetSeriveNumber() {
  var number1 = Math.floor(Math.random() * 10);
  var number2 = Math.floor(Math.random() * 10);
  var number3 = Math.floor(Math.random() * 10);
  var number4 = Math.floor(Math.random() * 10);
  return `${number1}+${number2}+${number3}+${number4}`;
}

Pedido.prototype.AddPedido = function (modelopc, problema, contato, cpf) {
  this.modelopc = modelopc;
  this.problema = problema;
  this.contato = contato;
  this.cpf = cpf;
  var service_number = GetSeriveNumber();

  let query = `INSERT INTO pedidos values (default,'${this.cpf}','${this.contato}','${this.modelopc}','${this.problema}','${service_number}')`;

  return new Promise((resolve, reject) => {
    pool.query(query, (err) => {
      if (err) reject(`ERRO AO INSERIR CARRO : ${err}`);
      else resolve(`Pedido ${service_number} adicionado `);
    });
  });
};

Pedido.prototype.RemovePedido = function (s_number) {
  this.s_number = s_number;
  let query = `DELETE FROM pedidos where service_number=${s_number}`;

  return new Promise((resolve, reject) => {
    pool.query(query, (error) => {
      if (error) reject(`Erro ao apagar pedido: ${error}`);
      else resolve(`Pedido excluído`);
    });
  });
};

Pedido.prototype.UpdatePedido = function (
  modelopc,
  problema,
  contato,
  cpf,
  service_number
) {
  this.modelopc = modelopc;
  this.problema = problema;
  this.contato = contato;
  this.cpf = cpf;

  let query = `UPDATE pedidos set  modelopc = ${modelopc}, problema = ${problema}, contato = ${contato}, cpf = ${cpf} FROM service_number = ${service_number}`;
  pool.query
};

Pedido.prototype.ViewPedidos = function () {};
