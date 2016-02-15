angular.module("personalView").controller("payCtrl", function($scope, userService, apptService) {

   $scope.user = {};

   $scope.getUser = function () {
     userService.getUser()
     .then(function(response){
       console.log(response);
       $scope.user = response;
       $scope.scheduled = $scope.user.appts.schedappts[$scope.user.appts.schedappts.length - 1];
       console.log($scope.scheduled);
     });
   };
   $scope.getUser();

   $scope.changeUser = function (user) {
     userService.changeUser(user)
     .then(function(response){
     });
   };
 });
