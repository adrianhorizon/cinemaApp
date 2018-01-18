var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Theater = require('../models/Theater.js');

/* GET ALL THEATER */
router.get('/', function(req, res, next) {
  Theater.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE THEATER BY ID */
router.get('/:id', function(req, res, next) {
  Theater.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE THEATER */
router.post('/', function(req, res, next) {
  Theater.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE THEATER */
router.put('/:id', function(req, res, next) {
  Theater.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE THEATER */
router.delete('/:id', function(req, res, next) {
  Theater.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
