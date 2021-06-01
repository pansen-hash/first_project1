var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin_govern', function(req, res, next) {
    res.render('admin_govern');
});

module.exports = router;