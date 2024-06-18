
module.exports = {
    getAccounts: function (app, db){
        app.get("/",(req, res)=>{
            const sql = "SELECT * FROM account";
            db.query(sql,(err,data)=>{
                if(err) return res.json(err);
                return res.json(data);
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
    }
}