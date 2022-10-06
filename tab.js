// JavaScript Document
//脱贫攻坚
$(function(){
	$('#list1').width(1200*$('#list1 ul').length+'px');
	$("#nav1 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list1').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav1 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav1 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list1').stop().animate({
				left:distance
			});
		}

	  }  
});
//教育
$(function(){
	$('#list2').width(1200*$('#list2 ul').length+'px');
	$("#nav2 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list2').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav2 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav2 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list2').stop().animate({
				left:distance
			});
		}

	  }  
});
//社会救助
$(function(){
	$('#list3').width(1200*$('#list3 ul').length+'px');
	$("#nav3 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list3').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav3 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav3 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list3').stop().animate({
				left:distance
			});
		}

	  }  
});
//社会福利
$(function(){
	$('#list4').width(1200*$('#list4 ul').length+'px');
	$("#nav4 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list4').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav4 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav4 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list4').stop().animate({
				left:distance
			});
		}

	  }  
});
//社会保障
$(function(){
	$('#list5').width(1200*$('#list5 ul').length+'px');
	$("#nav5 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list5').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav5 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav5 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list5').stop().animate({
				left:distance
			});
		}

	  }  
});
//创业就业
$(function(){
	$('#list8').width(1200*$('#list8 ul').length+'px');
	$("#nav8 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list8').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav8 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav8 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list8').stop().animate({
				left:distance
			});
		}

	  }  
});
//环境保护
$(function(){
	$('#list6').width(1200*$('#list6 ul').length+'px');
	$("#nav6 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list6').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav6 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav6 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list6').stop().animate({
				left:distance
			});
		}

	  }  
});
//医疗机构
$(function(){
	$('#list7').width(1200*$('#list7 ul').length+'px');
	$("#nav7 ul li").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -1200*index;
		$('#list7').stop().animate({
			left:distance
		});
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('#nav7 ul li').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('#nav7 ul li:eq('+number+')').addClass('on').siblings().removeClass('on');
			var distance = -1200*number;
			$('#list7').stop().animate({
				left:distance
			});
		}

	  }  
});