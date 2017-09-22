$(function(){
  $(window).scroll(function (){
    $('.effect').each(onScrollEvent);
  });


  $('body').bind('touchmove',(function (){
    $('.effect').each(onScrollEvent);
  }));

  function onScrollEvent(){
    $('.effect').each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 100){
        $(this).addClass("visible");
      }else{
        $(this).addClass("invisible");
      }
    });
  }

  $(window).on('load',function() {
    var s = skrollr.init();
  });

});
