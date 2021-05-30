var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin_publish', function(req, res, next) {
    res.render('admin_publish');
});

module.exports = router;