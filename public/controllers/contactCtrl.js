angular.module("stillpointMassage").controller("contactCtrl", function($scope, emailService) {

  $scope.responseMessage = '';
  $scope.badEmail ='';
  $scope.sendEmail = function(name, email, message) {
    if (email) {
    emailService.sendEmail(name, email, message)
    .then(function(response){
      console.log(response);
      $scope.responseMessage = response;
    });
    }
    else {
      $scope.badEmail = "Please enter a valid email.";
    }
  };

});
