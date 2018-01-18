var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cinema = require('../models/Cinema.js');

/* GET ALL CINEMA */
router.get('/', function(req, res, next) {
  Cinema.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CINEMA BY ID */
router.get('/:id', function(req, res, next) {
  Cinema.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CINEMA */
router.post('/', function(req, res, next) {
  Cinema.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CINEMA */
router.put('/:id', function(req, res, next) {
  Cinema.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CINEMA */
router.delete('/:id', function(req, res, next) {
  Cinema.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
