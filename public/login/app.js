angular.module("stillpointMassage", ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "home.html"
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })
      .state('services', {
        url: '/services',
        templateUrl: 'templates/services.html'
      })
      .state('practitioners', {
        url: '/practitioners',
        templateUrl: 'templates/practitioners.html'
      })
      .state('practice', {
        url: '/practice',
        templateUrl: 'templates/practice.html'
      })
      .state('apprate', {
        url: '/apprate',
        templateUrl: 'templates/apprate.html'
      })
      .state('testimonials', {
        url: '/testimonials',
        templateUrl: 'templates/testimonials.html'
      });
      $urlRouterProvider
        .otherwise('/');
  });
