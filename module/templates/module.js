(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('<%= moduleName %>', {
            url: '/<%= moduleName %>',
            controller: '<%= moduleName %>Controller as model',
            templateUrl: '<%= moduleName %>/<%= moduleName %>.tpl.html'
        });
    });

    module.controller('<%= moduleName %>Controller', function () {
      var model = this;

      init();

      function init() {
      }
    });

}(angular.module("<%= projectName %>.<%= moduleName %>", [
    'ui.router'
])));
