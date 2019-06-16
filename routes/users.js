var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('sắp hiểu rồi');
});

module.exports = router;
