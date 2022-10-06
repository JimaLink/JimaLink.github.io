 $(function(){
	$(".zdgk_list").delegate(".getMore", "click", function () {
		var moreNum=document.getElementById("currentpage").value;
		var url=document.getElementById("strSearchUrl").value;
		moreNum++;
		funGoMobilePage(url,moreNum);
	})
 })

  function funGoMobilePage(url,pageid){
        	var title = "";
        	var vc_number = "";
        	var fileNumber = "";
        	var vc_all = "";
        	var texttype = "";
        	var fbtime = "";
        	var divid = "";
        	var standardXxgk = "";
        	var webid = "";
        	var colid = "";
        	var area = "";
        	
        	var sortfield= "";
        	var fields = "";
        	var fieldConfigId = "";
        	var hasNoPages = "";
        	var infoCount = "";
        	
        	if(document.searchform){
        		if(document.all.vc_title)
        			title = document.all.vc_title.value;
        		if(document.all.vc_number){
        			vc_number = document.all.vc_number.value;
        		}
        		if(document.all.vc_filenumber){
        			fileNumber = document.all.vc_filenumber.value;
        		}
        		if(document.all.vc_all){
        			vc_all = document.all.vc_all.value;
        		}
        		if(document.all.fbtime){
        			fbtime = document.all.fbtime.value;
        		}
        		if(document.all.texttype){
        			texttype = document.all.texttype.value;
        		}
        		if(document.getElementById("divid")){
        			divid = document.getElementById("divid").value;
        		}

        		if(document.getElementById("standardXxgk")){
        			standardXxgk = document.getElementById("standardXxgk").value;
        		}

        		if(document.getElementById("jdid")){
        			webid = document.getElementById("jdid").value;
        		}
        		if(document.getElementById("infotypeId")){
        			colid = document.getElementById("infotypeId").value;
        		}
        		if(document.getElementById("area")){
        			area = document.getElementById("area").value;
        		}
        		
        		if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
        			sortfield = document.getElementById("sortfield").value ;
        		}
        		if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
        			fields = document.getElementById("fields").value ;
        		}
        		if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
        			fieldConfigId = document.getElementById("fieldConfigId").value ;
        		}
        		if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
        			hasNoPages = document.getElementById("hasNoPages").value ;
        		}
        		if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
        			infoCount = document.getElementById("infoCount").value ;
        		}
        	}
        		
        	var currpage = pageid;
        	var npot = url.indexOf("?");
        	var page = url;
        	if(npot == -1){
        		page += "?";
        	}else{
        		page += "&";
        	}
        	 page += "standardXxgk=" + standardXxgk + "&isAllList=1&texttype="+encodeURI(texttype)+"&fbtime="+encodeURI(fbtime)+"&vc_all="+encodeURI(vc_all)+"&vc_filenumber="+encodeURI(fileNumber)+"&vc_title="+encodeURI(title)
        	         + "&vc_number=" + encodeURI(vc_number) + "&currpage="+currpage+"&sortfield="+sortfield+"&fields="+fields+"&fieldConfigId="+fieldConfigId+"&hasNoPages="+hasNoPages+"&infoCount="+infoCount;
        	loadMobileDynamic(page, divid,colid,0,0,webid,"",area);	
        }

 function loadMobileDynamic(url, divid, cid, mid, uid,webid,strMethod, area){
	   var npos = url.indexOf("{");
	   if(npos != -1){
	      return;
	   }
		var newcid = request('infotypeId');
		if(newcid.length > 0 && !isNumber(newcid,false)){
			cid = newcid;
		}
		var qstring = "";
		var vc_title = request1('vc_title',url);

		if(vc_title.length == 0){
			vc_title = request('vc_title');
			qstring = "&vc_title=" + vc_title ;
		} else {
			qstring = "&vc_title=" + vc_title ;
		}

		var vc_number = request1('vc_number',url);

		if(vc_number.length == 0){
			vc_number = request('vc_number');
			qstring += "&vc_number=" + vc_number ;
		} else {
			qstring += "&vc_number=" + vc_number ;
		}
		
		if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
			qstring += "&sortfield=" + document.getElementById("sortfield").value ;
		}
		
		if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
			qstring += "&fields=" + document.getElementById("fields").value ;
		}
		
		if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
			qstring += "&fieldConfigId=" + document.getElementById("fieldConfigId").value ;
		}
		
		if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
			qstring += "&hasNoPages=" + document.getElementById("hasNoPages").value ;
		}
		
		if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
			qstring += "&infoCount=" + document.getElementById("infoCount").value ;
		}
		
		var currpage = request1('currpage',url);

		if(currpage.length == 0){
			currpage = request('currpage');
			qstring += "&currpage=" + currpage ;
		} else {
			qstring += "&currpage=" + currpage ;
		}
		
		var fileNumber = request1('vc_filenumber',url);

		if(fileNumber.length == 0){
			fileNumber = request('vc_filenumber');
			qstring += "&vc_filenumber=" + fileNumber ;
		} else {
			qstring += "&vc_filenumber=" + fileNumber ;
		}
		
		var vc_all = request1('vc_all',url);

		if(vc_all.length == 0){
			vc_all = request('vc_all');
			qstring += "&vc_all=" + vc_all ;
		} else {
			qstring += "&vc_all=" + vc_all ;
		}
		
		var texttype = request1('texttype',url);

		if(texttype.length == 0){
			texttype = request('texttype');
			qstring += "&texttype=" + texttype ;
		} else {
			qstring += "&texttype=" + texttype ;
		}
		
		var fbtime = request1('fbtime',url);

		if(fbtime.length == 0){
			fbtime = request('fbtime');
			qstring += "&fbtime=" + fbtime ;
		} else {
			qstring += "&fbtime=" + fbtime ;
		}

		if(!area)
			area = "";
		var npot = url.indexOf("?"); 
		var npot1 = url.indexOf("area"); 
		if(npot == -1){
			if(npot1 == -1){
				qstring = "infotypeId=" + cid + "&jdid="+webid+"&area="+area+"&divid=" + divid+qstring;
			}else{
				qstring = "infotypeId=" + cid + "&jdid="+webid+"&divid=" + divid+qstring;
			}
		}else{
			if(npot1 == -1){
				qstring = "infotypeId=" + cid + "&jdid="+webid+"&area="+area+"&divid=" + divid+qstring+"&"+url.substr(npot+1);
			}else{
				qstring = "infotypeId=" + cid + "&jdid="+webid+"&divid=" + divid+qstring+"&"+url.substr(npot+1);
			}
		}
		
		if(document.getElementById("xxgkstarttime") != null){
			var starttime = document.getElementById("xxgkstarttime").value;
			if(starttime.length != 0){
				qstring += "&xxgkstarttime=" + starttime ;
			}
		}
		if(document.getElementById("xxgkendtime") != null){
			var endtime = document.getElementById("xxgkendtime").value;
			if(endtime.length != 0){
				qstring += "&xxgkendtime=" + endtime ;
			}
		}
		
		//url = url + qstring;
	   	var divObj = document.getElementById(divid);
		divObj.innerHTML = "正在加载内容，请稍候...";
		
		$.ajax({
			type: "POST",
		    url:url, 
		    data:qstring,
			cache: false,
			success: function(msg){
				loadMobileDefult(divObj, msg);
			},
			error :function(){
		        loadError(divObj);
			}
		});
	}

function loadMobileDefult(obj, strValue){
	if(strValue != "undefined" && strValue != ""){
		obj.innerHTML = trim(strValue);
    }else{
        obj.appendChild ();
    }
}


function request(paras){ 
	var url = location.href; 
	var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");  
	var paraObj = {}  
	for (i=0; j=paraString[i]; i++){  
		paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);  
	}  
	var returnValue = paraObj[paras.toLowerCase()];  
	if(typeof(returnValue)=="undefined"){  
		return "";  
	}else{  
		return returnValue;  
	}  
}

function request1(paras,url){ 
	var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");  
	var paraObj = {}  
	for (i=0; j=paraString[i]; i++){  
		paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);  
	}  
	var returnValue = paraObj[paras.toLowerCase()];  
	if(typeof(returnValue)=="undefined"){  
		return "";  
	}else{  
		return returnValue;  
	}  
}

function loadDynamic(url, divid, cid, mid, uid,webid,strMethod, area){
	if($(window).width()<= 768){
  	  return;
    }
   var npos = url.indexOf("{");
   if(npos != -1){
      return;
   }
	var newcid = request('infotypeId');
	if(newcid.length > 0 && !isNumber(newcid,false)){
		cid = newcid;
	}
	var qstring = "";
	var vc_title = request1('vc_title',url);

	if(vc_title.length == 0){
		vc_title = request('vc_title');
		qstring = "&vc_title=" + vc_title ;
	} else {
		qstring = "&vc_title=" + vc_title ;
	}

	var vc_number = request1('vc_number',url);

	if(vc_number.length == 0){
		vc_number = request('vc_number');
		qstring += "&vc_number=" + vc_number ;
	} else {
		qstring += "&vc_number=" + vc_number ;
	}
	
	if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
		qstring += "&sortfield=" + document.getElementById("sortfield").value ;
	}
	
	if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
		qstring += "&fields=" + document.getElementById("fields").value ;
	}
	
	if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
		qstring += "&fieldConfigId=" + document.getElementById("fieldConfigId").value ;
	}
	
	if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
		qstring += "&hasNoPages=" + document.getElementById("hasNoPages").value ;
	}
	
	if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
		qstring += "&infoCount=" + document.getElementById("infoCount").value ;
	}
	
	var currpage = request1('currpage',url);

	if(currpage.length == 0){
		currpage = request('currpage');
		qstring += "&currpage=" + currpage ;
	} else {
		qstring += "&currpage=" + currpage ;
	}
	
	var fileNumber = request1('vc_filenumber',url);

	if(fileNumber.length == 0){
		fileNumber = request('vc_filenumber');
		qstring += "&vc_filenumber=" + fileNumber ;
	} else {
		qstring += "&vc_filenumber=" + fileNumber ;
	}
	
	var vc_all = request1('vc_all',url);

	if(vc_all.length == 0){
		vc_all = request('vc_all');
		qstring += "&vc_all=" + vc_all ;
	} else {
		qstring += "&vc_all=" + vc_all ;
	}
	
	var texttype = request1('texttype',url);

	if(texttype.length == 0){
		texttype = request('texttype');
		qstring += "&texttype=" + texttype ;
	} else {
		qstring += "&texttype=" + texttype ;
	}
	
	var fbtime = request1('fbtime',url);

	if(fbtime.length == 0){
		fbtime = request('fbtime');
		qstring += "&fbtime=" + fbtime ;
	} else {
		qstring += "&fbtime=" + fbtime ;
	}

	if(!area)
		area = "";
	var npot = url.indexOf("?"); 
	var npot1 = url.indexOf("area"); 
	if(npot == -1){
		if(npot1 == -1){
			qstring = "infotypeId=" + cid + "&jdid="+webid+"&area="+area+"&divid=" + divid+qstring;
		}else{
			qstring = "infotypeId=" + cid + "&jdid="+webid+"&divid=" + divid+qstring;
		}
	}else{
		if(npot1 == -1){
			qstring = "infotypeId=" + cid + "&jdid="+webid+"&area="+area+"&divid=" + divid+qstring+"&"+url.substr(npot+1);
		}else{
			qstring = "infotypeId=" + cid + "&jdid="+webid+"&divid=" + divid+qstring+"&"+url.substr(npot+1);
		}
	}
	
	if(document.getElementById("xxgkstarttime") != null){
		var starttime = document.getElementById("xxgkstarttime").value;
		if(starttime.length != 0){
			qstring += "&xxgkstarttime=" + starttime ;
		}
	}
	if(document.getElementById("xxgkendtime") != null){
		var endtime = document.getElementById("xxgkendtime").value;
		if(endtime.length != 0){
			qstring += "&xxgkendtime=" + endtime ;
		}
	}
	
	//url = url + qstring;
   	var divObj = document.getElementById(divid);
	divObj.innerHTML = "正在加载内容，请稍候...";
	
	$.ajax({
		type: "POST",
	    url:url, 
	    data:qstring,
		cache: false,
		success: function(msg){
			loadDefult(divObj, msg);
		},
		error :function(){
	        loadError(divObj);
		}
	});
}

function loadDefult(obj, strValue){
	if(strValue != "undefined" && strValue != ""){
	   obj.innerHTML = trim(strValue);
	}else{
	   obj.innerHTML = "";
	}
}

function loadError(obj){
	   obj.innerHTML = "数据请求失败或连接超时...";
}

function parseQuery (query) {
   var Params = new Object ();
   if (! query) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for (var i = 0; i < Pairs.length; i++) {
      var KeyVal = Pairs[i].split('=');
      if (! KeyVal || KeyVal.length != 2) continue;
      var key = unescape(KeyVal[0]);
      var val = unescape(KeyVal[1]);
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function ltrim(s){return s.replace(/^\s*/, "")}   
function rtrim(s){return s.replace(/\s*$/, "");}  
function trim(s){return rtrim(ltrim(s));}           

function funSearch(strurl){
	var title = "";
	var vc_number = "";
	var fileNumber = "";
	var vc_all = "";
	var texttype = "";
	var fbtime = "";
	var divid = "";
	var webid = "";
	var colid = "";
	var area = "";
	
	var sortfield = "";
	var fields = "";
	var fieldConfigId = "";
	var hasNoPages = "";
	var infoCount = "";
	
	if(document.searchform){
		if(document.all.vc_title){
			title = document.all.vc_title.value;
		}
		if(document.all.vc_number){
			vc_number = document.all.vc_number.value;
		}
		if(document.all.vc_filenumber){
			fileNumber = document.all.vc_filenumber.value;
		}
		if(document.all.vc_all){
			vc_all = document.all.vc_all.value;
		}
		if(document.all.texttype){
			texttype = document.all.texttype.value;
		}
		if(document.all.fbtime){
			fbtime = document.all.fbtime.value;
		}
		if(document.getElementById("divid")){
			divid = document.getElementById("divid").value;
		}	
		if(document.getElementById("jdid")){
			webid = document.getElementById("jdid").value;
		}
		if(document.getElementById("infotypeId")){
			colid = document.getElementById("infotypeId").value;
		}
		if(document.getElementById("area")){
			area = document.getElementById("area").value;
		}
		
		if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
			sortfield = document.getElementById("sortfield").value ;
		}
		if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
			fields = document.getElementById("fields").value ;
		}
		if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
			fieldConfigId = document.getElementById("fieldConfigId").value ;
		}
		if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
			hasNoPages = document.getElementById("hasNoPages").value ;
		}
		if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
			infoCount = document.getElementById("infoCount").value ;
		}
	}
	
	strurl = strurl + "?fbtime="+encodeURI(fbtime)+"&texttype="+encodeURI(texttype)+"&vc_all="+encodeURI(vc_all)+"&vc_filenumber="+encodeURI(fileNumber)+"&vc_title="+encodeURI(title)
				+ "&vc_number=" + encodeURI(vc_number) + "&sortfield=" +  sortfield+"&fields="+fields+"&fieldConfigId="+fieldConfigId+"&hasNoPages="+hasNoPages+"&infoCount="+infoCount
				+"&isAllList="+1;
	loadDynamic(strurl, divid, colid, 0, 0, webid, "", area);
}

function funClear(){
	if(document.searchform){
		document.all.vc_title.value = "";
		document.all.vc_number.value = "";
	}
}

function checkCurrpage(){
	if (isNumber(document.pageForm.currpage.value,false))
	{
		alert("页码必须为数字，请确认！");
		document.pageForm.currpage.focus();
		return false;
	}
	else{
		showTip();
		return true;
	}
}

function funGo(){
	if (isNumber(document.pageForm.currpage.value,false))
	{
		alert("页码必须为数字，请确认！");
		document.pageForm.currpage.focus();
		return;
	}
	var title = "";
	var vc_number = "";
	var fileNumber = "";
	var vc_all = "";
	var texttype = "";
	var fbtime = "";
	var divid = "";
	var webid = "";
	var colid = "";
	var area = "";
	
	var sortfield = "";
	var fields = "";
	var fieldConfigId = "";
	var hasNoPages = "";
	var infoCount = "";
	
	if(document.searchform){
		if(document.all.vc_title)
			title = document.all.vc_title.value;
		if(document.all.vc_number){
			vc_number = document.all.vc_number.value;
		}
		if(document.all.vc_filenumber){
			fileNumber = document.all.vc_filenumber.value;
		}
		if(document.all.vc_all){
			vc_all = document.all.vc_all.value;
		}
		if(document.all.texttype){
			texttype = document.all.texttype.value;
		}
		if(document.all.fbtime){
			fbtime = document.all.fbtime.value;
		}
		if(document.getElementById("divid")){
			divid = document.getElementById("divid").value;
		}	
		if(document.getElementById("jdid")){
			webid = document.getElementById("jdid").value;
		}
		if(document.getElementById("infotypeId")){
			colid = document.getElementById("infotypeId").value;
		}
		if(document.getElementById("area")){
			area = document.getElementById("area").value;
		}
		
		if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
			sortfield = document.getElementById("sortfield").value ;
		}
		if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
			fields = document.getElementById("fields").value ;
		}
		if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
			fieldConfigId = document.getElementById("fieldConfigId").value ;
		}
		if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
			hasNoPages = document.getElementById("hasNoPages").value ;
		}
		if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
			infoCount = document.getElementById("infoCount").value ;
		}
	}
		
	var currpage = document.pageForm.currpage.value;
	var page = "./search.jsp?fbtime="+encodeURI(fbtime)+"&texttype="+encodeURI(texttype)+"&vc_all="+encodeURI(vc_all)+"&vc_filenumber="+encodeURI(fileNumber)+"&vc_title="+encodeURI(title)
	         + "&vc_number=" + encodeURI(vc_number) + "&currpage="+currpage+"&sortfield="+sortfield+"&fields="+fields+"&fieldConfigId="+fieldConfigId+"&hasNoPages="+hasNoPages+"&infoCount="+infoCount;
	loadDynamic(page, divid,colid,0,0,webid,"", area);	
}

function funGo(url){
	if (isNumber($("#currpage").val(),false))
	{
		alert("页码必须为数字，请确认！");
		document.pageForm.currpage.focus();
		return;
	}
	var title = "";
	var vc_number = "";
	var fileNumber = "";
	var vc_all = "";
	var texttype = "";
	var fbtime = "";
	var divid = "";
	var webid = "";
	var colid = "";
	var area = "";
	
	var sortfield = "";
	var fields = "";
	var fieldConfigId = "";
	var hasNoPages = "";
	var infoCount = "";
	
	if(document.searchform){
		if(document.all.vc_title)
			title = document.all.vc_title.value;
		if(document.all.vc_number){
			vc_number = document.all.vc_number.value;
		}
		if(document.all.vc_filenumber){
			fileNumber = document.all.vc_filenumber.value;
		}
		if(document.all.vc_all){
			vc_all = document.all.vc_all.value;
		}
		if(document.all.texttype){
			texttype = document.all.texttype.value;
		}
		if(document.all.fbtime){
			fbtime = document.all.fbtime.value;
		}
		if(document.getElementById("divid")){
			divid = document.getElementById("divid").value;
		}
			
		if(document.getElementById("jdid")){
			webid = document.getElementById("jdid").value;
		}
		if(document.getElementById("infotypeId")){
			colid = document.getElementById("infotypeId").value;
		}
		if(document.getElementById("area")){
			area = document.getElementById("area").value;
		}
		
		if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
			sortfield = document.getElementById("sortfield").value ;
		}
		if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
			fields = document.getElementById("fields").value ;
		}
		if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
			fieldConfigId = document.getElementById("fieldConfigId").value ;
		}
		if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
			hasNoPages = document.getElementById("hasNoPages").value ;
		}
		if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
			infoCount = document.getElementById("infoCount").value ;
		}
	}
		
	var currpage = $("#currpage").val();
	var npot = url.indexOf("?");
	var page = url;
	if(npot == -1){
		page += "?";
	}else{
		page += "&";
	}
	 page += "texttype="+encodeURI(texttype)+"&fbtime="+encodeURI(fbtime)+"&vc_all="+encodeURI(vc_all)+"&vc_filenumber="+encodeURI(fileNumber)+"&vc_title="+encodeURI(title)
	         + "&vc_number=" + encodeURI(vc_number) + "&currpage="+currpage+"&sortfield="+sortfield+"&fields="+fields+"&fieldConfigId="+fieldConfigId+"&hasNoPages="+hasNoPages+"&infoCount="+infoCount;
	loadDynamic(page, divid,colid,0,0,webid,"",area);	
}

function funGoPage(pageid){
	var title = "";
	var vc_number = "";
	var fileNumber = "";
	var vc_all = "";
	var texttype = "";
	var fbtime = "";
	var divid = "";
	var webid = "";
	var colid = "";
	var area = "";
	
	var sortfield = "";
	var fields = "";
	var fieldConfigId = "";
	var hasNoPages = "";
	var infoCount = "";
	
	if(document.searchform){
		if(document.all.vc_title)
			title = document.all.vc_title.value;
		if(document.all.vc_number){
			vc_number = document.all.vc_number.value;
		}
		if(document.all.vc_filenumber){
			fileNumber = document.all.vc_filenumber.value;
		}
		if(document.all.vc_all){
			vc_all = document.all.vc_all.value;
		}
		if(document.all.texttype){
			texttype = document.all.texttype.value;
		}
		if(document.all.fbtime){
			fbtime = document.all.fbtime.value;
		}
		if(document.getElementById("divid")){
			divid = document.getElementById("divid").value;
		}		
		if(document.getElementById("jdid")){
			webid = document.getElementById("jdid").value;
		}
		if(document.getElementById("infotypeId")){
			colid = document.getElementById("infotypeId").value;
		}
		if(document.getElementById("area")){
			area = document.getElementById("area").value;
		}
		
		if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
			sortfield = document.getElementById("sortfield").value ;
		}
		if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
			fields = document.getElementById("fields").value ;
		}
		if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
			fieldConfigId = document.getElementById("fieldConfigId").value ;
		}
		if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
			hasNoPages = document.getElementById("hasNoPages").value ;
		}
		if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
			infoCount = document.getElementById("infoCount").value ;
		}
	}	
	var currpage = pageid;
	var page = "./search.jsp?texttype="+encodeURI(texttype)+"&fbtime="+encodeURI(fbtime)+"&vc_all="+encodeURI(vc_all)+"&vc_filenumber="+encodeURI(fileNumber)+"&vc_title="+encodeURI(title)
	         + "&vc_number=" + encodeURI(vc_number) + "&currpage="+currpage+"&sortfield="+sortfield+"&fields="+fields+"&fieldConfigId="+fieldConfigId+"&hasNoPages="+hasNoPages+"&infoCount="+infoCount;
	loadDynamic(page, divid,colid,0,0,webid,"", area);	
}

function funGoPage(url,pageid){
	var title = "";
	var vc_number = "";
	var fileNumber = "";
	var vc_all = "";
	var texttype = "";
	var fbtime = "";
	var divid = "";
	var standardXxgk = "";
	var webid = "";
	var colid = "";
	var area = "";
	
	var sortfield= "";
	var fields = "";
	var fieldConfigId = "";
	var hasNoPages = "";
	var infoCount = "";
	
	if(document.searchform){
		if(document.all.vc_title)
			title = document.all.vc_title.value;
		if(document.all.vc_number){
			vc_number = document.all.vc_number.value;
		}
		if(document.all.vc_filenumber){
			fileNumber = document.all.vc_filenumber.value;
		}
		if(document.all.vc_all){
			vc_all = document.all.vc_all.value;
		}
		if(document.all.fbtime){
			fbtime = document.all.fbtime.value;
		}
		if(document.all.texttype){
			texttype = document.all.texttype.value;
		}
		if(document.getElementById("divid")){
			divid = document.getElementById("divid").value;
		}

		if(document.getElementById("standardXxgk")){
			standardXxgk = document.getElementById("standardXxgk").value;
		}

		if(document.getElementById("jdid")){
			webid = document.getElementById("jdid").value;
		}
		if(document.getElementById("infotypeId")){
			colid = document.getElementById("infotypeId").value;
		}
		if(document.getElementById("area")){
			area = document.getElementById("area").value;
		}
		
		if(document.getElementById("sortfield") != null && document.getElementById("sortfield").value.length != 0){
			sortfield = document.getElementById("sortfield").value ;
		}
		if(document.getElementById("fields") != null && document.getElementById("fields").value.length != 0){
			fields = document.getElementById("fields").value ;
		}
		if(document.getElementById("fieldConfigId") != null && document.getElementById("fieldConfigId").value.length != 0){
			fieldConfigId = document.getElementById("fieldConfigId").value ;
		}
		if(document.getElementById("hasNoPages") != null && document.getElementById("hasNoPages").value.length != 0){
			hasNoPages = document.getElementById("hasNoPages").value ;
		}
		if(document.getElementById("infoCount") != null && document.getElementById("infoCount").value.length != 0){
			infoCount = document.getElementById("infoCount").value ;
		}
	}
		
	var currpage = pageid;
	var npot = url.indexOf("?");
	var page = url;
	if(npot == -1){
		page += "?";
	}else{
		page += "&";
	}
	 page += "standardXxgk=" + standardXxgk + "&isAllList=1&texttype="+encodeURI(texttype)+"&fbtime="+encodeURI(fbtime)+"&vc_all="+encodeURI(vc_all)+"&vc_filenumber="+encodeURI(fileNumber)+"&vc_title="+encodeURI(title)
	         + "&vc_number=" + encodeURI(vc_number) + "&currpage="+currpage+"&sortfield="+sortfield+"&fields="+fields+"&fieldConfigId="+fieldConfigId+"&hasNoPages="+hasNoPages+"&infoCount="+infoCount;
	loadDynamic(page, divid,colid,0,0,webid,"",area);	
}

function showTip(str){
	// 创建临时层
	var tmp_div = document.createElement("DIV");
	if(tmp_div){
		tmp_div.className = "div_tip";
		tmp_div.name = "div_tip";
		tmp_div.id = "div_tip";
		str = (str) ? str : "操作正在进行中，请稍候...";

		tmp_div.innerHTML = "<span class=\"tip_til\">系统提示</span>";
		tmp_div.innerHTML += "<span class=\"tip_content\"><span class=\"tip_image\"></span>"+ str+"<br></span>";
		document.body.appendChild(tmp_div);
	}
}

function isNumber(str,flag){
	var b = false;
	for (var i=0; i<str.length; i++)
	{
		if (str.substring(i,i+1)<'0' || str.substring(i,i+1)>'9')
		{
			b = true;
			if (flag)
			{
				if (str.substring(i,i+1)!="-" && str.substring(i,i+1)!=" " && str.substring(i,i+1)!=":" && str.substring(i,i+1)!=";")	
					break;
				else
					b = false;
			}
		}
	}
	return b;
}

function funLoad(selectvalue){
	var arr = selectvalue.split(",");
	
	for(var i=0;i<arr.length;i++){
		var obj = eval("document.getElementById(\"col"+arr[i]+"\")")
		if(obj)
			obj.checked = true;
	}
}

function funSubjectLoad(iframename,subjectbm,subjectname,webdomain){
	var page= webdomain + "/zfxxgk/subjectinfo.jsp?subjectbm=" + encodeURI(subjectbm) + "&subjectname=" + encodeURI(subjectname);
	var obj = eval(iframename);
	obj.location = page;
}

function funAtrributeLoad(iframename,attributebm,attributename,webdomain){
	var page= webdomain + "/zfxxgk/attributeinfo.jsp?attributebm=" + encodeURI(attributebm) + "&attributename=" + encodeURI(attributename);
	var obj = eval(iframename);
	obj.location = page;
}

function tooltip(id){
	$(id).ezpz_tooltip({
		contentPosition: 'belowStatic',
		stayOnContent: true,
		offset: 20
	});
}

function funclick1(i_id, order){
	var divid = "";
	var webid = "";
	var area = "";
	var strSearchUrl = "";
	
	if(document.all.divid)
		divid = document.all.divid.value;
	if(document.all.jdid){
		webid = document.all.jdid.value;
	}
	if(document.all.area){
		area = document.all.area.value;
	}
	if(document.all.strSearchUrl){
		strSearchUrl = document.all.strSearchUrl.value;
	}
	
	var page = "";
	if(order != ""){
		order = "&sortfield=" + order;
	}
	var obj = eval("parent.document.getElementById('" + divid + "')");
	obj.innerHTML = "正在加载内容，请稍候...";
	$.ajax({
		type: "POST",
		url: strSearchUrl + "?divid="+divid+"&infotypeId="+i_id+"&jdid="+webid+"&area="+area+order,
		cache: false,
		success: function(msg){
			loadDefult(obj, msg);
		},
		error :function(){
        	loadError(obj);
		}
	});
}

function funAllList(searchParam){
	var divid = "";
	var webid = "";
	var area = "";
	var strSearchUrl = "";

	if(document.all.divid)
		divid = document.all.divid.value;
	if(document.all.jdid){
		webid = document.all.jdid.value;
	}
	if(document.all.area){
		area = document.all.area.value;
	}
	if(document.all.strSearchUrl){
		strSearchUrl = document.all.strSearchUrl.value;
	}
	var index = searchParam.indexOf('&');
	if(index != 0){
		searchParam = "&" + searchParam;
	}
	var listObj = eval("parent.document.getElementById('" + divid + "')");
	listObj.innerHTML = "正在加载内容，请稍候...";
	$.ajax({
		type: "POST",
		url: strSearchUrl + "?divid="+divid+"&jdid="+webid+"&area=" + area + searchParam,
		cache: false,
		success: function(msg){
			loadDefult(listObj, msg);
		},
		error :function(){
			loadError(listObj);
		}
	});
}

 function pressGopage(strActionUrl,intTotalNum) {
	 var Url=strActionUrl;
	 var	totalNum=intTotalNum;
	 if (event.keyCode == 13) {
		 var page =1;
		 if (document.getElementById('currpage').value>0){
			 page = document.getElementById('currpage').value;
			 if(totalNum<page){
				 page=totalNum;
			 }
		 }else{
			 page = 1;
		 }
		 funGoPage(strActionUrl,page)
	 }
 }



