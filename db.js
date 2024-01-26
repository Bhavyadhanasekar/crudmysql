const mysql =require('mysql2/promise')
//const { createConnection } = require('mysql2/typings/mysql/lib/Connection')


const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Doitnow',
    database:'employe_db'
})

module.exports=mysqlPool