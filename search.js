/*************************************************************
* 控制控件只能输入数字
**************************************************************/
function funKeyDown( event )
{	
	if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=37 && event.keyCode!=39 && event.keyCode!=46 
		&&event.keyCode!=110 && event.keyCode!=190 && event.keyCode!=8 && event.keyCode!=189 && event.keyCode!=109 &&(event.keyCode<96 || event.keyCode>105))
    {
       return false;
    }
    else
    {		
       return true;
    }
}

/************************************************************/
/* 目的： 测试栏位的长度不能大于指定长度                    */
/* thisfield： document.formname.fieldname                  */
/* thisout： a number                                       */
/************************************************************/
function checkNotHigh(thisfield,thisout)
{
	if ( thisfield.value.length*1 > thisout*1 )
	{
		alert("您输入的字符数必须在1~"+thisout*1+"之间，请重新输入！");
		return false;
	}
	else
	{
		return true;
	}
}

//级联选择触发处理
function switchSub(pSrc, objName,i_cataID,iName,formName,Url)
{
	var strLocation = Url+"?i_ID=" + i_cataID;
		strLocation += "&PObjName=" + pSrc.name;
		strLocation += "&PValue=" + encodeURI(pSrc.value);
		strLocation += "&ObjName=" + objName;
		strLocation += "&formname="+formName;
	eval("var objFrame =$('#"+iName+"').get(0)");
	var script = "var obj = parent.document."+formName+"."+objName+";for(var i=obj.options.length;i>=0;i--) {obj.options[i] = null;}obj.options[0] = new Option(\"请选择\",\"0\");"
	eval(script);
	$.ajax({
		type: 'POST',
		//async:false,
		url: strLocation,
		success:function(data){
			if(data=='error1'){
				alert('找父级属性来源出错!');
				return;
			}
			if(data=='error2'){
				alert('级联属性关系设置有误!');
				return;
			}
			if(data=='error3'){
				return;
			}
			var strs= new Array();
			strs = data.split(";");
			for(var i=0;i<strs.length;i++){
				var strs2= new Array();
				strs2 = strs[i].split(",");
				obj.options[obj.options.length] = new Option(strs2[0],strs2[1]);
			}
			obj.onchange;
			//alert(data);
		}
	});
	//objFrame.location=strLocation;
}

function funLoad( )
{}
function addOption(formname,fieldname,name,value){
	var obj = parent.document.formname.fieldname;
	for(var i=obj.options.length;i>=0;i--) {
		obj.options[i] = null;
	}
	obj.options[0] = new Option("请选择","0");
	obj.options[obj.options.length] = new Option(name,value);
	obj.onchange;
}
//级联选择触发处理
function setDefault(pSrc, objName,defVal,Fsub,i_CataID,formName,Url){
	eval("var FObj = "+Fsub);

	FObj.document.write("<iframe frameborder='0' id=FSub"+objName+" width=200 height=200 style=\"display:block\"></iframe>");
	var strLocation = Url +"?i_ID=" + i_CataID;
		strLocation += "&PObjName=" + pSrc.name;
		strLocation += "&PValue=" + encodeURI(pSrc.value);
		strLocation += "&ObjName=" + objName;
		strLocation += "&DefaultValue=" + defVal;
		strLocation += "&formname="+formName;
	var FrameSub = eval(Fsub+".FSub" + objName);	
	FrameSub.location = strLocation;

}
//弹出日历的框架
//format 默认完全格式 1=yyyy-mm-dd 2=yyyy-mm-dd HH:ii
function popUpCalendarDlg(ctrlobj, format, path, compare, compareObj){
	var dateFmt;
	switch (format) {
	case 0:
		dateFmt = 'yyyy-MM-dd HH:mm:ss';
		break;
	case 1:
		dateFmt = 'yyyy-MM-dd';
		break;
	case 2:
		dateFmt = 'yyyy-MM-dd HH:ii';
		break;
	default:
		dateFmt = 'yyyy-MM-dd HH:mm:ss';
		break;
	}
	var config = {el:ctrlobj,dateFmt:dateFmt};
	if(compare){
		if(compare == "max"){
			config["maxDate"] = $("#"+compareObj).val();
		}else if(compare == "min"){
			config["minDate"] = $("#"+compareObj).val();
		}
	}
	WdatePicker(config);
}

function loadDynamic() {
	var param = window.location.search.substr(1);
	if (param == null || param == "" || param == "undefined") {
		$('form')[0].reset();
		$('#FormSearchTest').submit();
		return;
	}
	$('form')[0].reset();
	var arr = param.split('&')
	var strname = "";
	var strvalue = "";
	var strarr = [];
	if(arr!= null &&arr.length >0){
		for(var i=0;i<arr.length;i++){
			strarr = arr[i].split('=');
			if(strarr != null && strarr.length >0){
				strname = strarr[0];
				strvalue = decodeURI(strarr[1]);
				$("input[name='"+strname+"']").val(strvalue);
			}
		}
	}
	$('#FormSearchTest').submit();
}