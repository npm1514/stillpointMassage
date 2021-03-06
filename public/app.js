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
        controller: 'practitionersCtrl',
        templateUrl: './pages/practitioners.html'
      })
      .state('practice', {
        url: '/practice',
        controller: 'practiceCtrl',
        templateUrl: './pages/practice.html'
      })
      .state('apprate', {
        url: '/apprate',
        controller: 'apprateCtrl',
        templateUrl: './pages/apprate.html'
      })
      .state('testimonials', {
        url: '/testimonials',
        templateUrl: './pages/testimonials.html'
      })
      .state('login', {
        url: '/login',
        controller: 'loginCtrl',
        templateUrl: './pages/login.html'
      })
      .state('contact', {
        url: '/contact',
        controller: 'contactCtrl',
        templateUrl: './pages/contact.html'
      });
      $urlRouterProvider
        .otherwise('/');
  });

  $(document).ready(function(){

    $('i').on('click', function(){
      $('.nav').slideToggle();
    });
  });
