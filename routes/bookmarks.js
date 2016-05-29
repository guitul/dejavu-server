var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Bookmark = require('../models/bookmark');

var bookmarkRouter = express.Router();
bookmarkRouter.use(bodyParser.json());

bookmarkRouter.route('/')
.get(function(req, res, next) {
    Bookmark.find({}).populate('category').exec(function (err, bookmarks) {
        if (err) throw err;
        res.json(bookmarks);
    });
})

.post(function(req, res, next) {
    Bookmark.create(req.body, function (err, bookmark) {
        if (err) throw err;
        res.json(bookmark);
    });
})

.delete(function(req, res, next) {
    Bookmark.remove({}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

bookmarkRouter.route('/:id')
.get(function(req, res, next) {
    Bookmark.findById(req.params.id).populate('category').exec(function (err, bookmark) {
        if (err) throw err;
        res.json(bookmark);
    });
})

.put(function(req, res, next) {
    Bookmark.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, {
        new: true
    }, function (err, bookmark) {
        if (err) throw err;
        res.json(bookmark);
    });
})

.delete(function(req, res, next) {
    Bookmark.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

bookmarkRouter.route('/category/:id')
.get(function(req, res, next) {
    Bookmark.find({}).where('category').equals(req.params.id).populate('category').exec(function (err, bookmark) {
        if (err) throw err;
        res.json(bookmark);
    });
});

module.exports = bookmarkRouter;