/*信息标题多行文本展现js*/
$(function(){
    $('.column-cover').each(function(){
        var liOriginH = 0;
        var fixedHeight  = $(this).outerHeight();
        var liLineHeight = parseInt($(this).find("li").eq(0).css("line-height"));
        $(this).find('li').each(function(){
            var liHeight = $(this).outerHeight();
            var num = $(this).index();
            liOriginH += liHeight;
            if(liOriginH>=fixedHeight){
                if(liOriginH>fixedHeight){
                    $(this).addClass('white');
                    $(this).append('<ins>...</ins>');
                    var t = $(this).outerHeight()-(liOriginH-fixedHeight)-liLineHeight;
                    $(this).find('ins').css('top',t)
                }
                $(this).hover(function(){
                    $(this).removeClass('white');
                    $(this).find('ins').css('display','none');
                    $(this).parent('ul').stop().animate({'top':-(liOriginH-fixedHeight)},300)
                },function(){
                    $(this).addClass('white');
                    $(this).find('ins').css('display','block');
                    $(this).parent('ul').stop().animate({'top':0},300)
                })
                return false;
            }
        })
    })
});