angular.module("personalView", ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
      .state("profile", {
        url: "/",
        templateUrl: "./pages/profile.html"
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: './pages/calendar.html'
      })
      .state('pay', {
        url: '/pay',
        templateUrl: './pages/pay.html'
      })
      .state('review', {
        url: '/review',
        templateUrl: './pages/review.html'
      })
      .state('confirm', {
        url: '/confirm',
        templateUrl: './pages/confirm.html'
      });
      $urlRouterProvider
        .otherwise('/');
  })
  .controller("mainCtrl", function($scope){
  });
