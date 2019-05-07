/**
 * Created by yellowb on 2017/7/30.
 */

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to mongodb
mongoose.connect(
    'mongodb://localhost:27017/test',
    {useMongoClient: true}
).then(function (db) {
    console.log('DB connected!');
}).catch(function (err) {
    console.log('DB connect failed!');
    console.log(err.stack);
});

var studentSchema = require('./schema/Student');
var studentModel = mongoose.model('Student', studentSchema);

var student = new studentModel({
    name: 'Tom',
    age: 10,
    school: {
        address: 'USA',
        phone: '911',
        fee: 9000
    }
});

// Insert the student !
// Note that the middlewares will be invoked !
student.save(function (err, doc) {
    if (err) return console.error(err);
    else console.log(doc.toJSON());
});