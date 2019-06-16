var express = require('express');
var router = express.Router();


router.get('/loainuochoa/', function(req, res, next) {
    res.render("product_type");
});

module.exports = router;