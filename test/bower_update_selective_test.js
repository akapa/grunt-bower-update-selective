'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var rewire = require('rewire');
var grunt = require('grunt');
var bower = require('bower');

var UpdateTask = rewire('../tasks/lib/UpdateTask.js');

chai.should();
chai.use(sinonChai);

describe('UpdateTask', function() {
  var mockBower;
  var createMockTask;
  var mockTask;
  var task;

  createMockTask = function(components, done) {
    return {
      _taskOptions: {
        update: components
      },
      options: function() {
        return this._taskOptions;
      },
      async: function() {
        return done;
      }
    };
  };

  beforeEach(function() {
    mockBower = sinon.stub(bower.commands, 'update');

    UpdateTask.__set__('bower', mockBower);
  });

  afterEach(function() {
    mockTask = null;
    bower.commands.update.restore();
  });

  it('should be registered with grunt', function() {
    UpdateTask.registerWithGrunt.should.exist();

    UpdateTask.registerWithGrunt(grunt);
    grunt.task._tasks[UpdateTask.TASK_NAME].should.exist();
  });

  it('should pass error with no components specified', function() {
    mockTask = createMockTask(null);

    task = new UpdateTask(mockTask);
    task.run();

    mockBower.should.not.have.been.called;
  });

  it('should call bower with component specified', function() {
    mockTask = createMockTask(['component1']);

    task = new UpdateTask(mockTask);
    task.run();

    mockBower.should.have.been.calledWith(['component1']);
  });

  it('should call bower with multiple components specified', function() {
    mockTask = createMockTask(['component1, component2']);

    task = new UpdateTask(mockTask);
    task.run();

    mockBower.should.have.been.calledWith(['component1', 'component2']);
  });
});
