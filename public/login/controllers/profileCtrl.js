angular.module("personalView").controller("profileCtrl", function($scope, userService) {

    $scope.user = {};

    $scope.getUser = function () {

      userService.getUser().then(function(response){
        console.log(response);
        $scope.user = response;
      });
    };
    $scope.getUser();

    $scope.changeUser = function (user) {

      userService.changeUser(user).then(function(response){
        $('.modifybutton').show();
        $('.modify').hide();
        $('.savebutton').hide();
      });
    };
    $scope.deleteUser = function (user) {
      userService.deleteUser(user).then(function(response){
        $scope.user = response;
        window.location = 'http://localhost:9000';
      });
    };

    $('.modifybutton').on('click', function(){
      $('.modifybutton').hide();
      $('.modify').show();
      $('.savebutton').show();
    });

    $('.deletebutton').on('click', function(){
      $('.deleteconfirm').show();
    });

    $('.donotdelete').on('click', function(){
      $('.deleteconfirm').hide();
    });
  });
