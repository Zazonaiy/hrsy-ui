var express = require('express');
var router = express.Router();

//
var publicPath = require("./router-variables").publicPath;

/* GET login page. */
router.get('/', function(req, res, next) {
  //res.render('index');
  res.sendfile(publicPath + '/login.html');
});

module.exports = router;
