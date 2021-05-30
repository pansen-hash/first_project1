var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin_img', function(req, res, next) {
    res.render('admin_img');
});

module.exports = router;