var express = require('express');
var router = express.Router();
var db = require('./../app')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});
router.post('/', function(req, res, next) {
    var mysqlParams = [req.body.username,
        req.body.password,
        req.body.email
    ];
    var mysqlQuery = 'INSERT tab_user(username,password,email) VALUES(?,?,?)'
    db.DBConnection.query(mysqlQuery, mysqlParams, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        var success = {
            success: "注册成功"
        }
        res.send(success);
    });
});

module.exports = router;