angular.module("personalView").controller("calendarCtrl", function($scope, apptService, userService, $state) {

    //create arrays to use in html
    $scope.appts = [];
    $scope.user = {};
    $scope.appt = {};

    $scope.admin = false;
    $scope.adding = false;
    $scope.editing = false;
    $scope.adminchange = false;

    //get user info
    $scope.getUser = function () {
      userService.getUser()
      .then(function(response){
        $scope.user = response;
        $scope.getAppts();
      });
    };
    $scope.getUser();

    //get appt info
    $scope.getAppts = function () {
      apptService.getAppts()
      .then(function(response){
        console.log(response);
        $scope.appts = response;
        if ($scope.user.admin === true) {
          $scope.admin = true;
        }
      });
    };


    //add appt to appts array
    $scope.addAppt = function (appt) {
      apptService.addAppt(appt)
      .then(function(response){
        $scope.appts.push(response);
        location.reload();
      });
    };

    //change appt
    $scope.changeAppt = function (appt) {
      $scope.confirmchangeapptbutton = false;
      apptService.changeAppt(appt)
      .then(function(response){
        $scope.getAppts();
        location.reload();
      });
    };

    //Add appt to user object
    $scope.changeUser = function (user, appt) {
      user.appts.selectedappt = appt;
      userService.changeUser(user)
      .then(function(response){
        $scope.user = response;
      });
    };

    //Delete appt
    $scope.deleteAppt = function (appt) {
      apptService.deleteAppt(appt)
      .then(function(response){
        $scope.getAppts();
        location.reload();
      });
    };

  var calendar = [];
  $scope.getCalendar = function () {
    apptService.getAppts()
    .then(function(response){
      for (var i = 0; i < response.length; i++) {
        if (response[i].scheduled === false) {
              calendar.push({
                _id: response[i]._id,
                start: moment(response[i].date + "T" + response[i].time)._d,
                end: moment(response[i].date + "T" + response[i].time).add(response[i].duration, 'minutes')._d,
                title: response[i].therapist + "-" + response[i].duration + " min",
                therapist: response[i].therapist,
                duration: response[i].duration,
                color: '#000'
              });
        }
      }
      for (var j = 0; j < calendar.length; j++) {
        if (calendar[j].therapist === "Jackie") {
          calendar[j].color='pink';
        } else if (calendar[j].therapist === "Rebecca") {
          calendar[j].color='red';
        } else if (calendar[j].therapist === "Melissa") {
          calendar[j].color='purple';
        } else if (calendar[j].therapist === "Israel") {
          calendar[j].color='orange';
        } else if (calendar[j].therapist === "Phyllis") {
          calendar[j].color='brown';
        } else if (calendar[j].therapist === "Sue") {
          calendar[j].color='green';
        } else if (calendar[j].therapist === "Heather") {
          calendar[j].color='blue';
        } else if (calendar[j].therapist === "Maude") {
          calendar[j].color='#8d8d8d';
        } else {
          calendar[j].color='#000';
        }
      }
      console.log(calendar);
      $('#calendar').fullCalendar({

        header: {
          left: 'prev, next today',
          center: 'title',
          right: 'month, agendaWeek, agendaDay'
        },
        defaultDate: moment(),
        defaultView: 'agendaWeek',
        minTime: '09:00:00',
        maxTime: '19:00:00',
        height: 'auto',
        allDaySlot: false,
        hiddenDays: [0],
        editable: false,
        events: calendar,
        eventClick: function(calEvent, jsEvent, view) {
          $scope.selectAppt(calEvent);
        }
      });
    });
  };
  $scope.getCalendar();

  $scope.selectAppt = function(event){
    delete event.source;
    if ($scope.user.admin === true) {
      console.log(event);
      apptService.getAppt(event)
      .then(function(response){
        $scope.appt = response;
        console.log($scope.appt);
        $scope.adminchange = true;
      });
    }
    else {
      console.log(event);
      $scope.user.appts.selectedappt = event;
      userService.changeUser($scope.user)
      .then(function(response){
        console.log(response);
        $state.go("review");
      });
    }
  };

});
