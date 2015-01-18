/*
 * grunt-bower-update-selective
 * https://github.com/d3spis3d/grunt-bower-update-selective
 *
 * Copyright (c) 2015 Daniel Budden
 * Licensed under the MIT license.
 */

 var bower = require('bower');

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('bower-update-selective', 'Grunt plugin for bower update of select components', function() {

    console.log(this.options.update);

    if (!this.components || !this.components.update) {
      grunt.log.warn('No components supplied for update.');
      return false;
    }

    bower.update(this.components.update)
    .on('end', function(updated) {
      grunt.log.ok(updated);
    })
    .on('error', function(error) {
      grunt.log.warn(error);
    });

  });

};
