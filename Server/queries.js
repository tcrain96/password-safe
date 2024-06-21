require('dotenv').config()
const salt = 10
var jwt = require("jsonwebtoken")
var bcrypt = require("bcrypt")  

module.exports = {
    getAccounts: function (app, db){
        app.get("/",(req, res)=>{
            const sql = "SELECT * FROM account";
            db.query(sql,(err,data)=>{
                if(err) return res.json(err);
                else{
                    return res.json(data);
                }
                
            })
        })
    },
    createAccount: function (app, db){
        app.post("/create",(req, res)=>{
            const sql = "INSERT INTO account(Email,Password,Website) VALUES (?)";
            const values = [
                req.body.email,
                req.body.password,
                req.body.website
            ]
            db.query(sql, [values], (err,data)=>{
                if(err) return res.json(err);
                return res.json(data);
            })
        })
    },
    updateAccount: function (app, db){
        app.put("/update/:id",(req, res)=>{
            const sql = "UPDATE account SET Email = ?, Password = ?, Website = ? WHERE ID = ?";
            const values = [
                req.body.email,
                req.body.password,
                req.body.website
            ]
            const id = req.params.id;
            db.query(sql, [...values,id], (err,data)=>{
                if(err) return res.json(err);
                return res.json(data);
            })
        })
    },
    deleteAccount: function (app, db){
        app.delete("/account/:id",(req, res)=>{
            const sql = "DELETE FROM account WHERE ID = ?";
            const id = req.params.id;
            db.query(sql, [id], (err,data)=>{
                if(err) return res.json(err);
                return res.json(data);
            })
        })
    },
    register:function(app,db){
        app.post("/register",(req, res)=>{
            const sql = "INSERT INTO users(Username,Password) VALUES (?)";
            bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
                if(err) return res.json({Error: "Error for hashing password"});
                const values = [
                    req.body.username,
                    hash
                ]
                db.query(sql, [values], (err,data)=>{
                    if(err) return res.json(err);
                    return res.json(data);
                })
            })
        })
    },
    login:function(app,db){
        app.post("/login",(req, res)=>{
            const sql = "SELECT * FROM users WHERE Username=(?)";
            db.query(sql, [req.body.username], (err,data)=>{
                if(err) return res.json({Error:"Login error in server"});
                if(data.length > 0){
                    bcrypt.compare(req.body.password.toString(), data[0].Password,(err, response)=>{
                        if(err) return res.json({Error: "Password compare error"});
                        if(response){
                            //const email = data[0].email;
                            //const token = jwt.sign({email}, process.env.JWT_KEY, {expiresIn: '1d'});
                            //res.cookie('token',token);
                            return res.json({Status:"Success"});
                        }
                        else{
                            return res.json({Error:"Password not matched"});
                        }
                    })
                }else{
                    return res.json({Error:"No email existed"});
                }
                
            })
        })
    }
}