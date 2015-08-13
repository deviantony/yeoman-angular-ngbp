(function(app) {

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  });

  app.run(function () {});

  app.controller('AppController', function ($scope) {

  });

}(angular.module("<%= projectName %>", [
  'templates-app',
  'templates-common',
  '<%= projectName %>.home',
  'ui.router'
])));
