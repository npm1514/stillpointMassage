angular.module("stillpointMassage").controller("practiceCtrl", function($scope, userService) {

  $scope.loggedin = false;
  $scope.user = {};


  $(document).ready(function(){
    $('.button1').on('click', function(){
      $('.toggle1').slideToggle();
    });
    $('.button2').on('click', function(){
      $('.toggle2').slideToggle();
    });
    $('.button3').on('click', function(){
      $('.toggle3').slideToggle();
    });
    $('.button4').on('click', function(){
      $('.toggle4').slideToggle();
    });
    $('.button5').on('click', function(){
      $('.toggle5').slideToggle();
    });
    $('.button6').on('click', function(){
      $('.toggle6').slideToggle();
    });
    $('.button7').on('click', function(){
      $('.toggle7').slideToggle();
    });
    $('.button8').on('click', function(){
      $('.toggle8').slideToggle();
    });
    $('.button9').on('click', function(){
      $('.toggle9').slideToggle();
    });
    $('.button10').on('click', function(){
      $('.toggle10').slideToggle();
    });
    $('.button11').on('click', function(){
      $('.toggle11').slideToggle();
    });



  });
});
