var validate = function(str,mode){
	if(mode==null){
		alert('验证参数未定义!');
		return false;
	}
	
	var regexEnum = {
		intege:"^-?[1-9]\\d*$",					//整数
		intege1:"^[1-9]\\d*$",					//正整数
		intege2:"^-[1-9]\\d*$",					//负整数
		num:"^([+-]?)\\d*\\.?\\d+$",			//数字
		num1:"^[1-9]\\d*|0$",					//正数（正整数 + 0）
		num2:"^-[1-9]\\d*|0$",					//负数（负整数 + 0）
		decmal:"^([+-]?)\\d*\\.\\d+$",			//浮点数
		decmal1:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",　　	//正浮点数
		decmal2:"^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",　 //负浮点数
		decmal3:"^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",　 //浮点数
		decmal4:"^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",　　 //非负浮点数（正浮点数 + 0）
		decmal5:"^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",　　//非正浮点数（负浮点数 + 0）
	
		email:"^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
		color:"^[a-fA-F0-9]{6}$",				//颜色
		url:"^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",	//url
		chinese:"^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]+$",					//仅中文
		ascii:"^[\\x00-\\xFF]+$",				//仅ACSII字符
		zipcode:"^\\d{6}$",						//邮编
		mobile:"^(13|14|15|16|17|18|19)[0-9]{9}$",				//手机
		ip4:"^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5]).(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$",				//ip地址
		notempty:"^\\S+$",						//非空
		picture:"(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",	//图片
		rar:"(.*)\\.(rar|zip|7zip|tgz)$",								//压缩文件
		date:"^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",					//日期
		qq:"^[1-9]*[1-9][0-9]*$",				//QQ号码
		tel:"(\\d{3}-|\\d{4}-)?(\\d{8}|\\d{7})",	//国内电话
		username:"^\\w+$",						//用来用户注册。匹配由数字、26个英文字母或者下划线组成的字符串
		username1:"^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$",//用来用户注册。匹配字母、数字、下划线、中文组成，不能以下划线开头和结尾
		letter:"^[A-Za-z]+$",					//字母
		letter_u:"^[A-Z]+$",					//大写字母
		letter_l:"^[a-z]+$",					//小写字母
		idcard:"^[1-9]([0-9]{14}|[0-9]{17}|([0-9]{16}(X|x)))$"	//身份证    ^[1-9]([0-9]{14}|[0-9]{17})$
	}
	
	//短时间，形如 (13:04:06)
	function isTime(str){
		var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
		if (a == null) {return false}
		if (a[1]>24 || a[3]>60 || a[4]>60)
		{
			return false;
		}
		return true;
	}
	
	//短日期，形如 (2003-12-05)
	function isDate(str){
		var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
		if(r==null)return false; 
		var d= new Date(r[1], r[3]-1, r[4]); 
		return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
	}
	
	//长时间，形如 (2003-12-05 13:04:06)
	function isDateTime(str){
		var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
		var r = str.match(reg); 
		if(r==null) return false; 
		var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]); 
		return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
	}
	
	/********************************************************/	
	
	var result = false;
	switch(mode){
		case 'time':
			result = isTime(str);
			break;
		case 'date':
			result = isDate(str);
			break;
		case 'datetime':
			result = isDateTime(str)
			break;
		default:
			var regEx = new RegExp(regexEnum[mode]);
			result = regEx.test(str);
	}
	
	return result;
}
/**
 * 简易判断输入是否符合规则
 * @param id		输入控件id
 * @param name		属性名称
 * @param min		最小个数
 * @param max		最大个数
 * @return			true  不符合，false 符合
 */
function commonCheck(id,name,min,max){
	$("#"+id).val($.trim($("#"+id).val()));
	if($("#"+id).val().length==0){
		alertMsg.error(name+"必须填写");
		$("#"+id).focus();
		return true;
	}
	if(min){
		if($("#"+id).val().length<min){
			alertMsg.error(name+"必须大于"+min+"个字");
			$("#"+id).focus();
			return true;
		}
	}
	if(max){
		if($("#"+id).val().length>max){
			alertMsg.error(name+"必须小于"+max+"个字");
			$("#"+id).focus();
			return true;
		}
	}
	return false;
}
/**
 * 集成化判断
 * @param id			需要验证的输入框id
 * @param mode			验证模式
 * @param emptyStr		是否可以为空
 * @param errorMsg		错误信息
 * @return				验证通过返回true
 */
function validateMe(id,mode,emptyStr,errorMsg,min,max,name){
	var str = $("#"+id).val();
	if(emptyStr && str.length==0){
		return true;
	}
	if(!validate(str,mode)){
		alertMsg.error(errorMsg);
		$("#"+id).focus();
		return false;
	}
	if(min){
		if($("#"+id).val().length<min){
			alertMsg.error(name+"必须大于"+min+"个字");
			$("#"+id).focus();
			return false;
		}
	}
	if(max){
		if($("#"+id).val().length>max){
			alertMsg.error(name+"必须小于"+max+"个字");
			$("#"+id).focus();
			return false;
		}
	}
	return true;
}
