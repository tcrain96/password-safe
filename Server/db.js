const mysql = require("mysql");
require('dotenv').config()

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.PASSWORD,
    database:process.env.DATABASE_URL
})

connection.connect((error)=>{
    if(error){
    console.error('Error connecting to MySQL database:', error);
    }else{
    console.log('Connected to MySQL database!');
    }
});

module.exports = connection;