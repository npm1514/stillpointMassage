angular.module("personalView").controller("payCtrl", function($scope, userService, apptService) {

  $scope.user = {};

  $scope.getUser = function () {

    userService.getUser().then(function(response){
      $scope.user = response;
      console.log(response);
    });
  };
  $scope.getUser();

  $scope.changeUser = function (user) {
    userService.changeUser(user)
    .then(function(response){
    });
  };
});
