/*首页和栏目页右侧搜索选择*/
$(".xhr-seach-box1 a").click(function () {
    var num = $(this).index();

        $(".xhr-seach-input3").css("display","none");
        $("#xhr-seach-input4").removeClass("xhr-seach-input4")
        $("#xhr-seach-input4").addClass("xhr-seach-input1");
    $(".xhr-seach-box3 span").each(function () {
        var num = $(this).index() + 1;
        $(this).removeClass("xhr-seach-active")
    })
       

  switch (num) {
            case 0:
                $(".xhr-seach-box2 input[type='text']").attr("placeholder", "请输入企业名称或统一社会信用代码");
                $("#header_search_type").val("0");
                $(".xhr-seach-input3").css("display","inline-block");
                $("#xhr-seach-input4").addClass("xhr-seach-input4");
                $("#xhr-seach-input4").removeClass("xhr-seach-input1")
                break;
            case 2:
                $(".xhr-seach-box2 input[type='text']").attr("placeholder", "请输入许可项目名称或许可决定书文号")
                $("#header_search_type").val("1");
                $("#search").collapse("hide");
                break;
            case 4:
                $(".xhr-seach-box2 input[type='text']").attr("placeholder", "请输入信用代码或名称")
                $("#header_search_type").val("2");
                $("#search").collapse("hide");
                break;
            case 6:
                $(".xhr-seach-box2 input[type='text']").attr("placeholder", "请输入文章标题或内容")
                $("#header_search_type").val("3")
                ;$("#search").collapse("hide");
                break;
        }

        $(".xhr-seach-box1 a").each(function () {
            $(this).removeClass("xhr-seach-active")
        })
        $(".xhr-seach-box3 span").each(function () {
            var num = $(this).index() + 1;
            $(this).removeClass("xhr-seach-active" + num)
        })
        $(this).addClass("xhr-seach-active")
});
$(".xhr-seach-box3 span").click(function () {
	$("#search").collapse("hide");
    $(".xhr-seach-input3").css("display","none");
    $("#xhr-seach-input4").removeClass("xhr-seach-input4")
    $("#xhr-seach-input4").addClass("xhr-seach-input1")
    var num = $(this).index() + 1;
    switch (num) {
    case 1:
        $(".xhr-seach-box2 input[type='text']").attr("placeholder", "企业名称或统一社会信用代码")
        $("#header_search_type").val("ycml")
        break;
    case 2:
        $(".xhr-seach-box2 input[type='text']").attr("placeholder", "失信人姓名或组织机构代码")
        $("#header_search_type").val("bzxr")
        break;
    case 3:
        $(".xhr-seach-box2 input[type='text']").attr("placeholder", "企业名称或工商注册号")
        $("#header_search_type").val("yzsx")
        break;
    case 4:
        $(".xhr-seach-box2 input[type='text']").attr("placeholder", "政府采购严重违法失信名单提示语句")
        $("#header_search_type").val("7")
        break;
}
      $(".xhr-seach-box3 span").each(function () {
            var num = $(this).index() + 1;
            $(this).removeClass("xhr-seach-active")
        })
    $(".xhr-seach-box1 a").each(function () {
        $(this).removeClass("xhr-seach-active")
    })
    $(this).addClass("xhr-seach-active")
})
/*首页nav选项卡*/
$(".xhr-i-boxL>a").mousemove(function () {
    var num = $(this).index();
    $(".xhr-i-boxL>div").each(function () {
        if (!$(this).hasClass("xhr_yc")) {
            $(this).addClass("xhr_yc")
        }
    });
    $(".xhr-i-boxL>div").eq(num).removeClass("xhr_yc");
    $(".xhr-i-boxL>a").each(function () {
        if ($(this).hasClass("xhr-i-active")) {
            $(this).removeClass("xhr-i-active")
        }
    })
    $(this).addClass("xhr-i-active");
    $("#xhr-i-nav").addClass("xhr-i-nav");
})
$("#xhr-i-nav").mouseleave(function () {
    $(".xhr-i-boxL>div").each(function () {
        if (!$(this).hasClass("xhr_yc")) {
            $(this).addClass("xhr_yc")
        }
    });
    $(".xhr-i-boxL>a").each(function () {
        if ($(this).hasClass("xhr-i-active")) {
            $(this).removeClass("xhr-i-active")
        }
    })
    $("#xhr-i-nav").removeClass("xhr-i-nav");
});
/*baner图选项卡*/
$(".xhr-tab-box ul li").click(function () {
    $(this).parent().children("li").each(function () {
        $(this).removeClass("xz_nav_active");
    });
    $(this).addClass("xz_nav_active");
    var div_num = $(this).index();
    $(this).parent().parent().parent().children("div").each(function () {
        if ($(this).hasClass("xz_nav_content")) {
            $(this).children("div").each(function () {
                $(this).addClass("xhr_yc");
            })
            $(this).children("div").eq(div_num).removeClass("xhr_yc");
        }
    });
});
/*栏目页点击*/
$(".xhr-lists-nav1 span").click(function () {
    $(".xhr-lists-nav1 span").each(function () {
        $(this).removeClass("xhr-lists-navActive")
    })
    $(this).addClass("xhr-lists-navActive")
})
/*信用公示红黑榜切换*/
$(".xhr-xz-nav ul li").click(function () {
    $(this).parent().children("li").each(function () {
        $(this).removeClass(" xhr-left-sp1");
    });
    $(this).addClass(" xhr-left-sp1");
    var div_num = $(this).index();
    $(this).parent().parent().parent().children("div").each(function () {
        if ($(this).hasClass("xz_nav_content")) {
            $(this).children("div").each(function () {
                $(this).addClass("xhr_yc");
            })
            $(this).children("div").eq(div_num).removeClass("xhr_yc");
        }
    });
})

