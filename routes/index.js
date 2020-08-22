

var express = require('express');
var router = express.Router();

//引入公用变量
var publicPath = require("./router-variables").publicPath;

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index');
  res.sendfile(publicPath + '/home.html');
});

module.exports = router;
