var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Heeeeelp!!!!');
  res.sendFile('/Users/matt/WebAppDevelopment/AD320-IA7-juel/AD320-IA7-juel/ad320-ia7-juel/public/redDiv.html');
});

module.exports = router;
    