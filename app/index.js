var generators = require('yeoman-generator');
var path = require('path');
var _ = require('lodash')

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('projectName', { type: String, required: false });
    this.projectName = this.projectName || path.basename(process.cwd());
    this.projectName = _.camelCase(this.projectName);
  }

});
