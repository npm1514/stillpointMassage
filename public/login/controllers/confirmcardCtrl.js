angular.module("personalView").controller("confirmcardCtrl", function($scope, apptService, userService) {

  $scope.user = {};

  $scope.getUser = function () {

    userService.getUser()
    .then(function(response){
      console.log(response);
      $scope.user = response;
      console.log($scope.user);
      $scope.scheduled = $scope.user.appts.schedappts[$scope.user.appts.schedappts.length - 1];
      console.log($scope.scheduled);
    });
  };
  $scope.getUser();
  });
