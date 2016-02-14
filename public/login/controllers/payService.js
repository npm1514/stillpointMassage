angular.module("personalView").service("payService", function($http) {

    this.makePayment = function (appt) {
      return $http ({
        method: "POST",
        url: '/appt',
        data: appt
      }).then(function (response) {
        return response.data;
      });
    };

  });
