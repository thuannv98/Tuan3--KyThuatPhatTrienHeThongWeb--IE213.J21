var url = require('url');
var express = require("express");
var router = express.Router();

router.get('/admin', async function(req, res){
	res.render('admin');
});

module.exports = router;