angular.module("stillpointMassage", ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
      $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./pages/home.html"
      })
      .state('about', {
        url: '/about',
        templateUrl: './pages/about.html'
      })
      .state('services', {
        url: '/services',
        templateUrl: './pages/services.html'
      })
      .state('practitioners', {
        url: '/practitioners',
        templateUrl: './pages/practitioners.html'
      })
      .state('practice', {
        url: '/practice',
        controller: 'practiceCtrl',
        templateUrl: './pages/practice.html'
      })
      .state('apprate', {
        url: '/apprate',
        templateUrl: './pages/apprate.html'
      })
      .state('testimonials', {
        url: '/testimonials',
        templateUrl: './pages/testimonials.html'
      });
      $urlRouterProvider
        .otherwise('/');
  });

  $(document).ready(function(){

    $('.login').on('click', function(){
      $('.loginbox').show();
    });
    $('.exitlogin').on('click', function(){
      $('.loginbox').hide();
    });
    // $('.button1').on('click', function(){
    //   $('.toggle1').slideToggle();
    // });
  });
