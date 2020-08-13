const conn = require ('../connection');

Carro.prototype.addNewCar = function(placa, modelo, cor, combus){
    this.placa = placa;
    this.modelo = modelo;
    this.cor = cor;
    this.combus = combus;

    let query = `INSERT INTO carros VALUES 
        (default, '${this.placa}', '${this.modelo}', '${this.cor}', '${this.combus}')`;
    
    return new Promise((resolve, reject) => {
        pool.query(query, (err) => {    
            if(err)
               reject(`Erro ao inserir carro: ${err}`);
            else
               resolve(`Inserção OK`);
        });
    });
}