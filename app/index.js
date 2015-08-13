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
      this.templatePath('bower.json'),
      this.destinationPath('bower.json'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/README.md'),
      this.destinationPath('src/README.md'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/app/app.js'),
      this.destinationPath('src/app/app.js'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/app/app.spec.js'),
      this.destinationPath('src/app/app.spec.js'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/app/README.md'),
      this.destinationPath('src/app/README.md'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/app/home/README.md'),
      this.destinationPath('src/app/home/README.md'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/app/home/home.tpl.html'),
      this.destinationPath('src/app/home/home.tpl.html'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/app/home/home.js'),
      this.destinationPath('src/app/home/home.js'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('src/app/home/home.spec.js'),
      this.destinationPath('src/app/home/home.spec.js'),
      context
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('.bowerrc'),
      this.destinationPath('.bowerrc')
    );

    this.fs.copy(
      this.templatePath('src/assets/README.md'),
      this.destinationPath('src/assets/README.md')
    );

    this.fs.copy(
      this.templatePath('src/common/README.md'),
      this.destinationPath('src/common/README.md')
    );

    this.fs.copy(
      this.templatePath('src/less/README.md'),
      this.destinationPath('src/less/README.md')
    );

    this.fs.copy(
      this.templatePath('src/app/home/home.less'),
      this.destinationPath('src/app/home/home.less')
    );

    this.fs.copy(
      this.templatePath('karma/karma-unit.tpl.js'),
      this.destinationPath('karma/karma-unit.tpl.js')
    );

  }

});
