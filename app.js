const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use("/public", express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var connection = require('./db_connect');

app.get('/', (req, res) => {
  const allTasks = connection.query('select * from tasks', function(err, result){
    res.render('index', {allTasks: result});
  })
});

app.post('/', (req, res) => {
  const task = req.body;
  const response = connection.query('insert into tasks set ?', task, function(err, result){
    if(err){
      console.error(err);
      return
    }
    res.redirect('/');
  });
});

app.get('/delete/:id', (req, res) => {
  const taskId = {id: req.params.id};
  const sql = 'delete from tasks where id = ?';
  connection.query(sql, taskId.id, (err, result) => {
  if (err){
    return console.error(error.message);
  };
  res.redirect('/');
});
});

app.listen(3000, () => {
  console.log('Server open on 3000');
});

