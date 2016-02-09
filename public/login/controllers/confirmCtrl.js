angular.module("personalView").controller("confirmCtrl", function($scope, apptService, userService) {

  $scope.user = {};

  $scope.getUser = function () {

    userService.getUser()
    .then(function(response){
      console.log(response);
      $scope.user = response;
    });
  };
  $scope.getUser();
  });
