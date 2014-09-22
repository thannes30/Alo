$(document).ready(function(){
  $(".questions li").click(function(){
    $(this).next('.answer').slideToggle(500);
    $(this).toggleClass('close');
  });
}); //end
