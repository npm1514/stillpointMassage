angular.module("personalView").controller("reviewCtrl", function($scope, userService, apptService) {
  $scope.user = {};

  $scope.getUser = function () {

    userService.getUser().then(function(response){
      $scope.user = response;
      console.log(response);
    });
  };
  $scope.getUser();

  $scope.makePayment = function(user) {
    user.appts.selectedappt.scheduled = true;
    user.appts.schedappts.push(user.appts.selectedappt);
    apptService.changeAppt(user.appts.selectedappt)
    .then(function(response){
    });
    userService.changeUser(user)
    .then(function(response){
    });
  };
});
