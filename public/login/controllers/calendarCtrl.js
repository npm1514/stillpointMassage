angular.module("personalView").controller("calendarCtrl", function($scope, apptService, userService) {

    //create arrays to use in html
    $scope.appts = {};
    $scope.user = {};

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
      userService.getUser().then(function(response){
        console.log(response);
        $scope.user = response;
      });
    };
    $scope.getUser();

    //add appt to appts array
    $scope.addAppt = function (appt) {
      apptService.addAppt(appt)
      .then(function(response){
        $('.addapptbutton').show();
        $('.addappt').hide();
        $('.addconfirm').hide();
        $scope.appts.push(response);
      });
    };

    //Add appt to user object
    $scope.changeUser = function (user) {
      userService.changeUser(user).then(function(response){
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

    $('.addapptbutton').on('click', function(){
      $('.addapptbutton').hide();
      $('.addappt').show();
      $('.addconfirm').show();
    });
  });
