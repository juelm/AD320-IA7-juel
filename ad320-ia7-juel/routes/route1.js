var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Heeeeelp!!!!');
  res.sendFile("http://localhost:3000/redDiv.html");
});

module.exports = router;
    