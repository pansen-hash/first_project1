var express = require('express');
var router = express.Router();
var db = require('./../app')

/* GET home page. */
router.get('/admin_govern', function(req, res, next) {
    var mysqlQuery = 'SELECT *FROM tab_admin'
    db.DBConnection.query(mysqlQuery, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return
        }

        res.render('admin_govern', { data: rows });
    });

});
router.post('/admin_govern', function(req, res, next) {
    var mysqlParams = [req.body.admin_id,
        req.body.username,
        req.body.password,
        req.body.email
    ];
    var mysqlQuery_add = 'INSERT INTO tab_admin(admin_id,username,password,email) values(?,?,?,?)'
    db.DBConnection.query(mysqlQuery_add, mysqlParams, function(err, rows, fields) {
        if (err) {
            console.log(err)
            return;
        }
        res.redirect('/admin_govern')
    })
})
module.exports = router;