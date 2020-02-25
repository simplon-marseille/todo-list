const mysql = require('mysql');

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'Tasks',
//     port     : 3306
// });


var connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'bcba88e7c81f87',
    password : 'cab54a60',
    database : 'heroku_637454c6ef1fbb9',
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
