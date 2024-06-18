const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Kallooer2@",
    database:"passwordmanager"
})

db.connect((error)=>{
    if(error){
    console.error('Error connecting to MySQL database:', error);
    }else{
    console.log('Connected to MySQL database!');
    }
});

app.get("/",(re,res)=>{
    return res.json("From backend Side");
});

app.get("/accounts",(req, res)=>{
    const sql = "SELECT * FROM account";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening");
})