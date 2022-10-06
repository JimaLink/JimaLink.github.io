//modified -b-cosmos-jit 12-19


$(document).ready(function () {
  var wh = $(window).height();
  $("#js_ads_banner_top_slide").height(wh);//banner 根据窗口高度赋值
  
  $("#mdgov_siteWrapper").animate({top: "-207"}, 5, function () {
    
    $("#mdgov_siteWrapper").show();
    
    $("#mdgov_siteWrapper").animate({top: "25"}, 2000, function () {
      
      $(".bounce").delay(1000).slideDown(1000);
      // $(".contents").delay(1000).animate({"margin-top":"440"},1000);
      $(".bounce").delay(9000).slideUp(500);
      //$(".contents").delay(9000).animate({"margin-top":"188"},1000);
      
      
    });
  });
  
  $(".container").animate({top: "200"}, 2000, function () {
    $(".container").show();
    $('.footer').fadeIn('slow');
    
    $(".container").animate({top: "0"}, 2500);
  
    $("#bgimg").animate({
      'opacity': '0.04'
    }, 100);
  });
  
  
  if ($("#js_ads_banner_top_slide").length) {
    var $slidebannertop = $("#js_ads_banner_top_slide"), $bannertop = $("#js_ads_banner_top");
    setTimeout(function () {
      $slidebannertop.slideUp(1500, function () {
        $bannertop.slideDown(1000);
      });
    }, 1000);
  }
});
















