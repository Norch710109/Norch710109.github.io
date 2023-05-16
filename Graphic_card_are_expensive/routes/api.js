var express = require('express');
const sqlite3 = require("sqlite3");
var router = express.Router();


db = new sqlite3.Database("./db.sqlite", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});
router.post('/', (req, res) => {
    const {date, name, price}=req.body;
    sql = "INSERT INTO Graphic (date, name, price) VALUES (?, ?, ?)";
    db.run(sql, [date, name, price], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send(err.message);
        }
        console.log('inserted');
    });
    //res.redirect('/data.html');
    return res.status(200).send('inserted');
})
router.get('/', function(req, res, next) {
    sql= "SELECT * FROM Graphic";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
});
module.exports = router;