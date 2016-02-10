angular.module("personalView").controller("editusersCtrl", function($scope, apptService, userService) {

  $scope.users = [];
  $scope.user = {};

  $scope.adminright = false;

  $scope.deleteuserbutton = true;
  $scope.changeuserbutton = true;

  $scope.confirmdeleteuserbutton = false;
  $scope.confirmchangeuserbutton = false;

  $scope.getUser = function () {
    userService.getUser()
    .then(function(response){
      $scope.user = response;
      if ($scope.user.admin === true) {
        $scope.adminright = true;
      }
      $scope.getUsers();
    });
  };
  $scope.getUser();

  $scope.getUsers = function () {
    userService.getUsers()
    .then(function(response){
      $scope.users = response;
    });
  };


  $scope.changeUser = function (user) {
    $scope.changeuserbutton = true;
    $scope.confirmchangeuserbutton = false;
    userService.changeUser(user)
    .then(function(response){
      $scope.user = response;
    });
  };

  $scope.deleteUser = function (user) {
    userService.deleteUser(user)
    .then(function(response){
      $scope.confirmdeleteuserbutton = false;
      $scope.getUsers();
    });
  };

  $scope.ngchange = function() {
    $scope.confirmchangeuserbutton = true;
    $scope.changeuserbutton = false;
  };

});
