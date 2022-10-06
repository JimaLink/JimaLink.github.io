/**/
$(function(){
			$("#count1").dayuwscroll({
				parent_ele:'#wrapBox1',
				list_btn:'#tabT04',
				pre_btn:'#left1',
				next_btn:'#right1',
				path: 'left',
				auto:false,
				time:3000,
				num:6,
				gd_num:6,
				waite_time:1000
			});
		});

/**/
$(function() {
			    $('.sub_nav .li a').click(function() {
			      var idx = $(this).parent().index('.sub_nav .li')
			      $(this).parent().addClass('active').siblings().removeClass('active')
			      $('.hid_box').children('.box0').eq(idx).slideDown().siblings('.box0').hide()
				  $('.fixed_btn').show()
			    });
				$('.fixed_btn').click(function(){
					$('.box0').slideUp()
					$('.fixed_btn').hide()
				})
			  })

/**/
$(function() {
			$(".next a").click(function() {
				nextscroll()
			});
		
			function nextscroll() {
				var vcon = $(".fc_img ");
				var offset = ($(".fc_img li").width()) * -1;
				vcon.stop().animate({
					left: offset
				}, "slow", function() {
					var firstItem = $(".fc_img ul li").first();
					vcon.find("ul").append(firstItem);
					$(this).css("left", "0px");
					circle()
				})
			};
		
			function circle() {
				var currentItem = $(".fc_img ul li").first();
				var currentIndex = currentItem.attr("index");
				$(".gb_btn .circle_li").removeClass("circle-cur").hide();
				$(".gb_btn .circle_li").eq(currentIndex).addClass("circle-cur").show()
			}
			$(".prev a").click(function() {
				var vcon = $(".fc_img ");
				var offset = ($(".fc_img li").width() * -1);
				var lastItem = $(".fc_img ul li").last();
				vcon.find("ul").prepend(lastItem);
				vcon.css("left", offset);
				vcon.animate({
					left: "0px"
				}, "slow", function() {
					circle()
				})
			});
			
		})