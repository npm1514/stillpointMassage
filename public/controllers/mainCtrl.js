angular.module("stillpointMassage").controller("mainCtrl", function($scope, $location, userService) {

  $scope.getUser = function () {

    userService.getUser()
    .then(function(response){
      $scope.user = response;
      console.log(response);
      if ($scope.user) {
        $scope.loggedin = true;
      }
    });
  };
  $scope.getUser();

  $scope.logout = function() {
    userService.logout()
    .then(function(response){
      console.log(response);
    });
  };

});
