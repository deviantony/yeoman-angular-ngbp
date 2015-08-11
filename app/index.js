var generators = require('yeoman-generator');
var path = require('path');
var _ = require('lodash')

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('projectName', { type: String, required: false });
    this.projectName = this.projectName || path.basename(process.cwd());
    this.projectName = _.camelCase(this.projectName);
  },

  prompting: function () {
    var done = this.async();

    prompts = [
      {
        type    : 'input',
        name    : 'author',
        message : 'Project author or company name',
        store   : true
      }
    ]

    this.prompt(prompts, function (answers) {
      this.author = answers.author;
      done();
    }.bind(this));
  },

  generation: function() {
    context = {
      projectName: this.projectName,
      author: this.author
    }

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      context
    );
  }

});
