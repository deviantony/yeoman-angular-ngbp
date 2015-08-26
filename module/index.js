var generators = require('yeoman-generator');
var _ = require('lodash')

module.exports = generators.Base.extend({

  loadPackageDescriptor: function() {
    try {
      var packageDescriptor = require(process.cwd() + '/package.json');
    }
    catch (err) {
      this.env.error("Could not open package.json for reading. Are you in the application root directory?");
    }
    this.projectName = packageDescriptor.name;
  },

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('modName', {
      desc     : 'Name of the module',
      type     : String,
      required : true
    });

    this.moduleName = _.camelCase(this.modName);
    this.modulePath = 'src/app/' + this.moduleName + '/';
  },

  generation: function() {
    context = {
      projectName: this.projectName,
      moduleName: this.moduleName
    }

    this.fs.copyTpl(
      this.templatePath('module.js'),
      this.destinationPath(this.modulePath + this.moduleName + '.js'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('module.spec.js'),
      this.destinationPath(this.modulePath + this.moduleName + '.spec.js'),
      context
    );

    this.fs.copy(
      this.templatePath('module.less'),
      this.destinationPath(this.modulePath + this.moduleName + '.less')
    );

    this.fs.copy(
      this.templatePath('module.tpl.html'),
      this.destinationPath(this.modulePath + this.moduleName + '.tpl.html')
    );
  }
});
