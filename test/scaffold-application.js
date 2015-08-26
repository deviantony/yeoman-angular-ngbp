var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');
var _ = require('lodash');

var projectName = _.camelCase('testProject');
var author = "testAuthor";
var answers = {
  "author": "testAuthor"
};

describe('AngularJS project generation', function () {
  beforeEach(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withArguments(['testProject'])
      .withPrompts(answers)
      .on('end', done);
  });

  it('creates expected files', function () {
    assert.file([
      'package.json',
      '.gitignore',
      '.bowerrc',
      'bower.json',
      'build-config.js',
      'Gruntfile.js',
      'src/index.html',
      'src/README.md',
      'src/app/app.js',
      'src/app/app.spec.js',
      'src/app/README.md',
      'src/assets/README.md',
      'src/common/README.md',
      'src/less/README.md',
      'src/app/home/home.js',
      'src/app/home/home.spec.js',
      'src/app/home/home.less',
      'src/app/home/home.tpl.html',
      'src/app/home/README.md',
      'karma/karma-unit.tpl.js'
    ]);
  });

  it('fills package.json with correct information', function () {
    var content = [
      ['package.json', new RegExp('"author": "' + author + '"')],
      ['package.json', new RegExp('"name": "' + projectName + '"')]
    ];
    assert.fileContent(content);
  });

  it('fills bower.json with correct information', function () {
    assert.fileContent('bower.json', new RegExp('"name": "' + projectName + '"'));
  });

  it('fills src/index.html with correct information', function () {
    assert.fileContent('src/index.html', new RegExp('ng-app="' + projectName + '"'));
  });

  it('fills src/app/app.js with correct information', function () {
    var content = [
      ['src/app/app.js', new RegExp('angular.module\\\("' + projectName + '",')],
      ['src/app/app.js', new RegExp(projectName + '.home')]
    ];
    assert.fileContent(content);
  });

  it('fills src/app.spec.js with correct information', function () {
    assert.fileContent('src/app/app.spec.js', new RegExp('beforeEach\\\(module\\\("' + projectName + '"\\\)\\\);'));
  });
});

describe('AngularJS project generation with Restangular support', function () {
  beforeEach(function (done) {

    helpers.run(path.join(__dirname, '../app'))
      .withArguments(['testRestangularProject'])
      .withOptions({restangular: true})
      .withPrompts(answers)
      .on('end', done);
  });

  it('adds Restangular package to bower.json', function () {
    assert.fileContent('bower.json', new RegExp('"restangular": "'));
  });
});
