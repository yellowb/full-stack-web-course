'use strict';

var mongoose = require('mongoose');
require('../model/note.model');
var NoteModel = mongoose.model('Note');

var noteController = {};

/**
 * Get all notes from mongoDB
 * @param req
 * @param res
 */
noteController.getAllNotes = function (req, res) {
    NoteModel.find({}, function(err, docs){
        if (err) {
            console.error(err);
        }
        res.json(docs);
        //console.log(docs);
    })
}

/**
 * Insert a note into mongoDB
 * @param req
 * @param res
 */
noteController.insertNote = function (req, res) {
    NoteModel.create(req.body, function (err, doc) {
        if (err) {
            console.error(err);
        }
        res.json(doc);
        //console.log(doc);
    });
}

/**
 * Update a note
 * @param req
 * @param res
 */
noteController.updateNote = function (req, res) {
    NoteModel.update({'_id': req.body._id}, {
        content: req.body.content
    }, function (err, doc) {
        if (err) {
            console.error(err);
            res.json(err);
        }
        else {
            // Return the latest object.
            NoteModel.findOne({'_id': req.body._id}, function(err, doc){
                if (err){
                    console.error(err);
                    res.json(err);
                }
                else {
                    res.json(doc);
                    //console.log(doc);
                }
            });
        }
    });
}

/**
 * Update a note
 * @param req
 * @param res
 */
noteController.deleteNote = function (req, res) {
    NoteModel.remove({'_id': req.params._id}, function (err, result) {
        if (err) {
            console.error(err);
        }
        res.json(result);
        //console.log(result);
    });
}

// Export the interfaces
module.exports = noteController;
