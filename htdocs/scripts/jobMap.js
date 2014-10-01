$(function(){
  var jobs = {
    tx : 'decent job',
    nj : 'dope spot'
  }
  $('#map').usmap({
    'click': function(event,data){
      var name = data.name.toLowerCase();
      var j = jobs[name];
      $('.we-work').html(j);
    },
    stateStyles: {
      stateHoverAnimation: 1000,
      showLabels: true,
      fill: '#070836',
      stroke: '#fff'
      },
    stateHoverStyles: {fill: '#f2721b'},
  });
});
