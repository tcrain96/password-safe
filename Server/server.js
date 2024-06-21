const express = require("express");
const cors = require("cors");
var db = require('./db');
var queries = require("./queries")
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors({}));

//User Queries
queries.register(app,db);
queries.login(app,db);

//Account Queries
queries.getAccounts(app,db);
queries.createAccount(app,db);
queries.updateAccount(app,db);
queries.deleteAccount(app,db);

app.listen(PORT, ()=>{
    console.log("listening");
})