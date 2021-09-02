const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


let port = 3030;
if (process.env.SERVER_PORT != undefined) {
  
    port = process.env.SERVER
}

const mongoose = require('mongoose');
require('./account.model.js')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/account',{useNewUrlParser:true});

let db = mongoose.connection;

db.on('error',console.error.bind(console, "MongoDB Connection Error:Connection was unsuccessful"))

let accountDB = db.collection("accounts");

const account = require('./account.route.js');

app.use('/account',account);

app.listen(port,() =>{

  console.log('Server is up and running on port number'+port);
  console.log(

    accountDB != null ?
    accountDB.name + "database found":
    accountDB.name + "database not found"
  );
  
});