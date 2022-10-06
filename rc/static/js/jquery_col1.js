var lengtha=$(".wip_col_top").find("a");

if(lengtha.length==0){
    $(".wip_col_top").html("<a href='http://www.sddpf.org.cn/'>任城区政府门户网站</a")
}

$(".wip_col_li").each(function(){
        var lencon=$(this).find("a").attr("title")
         if($.trim(lencon.length)>12){
          $(this).css("line-height","26px")

        }
      })
