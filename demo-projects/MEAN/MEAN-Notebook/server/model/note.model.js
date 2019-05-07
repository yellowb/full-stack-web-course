var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
    content : String,
    lastUpdateTime: Date
});

// Indexes
NoteSchema.index({lastUpdateTime: 1});

// Auto update last update time
NoteSchema.pre('update', function () {
    this.update({}, {$set: {lastUpdateTime: new Date()}});
});
NoteSchema.pre('save', function (next) {
    var doc = this;
    doc.lastUpdateTime = new Date();
    next();
});

mongoose.model('Note', NoteSchema);