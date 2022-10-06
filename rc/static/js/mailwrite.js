// mailwrite.js

//去左空格; 
function ltrim(s)
{ 
	return s.replace(/(^\s*)/g, "");
} 
 //去右空格; 
function rtrim(s)
{ 
  	return s.replace(/(\s*$)/g, "");
} 
 //去左右空格; 
function trim(s){ 
  //s.replace(/(^\s*)|(\s*$)/g, "");
  return rtrim(ltrim(s)); 

}  
//检查表单
function checkForm(){
	var alertinfo = "";
	if(trim(document.writeForm.title.value).length==0){
		if(alertinfo.length==0)
		  document.writeForm.title.focus();
		alertinfo = alertinfo + "标题 不能为空;\r\n";
		//return false;
	}
	if(trim(document.writeForm.content.value).length==0){
		if(alertinfo.length==0)
		  document.writeForm.content.focus();
		alertinfo = alertinfo + "内容 不能为空;\r\n";
		  
		//return false;
	}	
	//验证必填项
	var mustfield = document.writeForm.mustfield.value;
	var iarray = mustfield.split(",");
	for(i=0;mustfield.length>0 && i<iarray.length;i++){  
		var array1 = iarray[i].split("|");
		var name = eval("document.writeForm."+array1[0]);
		if(name.value.length==0 || name.value==" "){
			if(alertinfo.length==0)
		    	name.focus();
			alertinfo =alertinfo + array1[1]+" 不能为空;\r\n";		    	
		}
	}
	if(document.all.register_tr.style.display=="" && document.writeForm.registercode.value.length==0){
		if(alertinfo.length==0)
		  document.writeForm.registercode.focus();
		alertinfo = alertinfo + "验证码 不能为空;\r\n";		  
		//return false;	
	}	
	if(document.all.targetgroup_tr.style.display=="" && document.writeForm.vc_parentid.value.length==0){
		alertinfo = alertinfo + "提交对象 必须选择;\r\n";
		//document.writeForm.vc_parentid.focus();
		//document.writeForm.dimgtree1.onclick();
		//return false;	
	}
	if(document.all.email.value != "") {
		if(!ismail(document.all.email.value)) {
			document.all.email.focus();
			alertinfo = alertinfo + "email不正确,请重新填写;\r\n";
		}
	}
	if(document.all.mobilephone.value != "") {
		if(!isphone(document.all.mobilephone.value)) {
			document.all.mobilephone.focus();
			alertinfo = alertinfo + "手机号码不正确,请重新填写;\r\n";
		}
	}
	if(alertinfo.length>0){
		alert(alertinfo);
		return false;
	}
	
	writeForm.submit();
}

//验证email
function ismail(mail) {
	return(new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(mail)); 
}

function isphone(phone) {
	var reg0 = /^13\d{5,9}$/;
	var reg1 = /^15\d{5,9}$/;
	var reg2 = /^18\d{5,9}$/;
	var reg3 = /^0\d{10,11}$/;
	var b = false;
	if(reg0.test(phone))b = true;
	if(reg1.test(phone))b = true;
	if(reg2.test(phone))b = true;
	if(reg3.test(phone))b = true;
	if(phone.length < 11)b = false;
	
	return b;
}