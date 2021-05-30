var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin_message', function(req, res, next) {
    res.render('admin_message');
});

module.exports = router;