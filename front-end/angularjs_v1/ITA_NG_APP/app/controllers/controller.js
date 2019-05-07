var mongoose = require('mongoose');
var Trainee = mongoose.model('Trainee');

exports.findAllTrainee = function (req, res, next) {
    var trainees = [{
        domainId: 'NG',
        name: '',
        englishName: '',
        major: '',
        gender: '',
        teacher: ''
    }];

    return res.json(trainees);
};