angular.module("stillpointMassage").service("apptService", function($http) {

    this.getAppts = function () {
      return $http ({
        method: "GET",
        url: '/appt',
      }).then(function (response) {
        return response.data;
      });
    };

    this.addAppt = function (appt) {
      return $http ({
        method: "POST",
        url: '/appt',
        data: appt
      }).then(function (response) {
        return response.data;
      });
    };

    this.changeAppt = function (appt) {
      return $http ({
        method: "PUT",
        url: '/appt/' + appt._id,
        data: appt
      }).then(function (response) {
        return response.data;
      });
    };

    this.deleteAppt = function (appt) {
      return $http ({
        method: "DELETE",
        url: '/appt/' + appt._id
      }).then(function (response) {
        return response.data;
      });
    };
  });
