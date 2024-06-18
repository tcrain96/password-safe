const express = require("express");
const cors = require("cors");
var db = require('./db');
var queries = require("./queries")
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());

queries.getAccounts(app,db);
queries.createAccount(app,db);

app.listen(process.env.PORT, ()=>{
    console.log("listening");
})