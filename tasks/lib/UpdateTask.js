'use strict';

var bowerUpdate = require('bower').commands.update;
var grunt = require('grunt');

var UpdateTask = function(task) {
    this.task = task;
};

UpdateTask.TASK_NAME = 'bower-update-selective';

UpdateTask.TASK_DESCRIPTION = 'Grunt plugin for bower update of select components';

UpdateTask.registerWithGrunt = function (grunt) {
    grunt.registerMultiTask(UpdateTask.TASK_NAME, UpdateTask.TASK_DESCRIPTION, function() {
        var task = new UpdateTask(this);
        task.run();
    });
};

UpdateTask.prototype.run = function() {
    var options = this.task.options();

    if (!options.update) {
        grunt.log.warn('No components supplied for update.');
        return false;
    }

    var done = this.task.async();

    bowerUpdate(options.update)
    .on('log', function(result) {
        grunt.log.writeln(['bower', result.id.cyan, result.message].join(' '));
    })
    .on('error', function(error) {
        grunt.log.writeln(error);
        done(false);
    })
    .on('end', function(updated) {
        done();
    });

};

module.exports = UpdateTask;
