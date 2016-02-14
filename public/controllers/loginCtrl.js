angular.module("stillpointMassage").controller("loginCtrl", function($scope, $http, userService, apptService) {


  console.log(userService.nouser);


  $scope.getUser = function () {
    userService.getUser()
    .then(function(response){
      $scope.user = response;

      if (userService.nouser) {
        $scope.user.appts.selectedappt = userService.nouser;
        userService.changeUser($scope.user)
        .then (function (response){

        });
        window.location = 'http://localhost:9000/login/login.html#/review';
      }
    });
  };



  $scope.login = function(user) {
    $http.post('/auth', user)
    .then(function(response){
      console.info(response);
      $http.get('/user/:id')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.error(err);
      });
      $scope.getUser();
      if (!userService.nouser) {
        window.location = 'http://localhost:9000/login/login.html';
      }

    }).catch(function (err) {
      console.error(err);
    });

  };
});
