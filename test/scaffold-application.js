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
      '.bowerrc'
    ]);
  });

  it('fills package.json with correct information', function () {
    var content = [
      ['package.json', new RegExp('"author": "' + this.author + '"')],
      ['package.json', new RegExp('"name": "' + this.projectName + '"')]
    ];
    assert.fileContent(content);
  });

});
