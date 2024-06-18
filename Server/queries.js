
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
    }
}