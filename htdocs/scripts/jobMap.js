$(function(){
  $('#map').usmap({
    stateStyles: {
      stateHoverAnimation: 1000,
      showLabels: true,
      fill: '#070836',
      stroke: '#fff'
      },
    stateHoverStyles: {fill: '#f2721b'},
  click: function(event, data) {
    $('#clicked-state')
      .text(data.name);
      // .parent().effect('highlight', {color: '#C7F464'}, 2000);
    }
  });
});
