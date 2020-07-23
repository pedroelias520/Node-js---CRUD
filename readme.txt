Como funciona uma aplicação Node.js - MVC
Em tese uma aplicação em Node usa alguns parâmetros 

Model
Routes
Controller
View

Model 
É a parte da aplicação onde se encontram as funções básicas do aplicativo,pelo oque o nome já cita, é um modelo,
Nele se encontra funções como criar,ler,atualizar e deletar conteúdos.

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

Routes
São uma espécie de forma de entrada para se acessar os métodos de interação 

	router.post('/carro', ctrlCar.inserirCarro);

Controller 
São uma ponte entre a interface e os métodos,geralmente é nele onde se organizam os dados, pegando dos textfields para colocar no parâmetros.

	exports.inserirCarro = (req, res) => {
	    let placa = req.body.txt_placa.toUpperCase();
	    let modelo = req.body.txt_modelo;
	    let cor =  req.body.txt_cor;
	    let combus = req.body.txt_comb;
    
	    car.addNewCar(placa, modelo, cor, combus)
	        .then((result) => {
	            console.log(result);
	            res.render('pages/insertCar');
           
	            })
	        .catch(err => {
	            console.log(err);
	        });
	};

 
Views 
São as amostragens dos dados 