$(function(){
				$('.con_menu .nav1 li').click(function(){
					var idx = $(this).index();
					$(this).addClass('on').siblings().removeClass('on');
					$('.lists1>ul').eq(idx).show().siblings().hide();
					$('.lists1').show();
					$('.lists2').hide();
					$('.lists3').hide();
					$('#checked1').attr("checked",false);
					$('#checked2').attr("checked",false)
				})
				
				$('.con_menu .nav2 li').click(function(){
					var idx = $(this).index();
					$(this).addClass('on').siblings().removeClass('on');
					$('.lists2>ul').eq(idx).show().siblings().hide();
					$('.lists2').show();
					$('.lists1').hide();
					$('.lists3').hide();
					$('#checked1').attr("checked",false);
					$('#checked2').attr("checked",false)
				})
				

				
				$('.gfxcx ul li').click(function(){
					var idx = $(this).index();
					$(this).addClass('on').siblings().removeClass('on');
					$('.lists3>ul').eq(idx).show().siblings().hide();
					$('.lists3').show();
					$('.lists1').hide();
					$('.lists2').hide();
				})
				
				// $('.con_menu .nav1').click(function(){
				// 	$('.nav1').addClass('active');
				// 	$('.lists1').show();
				// 	$('.lists2').hide();
				// 	$('.lists3').hide();
				// 	$('#checked1').attr("checked",false);
				// 	$('#checked2').attr("checked",false)
				// })
				
				// $('.con_menu .nav2').click(function(){
				// 	$('.nav2').addClass('active');
				// 	$('.lists2').show();
				// 	$('.lists1').hide();
				// 	$('.lists3').hide();
				// 	$('#checked1').attr("checked",false);
				// 	$('#checked2').attr("checked",false)
				// })				
				
			})