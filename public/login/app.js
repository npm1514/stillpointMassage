angular.module("personalView", ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
      .state("profile", {
        url: "/",
        controller: "profileCtrl",
        templateUrl: "./pages/profile.html"
      })
      .state('calendar', {
        url: '/calendar',
        controller: 'calendarCtrl',
        templateUrl: './pages/calendar.html'
      })
      .state('pay', {
        url: '/pay',
        controller: 'payCtrl',
        templateUrl: './pages/pay.html'
      })
      .state('review', {
        url: '/review',
        controller: 'reviewCtrl',
        templateUrl: './pages/review.html'
      })
      .state('editusers', {
        url: '/editusers',
        controller: 'editusersCtrl',
        templateUrl: './pages/editusers.html'
      })
      .state('confirm', {
        url: '/confirm',
        controller: 'confirmCtrl',
        templateUrl: './pages/confirm.html'
      });
      $urlRouterProvider
        .otherwise('/');
  }).controller("mainCtrl", function($scope){
});
