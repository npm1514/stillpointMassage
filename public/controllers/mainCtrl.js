angular.module("stillpointMassage").controller("mainCtrl", function($scope, $location, $http) {

  $scope.login = function(user) {
    console.log("1");
    $http.post('/auth', user)
    .then(function(response){
      console.log("2");
      console.info(response);
      $http.get('/user/:id')
      .then(function (response) {
        console.log(response);
        console.log("3");
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
