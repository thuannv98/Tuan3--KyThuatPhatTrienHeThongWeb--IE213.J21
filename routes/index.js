var express = require('express');
var csdl = require('../xulydulieu/xulysanpham.js')
var router = express.Router();
 
/* GET home page. */
router.get('/', async function(req, res, next) {
  //var spmoi = await csdl.soluongsp("select count(id) as num from products where");

  await csdl.XuLyMuaHang(req);
  var giohang= await csdl.HienThiGioHang(req.session.giohang);

  var numsphot = await csdl.soluongsp("select count(id) as num from products");
  var spmoi = await csdl.dssp(4, 1);
  var sphot = await csdl.dssp(8, 2);
  res.render('index', {count1: 10, count2: numsphot, spmoi: spmoi, sphot: sphot,hienthigiohang:giohang});
});

module.exports = router;
