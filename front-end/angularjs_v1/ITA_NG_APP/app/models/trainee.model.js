var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Schema
 */
var TraineeSchema = new Schema({
    domainId    : String,
    name        : String,
    englishName : String,
    major       : String,
    gender      : String,
    teacher     : String
});

mongoose.model('Trainee', TraineeSchema);