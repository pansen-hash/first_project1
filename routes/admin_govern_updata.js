var express = require('express');
var router = express.Router();
var db = require('../app')





router.get('/admin_govern_updata/:admin_id', function(req, res) {
    var id = req.params.admin_id;
    var mysqlQuery = "select * from tab_admin where admin_id=" + id
    db.DBConnection.query(mysqlQuery, function(err, rows, fields) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("admin_govern_updata", { datas: rows }); //直接跳转
        }
    });
});

router.post('/admin_govern_updata', function(req, res) {
    var updata_id = req.body.admin_id;
    var updata_name = req.body.username;
    var updata_password = req.body.password;
    var updata_email = req.body.email;
    var mysqlQuery = "update tab_admin set username='" + updata_name + "',password='" + updata_password + "',email='" + updata_email + "'where admin_id=" + updata_id
    db.DBConnection.query(mysqlQuery, function(err, rows, fields) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/admin_govern');
        }
    });
});




module.exports = router;