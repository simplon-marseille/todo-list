const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Tasks',
    port     : 3306
});

connection.connect((err) => {
  if(err){
    console.log(err.code);
    console.log(err.fatal);
  }else{
    console.log('connecté');
  };
});

module.exports = connection
