'use strict';



var exec = require('child_process').exec;
var events = require('events').Emitter;
var bower = require('bower');
var grunt = require('grunt');

bower.update = function(components) {
  if (!components) {
    events.emit('error', 'Error: No components for update');
  } else if (components.length === 1) {
    events.emit('end', 'Updated: ' + components[0]);
  } else {
    events.emit('end', 'Updated: ' + components.join(', '));
  }
};

grunt.log.ok = function(message) {
  return message;
};

grunt.log.warn = function(message) {
  return message;
};

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.tests = {
  
  single_component: function(test) {
    test.expect(1);

    exec('grunt bower-update-selective:single_component', function(error, stdout) {
      console.log(stdout);
      test.equals(stdout.indexOf('Updated: component1') > 1, true, 'should update one component');
      test.done();
    });  
  },
  two_components: function(test) {
    test.expect(1);

    exec('grunt bower-update-selective:two_components', function(error, stdout) {
      console.log(stdout);
      test.equals(stdout.indexOf('Updated: component1, component2') > 1, true, 'should update two components');
      test.done();
    });  
  },
  no_components: function(test) {
    test.expect(1);

    exec('grunt bower-update-selective:no_components', function(error, stdout) {
      console.log(stdout);
      test.equals(stdout.indexOf('No components supplied for update.') > 1, true, 'should update no components');
      test.done();
    });  
  }
};
