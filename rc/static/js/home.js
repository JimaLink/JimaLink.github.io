 //站点切换
 $(document).ready(function(){
        $('#zd').hover(function() {
            $("#zd-min").css('display', 'block');
        }, function() {
           $("#zd-min").css('display', 'none');
        });
            $("#zd-min").hover(function() {
                $(this).css('display', 'block');;
            }, function() {
                $(this).css('display', 'none');
            });
 })
 


/* ----- 侧边悬浮 ---- */
$(document).ready(function(){
  $('.f-phone').hover(function() {
      $(".f-ydd").css('display', 'block');
  }, function() {
     $(".f-ydd").css('display', 'none');
  });
      $(".f-ydd").hover(function() {
          $(this).css('display', 'block');;
      }, function() {
          $(this).css('display', 'none');
      });
})
$(document).ready(function(){
    $("#sq").click(function(){
      $("#f-navul").toggle();
      $("#sq").text()=="展开" ? $("#sq").html("收起") : $("#sq").html("展开"+"<div></div>");
    });
});

 
 
//个人法人 
 $(document).ready(function(){
		$(".title-list li").click(function(){
			$(this).addClass("tab-check");
			$(this).siblings().removeClass("tab-check");
			
			var code = $(this).attr("code");
			$(".theme-menu").hide();
			$("."+code).show();
		});
		
		$(".title-list-2 li").click(function(){
			$(this).addClass("tab-check");
			$(this).siblings().removeClass("tab-check");
			
			var code = $(this).attr("code");
			$(".theme-menu-2").hide();
			$("."+code).show();
		});
	});

/*个人切换*/
$(document).ready(function(){
    $(".s-t").click(function(){
     $(".theme").show();
     $(".depart").hide();
     $(".s-t").addClass("s-select");
     $(".s-d").removeClass("s-select");
     });
     $(".s-d").click(function(){
     $(".depart").show();
     $(".theme").hide();
     $(".s-d").addClass("s-select");
     $(".s-t").removeClass("s-select");
     }); 
   
   });
  
   
    /*展开更多-主题*/
  
  $(document).on('click', '.them-more', function () {
    var $this = $(this);
    var $selectTab = $this.prev();
    var isCollapse = $selectTab.hasClass('theme-shrink');
    if (isCollapse) {
      $this.html('收起');
      $selectTab.removeClass('theme-shrink');
    } else {
      $this.html('全部展开');
      $selectTab.addClass('theme-shrink');
    }
  });
  
  $(document).on('click', '.depart-more', function () {
    var $this = $(this);
    var $selectTab = $this.prev();
    var isCollapse = $selectTab.hasClass('depart-shrink');
    if (isCollapse) {
      $this.html('收起');
      $selectTab.removeClass('depart-shrink');
    } else {
      $this.html('全部展开');
      $selectTab.addClass('depart-shrink');
    }
  });

