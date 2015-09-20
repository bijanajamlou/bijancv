# grunt-licensechecker

> This plugin will test if licenses in your project are in a list of acceptable licenses. If it is not you can output the list of 
unacceptable licenses to the screen as a warning and/or output to a file of your choice.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-licensechecker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-licensechecker');
```

## The "licensechecker" task

### Overview
In your project's Gruntfile, add a section named `licensechecker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  licensechecker: {
    options: {
      warn: true,
      outFile: null,
      acceptable: [ 'MIT', 'MIT/X11', 'BSD', 'ISC' ] 
    }
  },
});
```

### Options

#### options.warn
Type: `Boolean`
Default value: `false`

If this is set to true then you'll receive a warning while grunt is running stating that there is a license that is not in the list of acceptable
licenses.

#### options.outFile
Type: `String`
Default value: `null`

If `outFile` is passed then a markdown formatted file will be output which shows all licenses which do not match the acceptable licenses and also lists libraries which do not have a license. If `null` is passed or this is left blank no file will be output.

#### options.acceptable
Type: `Array{String}`

You must pass an array of acceptable licenses for instance `[ 'MIT', 'BSD', 'ISC' ]`.


#### options.include
Type: `Array{String}|String`
Default value: `'all'`

The types of dependencies to include, such as: `['dependencies', 'devDependencies', 'peerDependencies']`.


### Usage Examples

#### To Screen
In this example licenses which are are not `[ 'MIT', 'MIT/X11', 'BSD', 'ISC' ]` will be output to screen.

The license checked will only be for dependencies.

```js
grunt.initConfig({
  licensechecker: {
    options: {
      warn: true,
      outFile: null,
      acceptable: [ 'MIT', 'MIT/X11', 'BSD', 'ISC' ],
      include: 'dependencies' 
    }
  }
});
```

#### To Markdown File
In this example libraries which are not acceptable and libraries which do not have a license defined in the `package.json`
are output to a file called `LICENSE.md`.

```js
grunt.initConfig({
  licensechecker: {
    options: {
      outFile: 'LICENSE.md',
      acceptable: [ 'MIT', 'MIT/X11', 'BSD', 'ISC' ] 
    }
  }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
