var express = require('express');
var router = express.Router();
var path = require('path');
var colors = require('./colors.json');

/* GET users listing. */
router.get('/all', function(req, res, next) {
  //res.send('Heeeeelp!!!!');
  console.log(colors.json);
  res.send(colors.json);
});

module.exports = router;
    