var express = require('express');
const sqlite3 = require("sqlite3");
var router = express.Router();


/* GET home page. */


router.get('/', (req, res) => {
    const data = req.query;
    console.log(data);
    res.json(data);
});

router.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json(data);
});
module.exports = router;
