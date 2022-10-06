//登录验证
function frmsubmit(){
	if(trimAll(document.frm.userLogin.value).length==0){
		document.frm.userLogin.focus();
		alert("请输入用户名");
		return false;
	}
	if(trimAll(document.frm.userPasswd.value).length==0){
		document.frm.userPasswd.focus();
		alert("请输入密码");
		return false;
	}
	if(document.getElementById("register_tr1").style.display=="" &&  document.frm.registercode.value.length !=4){
		document.frm.registercode.focus();
		alert("请输入4位验证码");
		return false ;
	}
	document.getElementById("frm").submit();
}
//年龄校验
function isage(age){if(age==null || age=="") return true;return (!validate(age,'intege1')||age.length>3)?false:true;}
//名字校验
function isfullname(fullname){if(fullname==null || fullname=="")return true;return (!validate(fullname,'notempty') || fullname.length>10)?false:true;}
//控制描述的长度
var oldValue=new Array();
function checkMaxLen(obj,maxlength,num){
	if(obj.value==undefined){//DIV
		if(obj.innerHTML.length>maxlength){
			obj.innerHTML=oldValue[num];
		}else{
			oldValue[num]=obj.innerHTML;
		}
	}else{//INPUT
		if(obj.value.length>maxlength){
			obj.value=oldValue[num];
		}else{
			oldValue[num]=obj.value;
		}
	}
}
function isattach(file,ImageFileExtend,isAlert){
	//if(ImageFileExtend==null || ImageFileExtend.length<2)//未设置类型，验证常见类型
		//ImageFileExtend = ".doc,.txt,.rar,.jpg,.gif,.bmp,.xls"; 
		var  alertMsg = ImageFileExtend;
		ImageFileExtend = (","+ImageFileExtend+",").replace(/,/g, "|");
	 if(file.value.length>0){
		 var fileExtend=file.value.substring(file.value.lastIndexOf('.')).toLowerCase();        
		 if(ImageFileExtend.indexOf("|"+fileExtend+"|") != -1){   
			 return true;
		 }else{
			 if(isAlert){
				 alert("附件格式错误，请上传" + alertMsg + "格式的附件");
			 }
			return false;
		 }    
	 } 
	 return true;
}
function validateForFront(str,model){
	if(str=="") return true;
	if(model=="fullname"){
		return isfullname(str);
	}
	if(model=="age"){
		return isage(str);
	}
	return validate(str,model);
}
function onlyNum(evt){   
	if(evt==null){
	   evt=window.event;
	}
	var keycode = evt.keyCode;   //取得键盘码
	var realkey = String.fromCharCode(keycode);    //以键盘码转成键盘符号
	if(keycode==8 ||keycode==9 || keycode==46|| (keycode>=35 && keycode<=40)||(keycode>=96 && keycode<=105))
		return;   
	else if(!/\d/.test(realkey)){
		if(navigator.appName=="Netscape"){//区分浏览器种类
			evt.preventDefault();
			 return false; 
		}else{
		   window.event.returnValue = false;
		}
	}
}
function disable(obj) {
    if (obj.type == null) {
        return;
    }
    if (obj.type == 'reset' ||obj.type == 'button' ||obj.type == 'submit') {
        obj.disabled = true;
    } else if (obj.onclick != null) {
        obj.onclick = '';
    } else if (obj.onchange != null) {
        obj.onchange = '';
    } else if (obj.href != null && (obj.rel == null || obj.rel != 'stylesheet')) {
        obj.disabled = true;
        obj.href = '#';
    }
    return;
}
function disabledAllElements(){
	var objs = document.getElementsByTagName("*");
	for(i=0;i<objs.length;i++){
		disable(objs[i]);
	}
}
String.prototype.trim = function() { return this.replace(/(^\s*)|(\s*$)/g, ""); };

function assignField(id){
	document.getElementById("hidd_" + id).value=document.getElementById(id).innerHTML.trim();
}

function trimAll(text){
	return leftTrim(rightTrim(text));
}

function leftTrim(text){
	if(text==null || text=="") return text;
	var leftIndex=0;
	while(
		text.substring(leftIndex,leftIndex+1)==" "){
	    leftIndex++;
	}
	return text.substring(leftIndex,text.length);
}

function rightTrim(text){
	if(text==null || text=="") return text;
	var rightIndex=text.length;
	while(text.substring(rightIndex-1,rightIndex)==" "){
	    rightIndex--;
	}
	return text.substring(0,rightIndex);
}

//验证email
function ismail(mail) {
	return (new RegExp(
			/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)
			.test(mail));
}

function strDateTime(str) {
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if (r == null)
		return false;
	var d = new Date(r[1], r[3] - 1, r[4]);
	return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d
			.getDate() == r[4]);
}