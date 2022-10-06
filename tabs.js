$(function(){
	

	$('.nav_gkzn').click(function(){
		$('.gknr_col').slideUp();
		$('.gknb_col').slideUp();
		$('.nav_gkzn').addClass('on').siblings().removeClass('on');
		$('.con_gkzn').show();
		$('.con_gkzd').hide();
		$('.con_gknr').hide();
		$('.con_gknb').hide();
		$('.con_gksq').hide();
		$('.con_gkbz').hide();
	});
	$('.nav_gkzd').click(function(){
		$('.gknr_col').slideUp();
		$('.gknb_col').slideUp();
		$('.nav_gkzd').addClass('on').siblings().removeClass('on');
		$('.con_gkzd').show();
		$('.con_gkzn').hide();
		$('.con_gknr').hide();
		$('.con_gknb').hide();
		$('.con_gksq').hide();
		$('.con_gkbz').hide();
	});
	$('.nav_gknr>a').click(function(ev){
		ev.stopPropagation();
		if($(this).next('.gknr_col').is(':hidden')){
			$(this).parent('.nav_gknr').addClass("on").siblings('li').removeClass("on");
			$(this).next('.gknr_col').slideDown();
		}else{
			$(this).next('.gknr_col').slideUp();
		}
	})
	$('.nav_gknr>a').click(function(ev){
		ev.stopPropagation();
		$('.gknb_col').slideUp();
		$('.nav_gknr').find('li').eq(0).addClass('on').siblings('.gknr_ul li').removeClass('on');
		$('.con_gknr').show();
		$('.con_gkzn').hide();
		$('.con_gkzd').hide();
		$('.con_gknb').hide();
		$('.con_gksq').hide();
		$('.con_gkbz').hide();
		$('.nav_gknr').find('li').eq(0).trigger('click');
	});
	$('.gknr_ul li').click(function(){
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.gknr_page').eq(idx).show().siblings().hide();
		//var idx = $('.gknr_ul li').index(this);
		//$('.gknr_page').eq(idx).show().siblings('.gknr_page').hide();
	});
	$(".nav_gknb>a").click(function(ev) {
	    ev.stopPropagation();
	    if ($(this).next(".gknb_col").is(":hidden")) {
	        $(this).parent('.nav_gknb').addClass("on").siblings('li').removeClass("on");
	        $(this).next('.gknb_col').slideDown();
	    } else {
	        $(this).next('.gknb_col').slideUp();
	    };
	});
	$('.nav_gknb>a').click(function(){
		$('.gknr_col').slideUp();
		$('.nav_gknb').find('li').eq(0).addClass('on').siblings('.gknb_ul li').removeClass('on');
		$('.con_gknb').show();
		$('.con_gkzn').hide();
		$('.con_gkzd').hide();
		$('.con_gknr').hide();
		$('.con_gksq').hide();
		$('.con_gkbz').hide();
		$('.nav_gknb').find('li').eq(0).trigger('click');
	});
	$('.gknb_ul li').click(function(){
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.gknb_page').eq(idx).show().siblings().hide();
		//var idx = $('.gknr_ul li').index(this);
		//$('.gknr_page').eq(idx).show().siblings('.gknr_page').hide();
	});
	$('.nav_gksq').click(function(){
		$('.gknr_col').slideUp();
		$('.gknb_col').slideUp();
		$('.nav_gksq').addClass('on').siblings().removeClass('on');
		$('.con_gksq').show();
		$('.con_gkzn').hide();
		$('.con_gkzd').hide();
		$('.con_gknr').hide();
		$('.con_gknb').hide();
		$('.con_gkbz').hide();
	});
	$('.nav_gkbz').click(function(){
		$('.gknr_col').slideUp();
		$('.gknb_col').slideUp();
		$('.nav_gkbz').addClass('on').siblings().removeClass('on');
		$('.con_gkbz').show();
		$('.con_gkzn').hide();
		$('.con_gkzd').hide();
		$('.con_gknr').hide();
		$('.con_gknb').hide();
		$('.con_gksq').hide();
	});
})