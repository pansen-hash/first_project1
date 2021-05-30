var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin_user', function(req, res, next) {
    res.render('admin_user');
});

module.exports = router;