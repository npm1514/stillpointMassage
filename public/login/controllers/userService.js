angular.module("personalView").service("userService", function($http) {
    this.getUser = function (user) {
      return $http ({
        method: "GET",
        url: '/user/me',
      }).then(function (response) {
        return response.data;
      });
    };
    // this.postProducts = function (obj) {
    //   return $http ({
    //     method: "POST",
    //     url: '/user',
    //     data: obj
    //   }).then(function (response) {
    //     return response.data;
    //   });
    // };
    this.changeUser = function (user) {
      return $http ({
        method: "PUT",
        url: '/user/' + user._id,
        data: user
      }).then(function (response) {
        return response.data;
      });
    };
    this.deleteUser = function (user) {
      return $http ({
        method: "DELETE",
        url: '/user/' + user._id,
      }).then(function (response) {
        return response.data;
      });
    };
  });
