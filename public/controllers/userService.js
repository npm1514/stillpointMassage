angular.module("stillpointMassage").service("userService", function($http) {
    this.getUser = function (user) {
      return $http ({
        method: "GET",
        url: '/user/me'
      }).then(function (response) {
        return response.data;
      });
    };
    this.getUsers = function () {
      return $http ({
        method: "GET",
        url: '/user'
      }).then(function (response){
        return response.data;
      });
    };
    this.changeUser = function (user) {
      console.log(user);
      return $http ({
        method: "PUT",
        url: '/user/' + user._id,
        data: user
      }).then(function (response) {
        console.log(response);
        return response.data;
      });
    };
    this.logout = function () {
      return $http ({
        method: 'GET',
        url: '/user/logout'
      })
      .then(function(response){
        return response;
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
