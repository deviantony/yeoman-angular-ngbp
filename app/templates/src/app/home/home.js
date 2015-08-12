/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 */
(function(module) {

  /**
   * Each section or module of the site can also have its own routes. AngularJS
   * will handle ensuring they are all available at run-time, but splitting it
   * this way makes each module more "self-contained".
   */
    module.config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            controller: 'HomeController as model',
            templateUrl: 'home/home.tpl.html'
        });
    });

    module.controller('HomeController', function () {
      // The top section of a controller should be lean and make it easy to see the "signature" of the controller
      //  at a glance.  All function definitions should be contained lower down.
      var model = this;
      model.someVar = 'blue';
      model.someList = ['one', 'two', 'three'];
      model.someFunctionUsedByTheHomePage = someFunctionUsedByTheHomePage;

      init();

      function init() {
          // A definitive place to put everything that needs to run when the controller starts. Avoid
          //  writing any code outside of this function that executes immediately.
      }

      function someFunctionUsedByTheHomePage() {
          alert('Congratulations');
      }
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("<%= projectName %>.home", [
    'ui.router'
])));
