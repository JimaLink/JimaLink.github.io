var browser={     
	versions:function(){             
		var u = navigator.userAgent, app = navigator.appVersion;             
		return {                 
			trident: u.indexOf('Trident') > -1, //IE内核                 
			presto: u.indexOf('Presto') > -1, //opera内核                 
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核                 
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核                 
			mobile: !!u.match(/AppleWebKit.*Mobile.*/)||
					!!u.match(/AppleWebKit/), //是否为移动终端                 
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端                 
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器                 
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			android: u.indexOf('Android') > -1, //android终端或者uc浏览器                 
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad                 
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部             
		}; 
	}
};

var sysId = getSysId();
if(sysId == null){
	sysId = 1;
}

var openmobile = document.getElementById("openmobile").value;
//if(openmobile=="1"){ 
//	if(browser.versions().iPad && browser.versions().mobile){
//	 	window.location.href = "../front/mobile_index.action?sysid=" + sysId +"&clientType=4";
//	}else if(browser.versions().iPhone && browser.versions().mobile){
//		window.location.href = "../front/mobile_index.action?sysid=" + sysId +"&clientType=2";
//	}else if(browser.versions().android && browser.versions().mobile){
//		window.location.href = "../front/mobile_index.action?sysid=" + sysId +"&clientType=3";
//	}else{
//		window.location.href = "../front/mobile_index.action?sysid=" + sysId +"&clientType=2";
//	}
//}
if(openmobile=="1"){ 
	if(browser.versions().iPad && browser.versions().mobile){
		window.location.href = "../complatH5/apps/jact/view/index.html?sysid=" + sysId;
	}else if(browser.versions().iPhone && browser.versions().mobile){
		window.location.href = "../complatH5/apps/jact/view/index.html?sysid=" + sysId;
	}else if(browser.versions().android && browser.versions().mobile){
		window.location.href = "../complatH5/apps/jact/view/index.html?sysid=" + sysId;
	}
}

function getSysId(){
	var index, args, arrArgs;

	index = window.location.href.indexOf("?");
	if(index > -1){
 		args = window.location.href.substr(index + 1);
 		arrArgs = args.split("&");
 		for(var i = 0; i < arrArgs.length; i++){
			if(arrArgs[i].indexOf("sysid") > -1){
				return arrArgs[i].substr(arrArgs[i].indexOf("sysid") + 6);
			}
 		}
	}
 	return null;
}