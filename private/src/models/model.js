const conn = require(".../conection");
const pool = require("../../../../../../Downloads/Exemplo_MVC_com_Node-master/Exemplo_MVC_com_Node-master/connection");

let Pedido = function name() {};

function GetSeriveNumber() {
  var number1 = Math.floor(Math.random() * 9);
  var number2 = Math.floor(Math.random() * 9);
  var number3 = Math.floor(Math.random() * 9);
  var number4 = Math.floor(Math.random() * 9);
  return `${number1}+${number2}+${number3}+${number4}`;
}

Pedido.prototype.AddPedido = function (modelopc, problema, contato, cpf) {
  this.modelopc = modelopc;
  this.problema = problema;
  this.contato = contato;
  this.cpf = cpf;  
  let validation

  let query = `INSERT INTO pedidos values (default,'${this.cpf}','${this.contato}','${this.modelopc}','${this.problema}','${service_number}')`;

  do{
    var service_number = GetSeriveNumber();
    new Promise ((resolve,reject) => {
      pool.query(`SELECT * FROM pedidos where servicenumber = ${service_number}`,(error) => {
        if(error){
          console.log("Acesso liberado,não foram encontradas seriais iguais")
          validation = true
        }else{
          console.log("ERRO 4466: Seriais repetidas foram encontradas.")
          console.log("Refatorando...")
          validation = false
        }
      })
    })
  }while(validation==true);

  return new Promise((resolve, reject) => {
    pool.query(query, (err) => {
      if (err) reject(`ERRO AO INSERIR pedido : ${err}`);
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
  return new Promise ((resolve, reject)=>{
    pool.query(query, (error)=>{
        if(error) reject(`ERRO AO ATUALIZAR PEDIDO: ${error}`)
        else resolve(`Pedido atualizado`)
    })
  })
};

Pedido.prototype.ViewPedidos = function (){
  let query = 'SELECT * FROM pedidos'

  return new Promise((resolve,reject)=> {
    pool.query(query,(error)=>{
      if(error) reject('ERRO NA LEITURA DOS DADOS')
      else resolve('A leitura foi concluida')
    })
  })
}



module.exports = Pedido