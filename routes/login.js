var express = require('express');
var router = express.Router();
var db = require('./../app')


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.post('/', (req, res) => {
    let email = req.body.email;
    let pass = req.body.password;
    var mysqlQuery = "SELECT * FROM tab_user WHERE email = '" + email + "'"

    db.DBConnection.query(mysqlQuery, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return
        }
        if (rows[0].email != undefined && email == rows[0].email && pass == rows[0].password) {
            res.send('success')
        } else {
            res.send('defeat')
        }

    })
})


module.exports = router;