var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var path = require('path');
var fs = require('fs');
var os = require('os');
var _ = require('lodash');

var packageDescriptor = {
  'name' : 'testModule',
}
var moduleName = 'testModule';
var projectName = _.camelCase('testProject');

describe('AngularJS project module generation', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(os.tmpdir(), '/yeoman-temp'), function () {
      var packageJson = JSON.stringify(packageDescriptor);
      fs.writeFileSync(path.join(os.tmpdir(), '/yeoman-temp/package.json'), packageJson);
    });

    helpers.run(path.join(__dirname, '../module'))
      .inDir(path.join(os.tmpdir(), '/yeoman-temp'))
      .withArguments(['testModule'])
      .on('end', done);
  });

  it('creates expected files', function () {
    assert.file([
      'src/app/' + moduleName + '/' + moduleName + '.js',
      'src/app/' + moduleName + '/' + moduleName + '.spec.js',
      'src/app/' + moduleName + '/' + moduleName + '.less',
      'src/app/' + moduleName + '/' + moduleName + '.tpl.html'
    ]);
  });



});
