angular.module("personalView").controller("calendarCtrl", function($scope, apptService, userService) {

    //create arrays to use in html
    $scope.appts = {};
    $scope.user = {};
    $scope.deleteapptbutton = true;
    $scope.changeapptbutton = true;
    $scope.addapptbutton = true;

    //get appt info
    $scope.getAppts = function () {
      apptService.getAppts()
      .then(function(response){
        $scope.appts = response;
      });
    };
    $scope.getAppts();

    //get user info
    $scope.getUser = function () {
      userService.getUser()
      .then(function(response){
        console.log(response);
        $scope.user = response;
      });
    };
    $scope.getUser();

    //add appt to appts array
    $scope.addAppt = function (appt) {
      $scope.addapptbutton = true;
      apptService.addAppt(appt)
      .then(function(response){
        $scope.appts.push(response);
      });
    };

    $scope.changeAppt = function (appt) {
      $scope.changeapptbutton = true;
      apptService.changeAppt(appt)
      .then(function(response){
        $scope.getAppts();
      });
    };

    //Add appt to user object
    $scope.changeUser = function (user) {
      userService.changeUser(user)
      .then(function(response){
        $scope.user = response;
      });
    };

    //Delete appt
    $scope.deleteAppt = function (appt) {
      apptService.deleteAppt(appt)
      .then(function(response){
        $scope.getAppts();
      });
    };

  });
