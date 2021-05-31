var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/send', function(req, res, next) {
    res.render('send');
});

module.exports = router;