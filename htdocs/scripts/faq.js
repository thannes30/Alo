$(function(){
  $('.faq_as div').not(':first').hide();
  var faqs = $('.faq_as').children();

  $('.faq_qs').on('click', 'h4', function(){
    faqs.hide();
    var n = $(this).index();
    faqs.eq(n).show();
  });
});
