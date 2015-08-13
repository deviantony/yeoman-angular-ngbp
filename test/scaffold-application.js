var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');
var _ = require('lodash');

describe('AngularJS project generation', function () {
  beforeEach(function (done) {
    this.answers = {
      "author": "testAuthor"
    };

    helpers.run(path.join(__dirname, '../app'))
      .withArguments(['testProject'])
      .withPrompts(this.answers)
      .on('end', done);
    this.projectName = _.camelCase('testProject');
    this.author = "testAuthor";
  });

  it('creates expected files', function () {
    assert.file([
      'package.json',
      '.gitignore',
      '.bowerrc',
      'bower.json',
      'src/index.html',
      'src/README.md',
      'src/app/README.md',
      'src/assets/README.md',
      'src/common/README.md',
      'src/less/README.md',
      'src/app/home/home.js',
      'src/app/home/home.spec.js',
      'src/app/home/home.less',
      'src/app/home/home.tpl.html',
      'src/app/home/README.md',
    ]);
  });

  it('fills package.json with correct information', function () {
    var content = [
      ['package.json', new RegExp('"author": "' + this.author + '"')],
      ['package.json', new RegExp('"name": "' + this.projectName + '"')]
    ];
    assert.fileContent(content);
  });

  it('fills bower.json with correct information', function () {
    assert.fileContent('bower.json', new RegExp('"name": "' + this.projectName + '"'));
  });

  it('fills src/index.html with correct information', function () {
    assert.fileContent('src/index.html', new RegExp('ng-app="' + this.projectName + '"'));
  });

});
