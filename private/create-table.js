const mysql =  require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user:'root',
    password:'123',
    database:'NodeGit'
})

connection.connect(function(err){
    if(err) return console.log(err)
    createTable(connection)
})

function createTable(conn){

    const sql =     "CREATE TABLE IF NOT EXITS Lembrete (\n"+
                    "ID int NOT NULL AUTO_INCREMENT, \n"+
                    "Nome varchar(250) NOT NULL,\n"+
                    "Hora varchar(250) NOT NULL,\n"+
                    "PRIMARY KEY (ID)\n"+
                    ");";
    conn.query(sql,function(error,results,fields){
        if(error) return console.log(error);
        console.log('Criou a tabela');
    })  
}