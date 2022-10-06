var wideScreen = true;
$(document).ready(function () {
//			changeView();
  
  $('#one1').click(function () {
    if ($(this).hasClass('close')) {
      $('#bgimg').fadeIn();
    } else {
      $('#bgimg').fadeOut();
      $('#bgimg_blur').fadeIn(1500);
      $('#main').fadeIn(3000);
      $('#mdgov_siteWrapper').fadeIn(3000);
      $('.footer').fadeIn('slow');
    }
  });
  
  
  function changeView() {
//	$('#mdgov_siteWrapper').slideDown()
//	$('.contents').slideUp()
//					$('#mdgov_siteWrapper').animate("top"，"0px");
//					$('.contents').animate("top","200px");
//				
  
  }
  
  function changeView() {
    $('.footer').fadeOut('slow', function () {
      $('#bgimg_blur').fadeIn('slow');
      $('.footer').fadeIn('slow');
    });
  }
  
  
  $('.close').click(function () {
    $('#bgimg').fadeIn();
    $('.container').hide();
    $('#mdgov_siteWrapper').hide();
    
    $('.show').show();
    $('.footer').hide();
    $('#bgimg').fadeIn();
    
  });
  
  $('.shouye').click(function () {
    if ($(this).hasClass('close')) {
      $('#bgimg').fadeIn();
    } else {
      $('#bgimg').fadeOut();
      $('#main').fadeIn();
      $('.container').fadeIn();
      $('#bgimg_blur').fadeIn();
      $('.footer').fadeIn();
      
      
    }
  });
  
  $('#bgimg').load(function () {
    if ($('#bgimg').width() < $('.container').width()) {
      $('#bgimg').width('100%').height('100%');
    }
  });
  
  $(window).load(fixBgSize);
  $('#bgimg').load(fixBgSize);
  
  $(window).resize(function () {
    fixBgSize();
  });

//			var defaultLoad = setTimeout(function(){
//				if ($('#main').is(':hidden')) {
//					$("#one1").click()
//		
//					$('#main').animate("top","200px")
//				}
//			}, 4000);
});

function fixBgSize() {
  var bgWidth = $('#bgimg').width();
  var bgHeight = $('#bgimg').height();
  var mainWidth = $('.container').width();
  var mainHeight = $('.container').height();
  
  if ((bgWidth / bgHeight) > (mainWidth / mainHeight)) {
    $('#bgimg, #bgimg_blur').width('100%').height('100%');
  } else {
    $('#bgimg, #bgimg_blur').width('100%').height('100%');
  }
}


/*tab切换	*/
function setTab(name, cursel, n) {
  for (i = 1; i <= n; i++) {
    var menu = document.getElementById(name + i);
    var con = document.getElementById("con-" + name + "-" + i);
    menu.className = i == cursel ? "on" : "";
    con.style.display = i == cursel ? "block" : "none";
  }
}

function changeTab(name, cursel, n) {
  for (i = 1; i <= n; i++) {
    var menu = document.getElementById(name + i);
    var con = document.getElementById("con-" + name + "-" + i);
// var gd=document.getElementById("more-"+name+"-"+i);
    menu.className = i == cursel ? "current" : "";
    con.style.display = i == cursel ? "block" : "none";
    // gd.style.display=i==cursel?"block":"none";
  }
}