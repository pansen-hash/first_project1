var express = require('express');
var router = express.Router();
var db = require('./../app')

router.post('/admin_govern_search', function(req, res, next) {

    var search = req.body.username
    console.log(search)
    var mysqlQuery = "SELECT * FROM tab_admin WHERE username = '" + search + "' ";
    console.log(mysqlQuery)
    db.DBConnection.query(mysqlQuery, function(err, rows, fields) {
        if (err) {
            console.log(err);
            return
        }

        res.render('admin_govern_search', { data: rows });
    });
});


module.exports = router;