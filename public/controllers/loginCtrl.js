angular.module("stillpointMassage").controller("loginCtrl", function($scope, $http, userService, apptService) {


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

      window.location = 'http://localhost:9000/login/login.html';
    }).catch(function (err) {
      console.error(err);
    });

  };
});
