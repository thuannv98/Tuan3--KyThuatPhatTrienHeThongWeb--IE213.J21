var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/productRouter');
//var loainuochoaRouter = require('./routes/loainuochoa');
var admin = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var session = require('express-session');
app.use(session({ secret: "Shh, its a secret!" }));
app.use(indexRouter);
app.use(usersRouter);
app.use(productRouter);
app.use(admin);

//app.use('/loainuochoa/', loainuochoaRouter);
//var url = require('url');
//var csdl = require("./xulydulieu/xulysanpham");
//app.get('/loainuochoa/', async function(req, res) {
//    var q = url.parse(req.url, true).query;
 //   var maloai=q;
 //   var hienthi=await csdl.Loainuochoa();
//    if(q.maloai != undefined)
 //       {maloai=q.maloai;
 //       tenloai=q.name;}
 //   spmoi = await csdl.hienthiloainuochoamoi(maloai);
 //   sphot = await csdl.hienthiloainuochoahot(maloai);    
 //   res.render("product_type",{type:hienthi,spmoi:spmoi,sphot:sphot});
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(8000);
