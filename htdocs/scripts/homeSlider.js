function cycleImages(){
  var $active = $('#background_cycler .active');
  var $next = ($('#background_cycler .active').next().length > 0) ? $('#background_cycler .active').next() : $('#background_cycler img:first');
  $next.css('z-index',2);//move the next image up the pile
$active.fadeOut(1500,function(){//fade out the top image
$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
  $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}

function fadeInHome(){
  $('.we-install, .safety').fadeIn(1000);
}

function fadeOutPopUp(){
  $('.popup').fadeOut(1000)
}

$(window).load(function(){
  $('#background_cycler').fadeIn(1000);//fade the background back in once all the images are loaded
    setInterval('cycleImages()', 4000);
    setInterval('fadeInHome()', 2500);
    setInterval('fadeOutPopUp()',1000);
})
