const mysql = require('mysql')

class CarroDB {
    //Realiza a conexão com o DB mysql

        static connect(){
            const connection = mysql.createConnection({
                host:"localhost",
                user:"root",
                password:" ",
                database: "auto"

            })
            connection.connect()
            return connection
            

        }
        //Realiza uma consulta no BD
        static getCarros(callback){
            let connection = CarroDB.connect()
            let sql = "select * from carro"
            let query = connection.query(sql, function(err,results.fields){
                if(err) throw err
                callback(results)
            })
            console.log(query.sql)
            connection.end()

        }
        //Salvar no BD
        //Salva dados no banco
        static save(carro, callback){
            const connection = CarroDB.connect()
            let sql = "insert into carro set ?"
            ler query = connection.query(sql, carro, function(err,results,fields){
                if(err) throw err
                carro.id = results.insertId
              //Retorna pela função callback
              callback(carro)
            })
            console.log(query.sql)
            connection.end()
        }
        //Atualiza registro do banco de dados
        static update(carro, callback){
            const connection = CarroDB.connect()
            let sql = "update carro set ? where id = ?"
            let id = carro.id
            let query = connection.query(sql,[carro,id], function(err,results,fields){
                if(err) throw err
                callback(carro)
            })
            console.log(query.sql)
            connection.end()
        }
        //Apagar registro
        static delete(carro,callback){
            let sql = "delete from carro where id = ?"
            let id = carro.id
            let query = connection.query(sql, id, function(err,results,fields){
                if(err) throw err
                callback(carro)
            })
            console.log(query.sql)
            connection.end()
        }
        //Apagar registro pelo ID
        static delete(id,callback){
            let sql = "delete from carro where id = ?"
            let query = connection.query(sql, id, function(err,results,fields){
                if(err) throw err
                callback(carro)
            })
            console.log(query.sql)
            connection.end()

}
