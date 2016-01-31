angular.module("stillpointMassage", ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "home.html"
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      });
      $urlRouterProvider
        .otherwise('/sell');
  });
  