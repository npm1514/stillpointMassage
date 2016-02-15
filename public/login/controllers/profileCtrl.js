angular.module("personalView").controller("profileCtrl", function($scope, userService, apptService) {

    $scope.user = {};
    $scope.edituserbutton = true;
    $scope.deleteuserbutton = true;
    $scope.cancelapptbutton = true;
    $scope.adminright = true;

    $scope.getUser = function () {

      userService.getUser()
      .then(function(response){
        $scope.user = response;
        if ($scope.user.admin === true) {
          $scope.adminright = false;
        }
        for (var i = 0; i < $scope.user.appts.schedappts.length; i++) {
          if (moment($scope.user.appts.schedappts[i].date + "T" + $scope.user.appts.schedappts[i].time)._d < moment()) {
            $scope.user.appts.schedappts[i].past = true;
            $scope.user.appts.pastappts = $scope.user.appts.schedappts.splice(i);
            $scope.changeUser($scope.user);
          }
        }

      });
    };
    $scope.getUser();

    $scope.changeUser = function (user) {
      $scope.edituserbutton = true;
      userService.changeUser(user)
      .then(function(response){
      });
    };
//remove and change scheduled Boolean
    $scope.removeAppt = function (user, appt) {
      $scope.cancelapptbutton = true;
      appt.scheduled = false;
      appt.paid = false;
      console.log(appt);
      apptService.changeAppt(appt)
      .then(function(response){
        console.log(response);
      });
      for (var i = 0; i < user.appts.schedappts.length; i++) {
        if (appt._id == user.appts.schedappts[i]._id) {
          user.appts.schedappts.splice(i, 1);
        }
      }
      userService.changeUser(user)
      .then(function(response){
        console.log(response);
      });
    };

    $scope.deleteUser = function (user) {
      userService.deleteUser(user)
      .then(function(response){
        $scope.user = response;
        window.location = '/';
      });
    };
  });
