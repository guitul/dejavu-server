var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Category = require('../models/category');

var categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

categoryRouter.route('/')
.get(function(req, res, next) {
    Category.find({}, function (err, categorys) {
        if (err) throw err;
        res.json(categorys);
    });
})

.post(function(req, res, next) {
    Category.create(req.body, function (err, category) {
        if (err) throw err;
        res.json(category);
    });
})

.delete(function(req, res, next) {
    Category.remove({}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

categoryRouter.route('/:id')
.get(function(req, res, next) {
    Category.findById(req.params.id, function (err, category) {
        if (err) throw err;
        res.json(category);
    });
})

.put(function(req, res, next) {
    Category.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {
        new: true
    }, function (err, category) {
        if (err) throw err;
        res.json(category);
    });
})

.delete(function(req, res, next) {
    Category.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = categoryRouter;