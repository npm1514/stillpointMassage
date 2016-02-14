angular.module("stillpointMassage").controller("apprateCtrl", function($scope, apptService, userService, $state) {
  var appts = [];
  $scope.getAppts = function () {
    apptService.getAppts()
    .then(function(response){
      for (var i = 0; i < response.length; i++) {
        if (response[i].scheduled === false) {
              appts.push({
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
      for (var j = 0; j < appts.length; j++) {
        if (appts[j].therapist === "Jackie") {
          appts[j].color='pink';
        } else if (appts[j].therapist === "Rebecca") {
          appts[j].color='red';
        } else if (appts[j].therapist === "Melissa") {
          appts[j].color='purple';
        } else if (appts[j].therapist === "Israel") {
          appts[j].color='orange';
        } else if (appts[j].therapist === "Phyllis") {
          appts[j].color='brown';
        } else if (appts[j].therapist === "Sue") {
          appts[j].color='green';
        } else if (appts[j].therapist === "Heather") {
          appts[j].color='blue';
        } else if (appts[j].therapist === "Maude") {
          appts[j].color='#8d8d8d';
        } else {
          appts[j].color='#000';
        }
      }
      console.log(appts);
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
        events: appts,
        eventClick: function(calEvent, jsEvent, view) {
          $scope.selectAppt(calEvent);
        }
      });
    });
  };
  $scope.getAppts();

  $scope.user = {};
  $scope.getUser = function () {
    userService.getUser()
    .then(function(response){
      $scope.user = response;
      if ($scope.user) {
        $scope.loggedin = true;
      }
    });
  };
  $scope.getUser();


  $scope.selectAppt = function(event){
    delete event.source;
    if($scope.user) {
      $scope.user.appts.selectedappt = event;
      userService.changeUser($scope.user)
      .then(function(response){
        console.log(response);
        window.location = 'http://localhost:9000/login/login.html#/review';
      });
    } else {
      userService.nouser = event;
      console.log(userService.nouser);
        $state.go("login");
    }

  };

  $('.login').on('click', function(){
    $('.loginbox').show();
  });
});
