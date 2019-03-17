var express = require('express');
var router = express.Router();
var path = require('path');
var colors = require('./colors.json');

/* GET users listing. */
router.get('/all', function(req, res, next) {

    res.json(colors["colors"]);
});

router.get('/black', function(req, res, next) {

    res.json(colors["colors"][0]);
});

router.get('/white', function(req, res, next) {

    res.json(colors["colors"][1]);
});

router.get('/red', function(req, res, next) {

    res.json(colors["colors"][2]);
});

router.get('/blue', function(req, res, next) {

    res.json(colors["colors"][3]);
});

router.get('/yellow', function(req, res, next) {

    res.json(colors["colors"][4]);
});


router.get('/green', function(req, res, next) {

    res.json(colors["colors"][5]);
});

module.exports = router;
    