angular.module("personalView").controller("reviewcardCtrl", function($scope, userService, apptService, payService) {
  $scope.user = {};

  $scope.getUser = function () {

    userService.getUser().then(function(response){
      console.log(response);
      $scope.user = response;
      $scope.scheduled = $scope.user.appts.schedappts[$scope.user.appts.schedappts.length - 1];
      console.log($scope.scheduled);
    });
  };
  $scope.getUser();

  $scope.makePayment = function(user) {
    user.appts.schedappts[user.appts.schedappts.length - 1].paid = true;
    apptService.changeAppt(user.appts.schedappts[user.appts.schedappts.length - 1])
    .then(function(response){
    });
    userService.changeUser(user)
    .then(function(response){
    });
    // payService.makePayment(user)
    // .then(function(response){});
  };
});
