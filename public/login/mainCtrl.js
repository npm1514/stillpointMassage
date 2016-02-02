angular.module("stillpointMassage").controller("mainCtrl", function($scope, mainService) {
    $scope.products = {};
    $scope.getProducts = function () {
      mainService.getProducts().then(function(response){
        $scope.products = response;
      });
    };
    $scope.getProducts();

    $scope.postProducts = function (name, description, price) {
      var obj = {name: name, description: description, price: price};
      console.log(obj);
      mainService.postProducts(obj).then(function(response){
        $scope.products = response;
      });
    };
    $scope.changeProducts = function (product) {
      mainService.changeProducts(product).then(function(response){
        $scope.products = response;
      });
    };
    $scope.deleteProducts = function (product) {
      mainService.deleteProducts(product._id).then(function(response){
        $scope.products = response;
      });
    };
  });
  