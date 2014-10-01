$(function(){
  $('#map').usmap({
    stateStyles: {
      stateHoverAnimation: 1000,
      // showLabels: true,
      fill: '#070836',
      stroke: '#fff'
      },
    stateHoverStyles: {fill: '#f2721b'},
  // click: function(event, data) {
  //   $('#clicked-state')
  //     .text(data.name);
  //   },

    // 'click':{
    //   'NJ' : function(event, data){
    //     $('#clicked-state').text('You clicked NJ! bro! DTS NJ JSHORE');
    //   }
    // }

    // $('#map').on('usmap<event>MD', function(event, data) {
    //   console.log('You clicked on the state of Maryland');
    // });

  });
});
