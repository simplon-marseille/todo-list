const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');
const port = process.env.PORT || 3000;

app.use("/public", express.static('public'))
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');



var connection = require('./db_connect');

app.get('/', (req, res) => {
  const allTasks = connection.query('select * from tasks', function(err, result){
    res.render('index', {allTasks: result});
  })
});


app.post('/send', (req, res) => {
  console.log('hello from back-end');
  const task = {name: req.body.t, date: req.body.d}
  console.log(task);
  const response = connection.query(`insert into tasks set ?`, task, function(err, result){
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

app.listen(port, () => {
  console.log('Server open on 3000');
});

