angular.module("personalView").controller("calendarCtrl", function($scope, apptService, userService) {

    $scope.appts = {};
    $scope.getAppts = function () {
      apptService.getAppts()
      .then(function(response){
        $scope.appts = response;
      });
    };
    $scope.getAppts();

    $scope.user = {};

    $scope.getUser = function () {

      userService.getUser().then(function(response){
        console.log(response);
        $scope.user = response;
      });
    };
    $scope.getUser();

    // $scope.postProducts = function (name, description, price) {
    //   var obj = {name: name, description: description, price: price};
    //   console.log(obj);
    //   mainService.postProducts(obj).then(function(response){
    //     $scope.products = response;
    //   });
    // };
    // $scope.changeProducts = function (product) {
    //   mainService.changeProducts(product).then(function(response){
    //     $scope.products = response;
    //   });
    // };
    // $scope.deleteProducts = function (product) {
    //   mainService.deleteProducts(product._id).then(function(response){
    //     $scope.products = response;
    //   });
    // };
  });
