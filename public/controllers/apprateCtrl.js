angular.module("stillpointMassage").controller("apprateCtrl", function($scope, apptService) {

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
            duration: response[i].duration
          });
        }
      }
      console.log(appts);
    });
  };
  $scope.getAppts();

    $('.login').on('click', function(){
      $('.loginbox').show();
    });

    $(document).ready(function() {
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
        events: appts
      });
    });
});
