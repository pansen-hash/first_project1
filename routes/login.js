var express = require('express');
var router = express.Router();
var db = require('./../app')


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.post('/', (req, res) => {
    let input_email = req.body.email;
    let input_pass = req.body.password;
    var mysqlQuery_admin = "SELECT * FROM tab_admin WHERE email = '" + input_email + "' ";
    db.DBConnection.query(mysqlQuery_admin, function(err, rows_admin, fields) {
        if (err) {
            console.log(err);
            return
        }
        if (rows_admin.length == 0) {
            var mysqlQuery_user = "SELECT * FROM tab_user WHERE email = '" + input_email + "' ";
            db.DBConnection.query(mysqlQuery_user, (err, rows_user, fields) => {
                if (err) {
                    console.log(err);
                    return
                }
                if (rows_user[0].email == input_email && rows_user[0].password == input_pass) {
                    res.redirect('/index')
                } else {

                    res.redirect('/send')
                }
            })
        } else if (rows_admin.length != 0 && rows_admin[0].email == input_email && rows_admin[0].password == input_pass) {
            res.redirect('/admin')
        } else {
            res.redirect('/send')
        }
    });






});



module.exports = router;