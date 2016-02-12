angular.module("stillpointMassage").controller("practitionersCtrl", function($scope, userService) {

  $scope.loggedin = false;
  $scope.user = {};


  $(document).ready(function(){
    $('.about1').on('click', function(){
      $('.description1').slideToggle();
    });
    $('.about2').on('click', function(){
      $('.description2').slideToggle();
    });
    $('.about3').on('click', function(){
      $('.description3').slideToggle();
    });
    $('.about4').on('click', function(){
      $('.description4').slideToggle();
    });
    $('.about5').on('click', function(){
      $('.description5').slideToggle();
    });
    $('.about6').on('click', function(){
      $('.description6').slideToggle();
    });
    $('.about7').on('click', function(){
      $('.description7').slideToggle();
    });
    $('.about8').on('click', function(){
      $('.description8').slideToggle();
    });
  });
});
