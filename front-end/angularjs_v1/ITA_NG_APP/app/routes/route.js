'use strict';

/**
 * Module dependencies.
 */
var controller = require('../../app/controllers/controller.js');

module.exports = function(app) {
    app.route('/ita/findAllTrainee')
        .get(controller.findAllTrainee);
};