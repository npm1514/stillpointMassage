angular.module("personalView").service("userService", function($http) {
    this.getProducts = function () {
      return $http ({
        method: "GET",
        url: '/api/products',
      }).then(function (response) {
        return response.data;
      });
    };
    this.postProducts = function (obj) {
      return $http ({
        method: "POST",
        url: '/api/products',
        data: obj
      }).then(function (response) {
        return response.data;
      });
    };
    this.changeProducts = function (product) {
      return $http ({
        method: "PUT",
        url: '/api/products/' + product._id,
        data: product
      }).then(function (response) {
        return response.data;
      });
    };
    this.deleteProducts = function (id) {
      return $http ({
        method: "DELETE",
        url: '/api/products/' + id
      }).then(function (response) {
        return response.data;
      });
    };
  });
