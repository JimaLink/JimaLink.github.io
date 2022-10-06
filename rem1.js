    if ($(".next").find("a").length<1) {
        $(".next").hide()
    } else{
        $(".next").show()
    }
    
    if ($(".last").find("a").length<1) {
        $(".last").hide()
    } else{
        $(".last").show()
    }

	
    function big(){
     $(".art_con").removeClass("numwz smallwz").addClass("bigwz")
      $(".art_con").find("*").removeClass().addClass("bigwz")
    }
    function num(){
    	$(".art_con").removeClass("bigwz smallwz").addClass("numwz")
      $(".art_con").find("*").removeClass().addClass("numwz")
    }
    function small(){
    	$(".art_con").removeClass("bigwz numwz").addClass("smallwz")
      $(".art_con").find("*").removeClass().addClass("smallwz")
    }


var edittext=$(".edit").eq(0);
edittext.html(edittext.html().replace(/维护机构/ig, '济宁市任城区'));




