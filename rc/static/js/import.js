var $_JS_LOADED = [];   //已载入的文件
//动态加载js、css文件
function $import(type,src){
    if(!$_JS_LOADED[src]){
    	if(type=="js"){
	        try{
	            var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
	            xhr.open("GET", src, false);
	            xhr.send(null);
	  
	            if(200 == xhr.status || 0 == xhr.status){
					if (window.execScript)
					    window.execScript(xhr.responseText);
					else window.eval.call(window, xhr.responseText);
	            }
	            $_JS_LOADED[src] = true;
	        }catch(e){
	            alert('系统错误: 加载文件"' + src + '"出错! \r\n[在第 ' + e.lineNumber + ' 行出现 ' + e.message + ' 错误]');
	        }
        }else if(type=="css"){
			var css = document.createElement("link");
			css.setAttribute("rel", "stylesheet");
			css.setAttribute("type", "text/css");
			css.setAttribute("href", src);
			if (typeof css!="undefined"){
				document.getElementsByTagName("head")[0].appendChild(css);
				$_JS_LOADED[src] = true;
			}else{
				alert('系统错误: 加载文件"' + src + '"出错!');
			}
		}
    }
}