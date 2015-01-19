# grunt-bower-update-selective

> Grunt plugin for bower update of select components

## Uses
This plugin runs bower update for select components, useful for regularly updated privately hosted bower components. Specify a list of components and this task will run bower update for just those components. 

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bower-update-selective --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-update-selective');
```

## The "bower-update-selective" task

### Overview
In your project's Gruntfile, add a section named `bower_update_selective` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'bower-update-selective': {
    options: {
      // components you want to update go here.
      update: [
        'component1', 
        'component2'
      ]
    },
    // required for grunt to correctly run task
    files: []
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0 - Initial release
