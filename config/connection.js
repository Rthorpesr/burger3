const mysql = require('mysql');
const keys  = require('./keys');

const connection = mysql.createConnection(keys.mysql);

connection.connect(function(err)
   {
     if (err) throw err;
     console.log('Connected to database');
   });
 
 
module.exports = connection;