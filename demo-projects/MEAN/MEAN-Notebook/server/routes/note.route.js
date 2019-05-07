'use strict';
var express = require('express');
var router = express.Router();

var noteController = require('../controller/note.controller');

var urlBase = '/api/notes';

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index');
});

/**
 * Mapping URL: get all notes
 */
router.get(urlBase, function (req, res) {
    noteController.getAllNotes(req, res);
});

/**
 * Mapping URL: insert a note
 */
router.post(urlBase, function (req, res) {
    noteController.insertNote(req, res);
});

/**
 * Mapping URL: update a note
 */
router.put(urlBase, function (req, res) {
    noteController.updateNote(req, res);
});

/**
 * Mapping URL: delete a note by _id
 */
router.delete(urlBase + '/:_id', function (req, res) {
    noteController.deleteNote(req, res);
});

module.exports = router;

