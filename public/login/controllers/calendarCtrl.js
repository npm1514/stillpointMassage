angular.module("personalView").controller("calendarCtrl", function($scope, apptService, userService) {

    //create arrays to use in html
    $scope.appts = [];
    $scope.user = {};

    $scope.deleteapptbutton = false;
    $scope.reserveapptbutton = true;
    $scope.addapptbutton = false;
    $scope.changeapptbutton = false;

    $scope.confirmaddapptbutton = false;
    $scope.confirmdeleteapptbutton = false;
    $scope.confirmchangeapptbutton = false;

    //get user info
    $scope.getUser = function () {
      userService.getUser()
      .then(function(response){
        $scope.user = response;
        $scope.getAppts();
      });
    };
    $scope.getUser();

    //get appt info
    $scope.getAppts = function () {
      apptService.getAppts()
      .then(function(response){
        console.log(response);
        $scope.appts = response;
        if ($scope.user.admin === true) {
          $scope.deleteapptbutton = true;
          $scope.changeapptbutton = true;
          $scope.addapptbutton = true;
          $scope.reserveapptbutton = false;
        }
      });
    };


    //add appt to appts array
    $scope.addAppt = function (appt) {
      apptService.addAppt(appt)
      .then(function(response){
        $scope.appts.push(response);
      });
    };

    //change appt
    $scope.changeAppt = function (appt) {
      $scope.confirmchangeapptbutton = false;
      apptService.changeAppt(appt)
      .then(function(response){
        $scope.getAppts();
      });
    };

    //Add appt to user object
    $scope.changeUser = function (user, appt) {
      user.appts.selectedappt = appt;
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
