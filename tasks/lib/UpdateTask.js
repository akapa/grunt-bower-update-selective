'use strict';

var bower = require('bower').commands;
var grunt = require('grunt')

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

    bower.update(options.update)
        .on('end', function(updated) {
            grunt.log.ok(updated);
        });
};

module.exports = UpdateTask;
