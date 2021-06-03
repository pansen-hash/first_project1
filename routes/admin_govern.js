var express = require('express');
var router = express.Router();
var db = require('./../app')

/* GET home page. */
router.get('/admin_govern', function(req, res, next) {
    var mysqlQuery = 'SELECT *FROM tab_admin ORDER BY admin_id ASC'
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
});
router.get('/admin_govern/del/:admin_id', function(req, res) {
    var id = req.params.admin_id;
    var mysqlQuery_del = "delete from tab_admin where admin_id=" + id
    console.log(id)
    console.log(mysqlQuery_del)
    db.DBConnection.query(mysqlQuery_del, function(err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/admin_govern')
        }
    });
});

module.exports = router;