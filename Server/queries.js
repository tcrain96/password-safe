
module.exports = {
    getAccounts: function (app, db){
        app.get("/",(req, res)=>{
            const sql = "SELECT * FROM account";
            db.query(sql,(err,data)=>{
                if(err) return res.json(err);
                return res.json(data);
            })
        })
    }
}