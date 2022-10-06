<!--

var IE=document.all;
var NS4=document.layers;
var NS6=(!IE&&document.getElementById);
var NS=(NS4||NS6); 

//打开查询层
/*function popUpSearchLayer(layer1)
{
	if (!IE && !NS) return false;

	var layer = MM_findObj(layer1);
	if (layer == null) return false;
	var MM_width;
	var MM_height;
	with (layer)	
		if (NS4) {MM_width = width; MM_height = height;}
		else if (NS6) {MM_width = style.width; MM_height = style.height;}
		else {MM_width = style.pixelWidth; MM_height = style.pixelHeight;}
		
	imgWidth = 50;
	imgHeight = 23;

	
	var MM_left = event.clientX - event.offsetX;
	var MM_top = event.clientY - event.offsetY;
	if (parseInt((MM_left + MM_width),10) > parseInt(screen.availWidth,10)) MM_left = MM_left - MM_width + imgWidth;
	//if ((MM_top + MM_height) > screen.availHeight) MM_top = MM_top - MM_height - obj.offsetHeight;

	with (layer)
		if (NS4) {left = MM_left; top = MM_top; visibility = "show";}
		else if (NS6) {style.left = MM_left; style.top = MM_top; style.visibility = "visible";}
		else {style.pixelLeft = MM_left; style.pixelTop = MM_top; style.visibility = "visible";}
}

//关闭查询层
function closeSearchLayer(layer1)
{
	if (!IE && !NS) return false;

	var layer = MM_findObj(layer1);
	with (layer)
	{
		doAction = "";

		if (NS4) visibility = "hide";
		else style.visibility = "hidden";
	}
}
function popOutSearchLayer(menuNum, itemNum){
	popTimer = setTimeout('closeSearchLayer()', 500);
}

//查询
function searchAction(layer1,action)
{
	operFormAction(action);
	closeSearchLayer(layer1);
}*/

//图片交换
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

//打开模式窗口
/*function openModalDialog(url, width, height)
{
	var features = 'dialogWidth:'+width+'px;'+'dialogHeight:'+height+'px;'+'edge: Raised; center: Yes; help: No; resizable: No; status: No;';
	var handle = window.showModalDialog(url, window, features);
}

//全选
function selectAll(obj)
{
	var flag = obj.checked;
	var len = obj.form.elements.length;
	for (var i=0;i<len;i++) 
	{
		var e = obj.form.elements[i];
		if ((e.type=='checkbox') && (e.name=='selectunit'))
			e.checked = flag;
	}
}

//设置树的高度
function setMenuHeight()
{
	var clientHeight = top.document.body.clientHeight;
	var topHeight = 73;
	var toolHeight = 23;
	var helpHeight = 30;
	var spaceHeight = 3;
	var menuHeight;

	menuHeight = clientHeight - topHeight - toolHeight - helpHeight - spaceHeight;

	var menuTab = MM_findObj('menuTab');
	if (menuTab == null) return;

	menuTab.height = menuHeight;
}

//设置列表的高度
function setListHeight()
{
	var clientHeight = top.document.body.clientHeight;
	var topHeight = 73;
	var guideHeight = 24;
	var spaceHeight = 1;

	var listHeight;

	listHeight = clientHeight - topHeight - guideHeight - spaceHeight;

	var listTab = MM_findObj('listTab');
	if (listTab == null) return;

	listTab.height = listHeight;
}

//操作失效
function DisableContextMenu(e){return false;}

//Disable F5 & F11 & Ctrl+R & Ctrl+N
function disableKey()
{ 
	with (event)
	{
		if (keyCode==116 || keyCode==122 || (ctrlKey && keyCode==82) || (ctrlKey && keyCode==78))
		{
			event.keyCode = 0;    
			event.cancelBubble = true;    
			return false;  
		}
	}
}

//鼠标移动到obj上的样式变动
function itemDown(obj,style)
{
	obj.className=style;
}

//鼠标离开obj上的样式变动
function itemRestore(obj,style)
{
	obj.className=style;
}*/

//框架切换中：鼠标按下
function MDown(Object)
{
	Obj = Object.id;
	document.all.leftFrame.setCapture();
	intWidth = event.x-parseInt(document.all.leftFrame.width);
}

//框架切换中：鼠标移动
function MMove()
{
	if ( Obj != "" )
	{
		var iframeWidth = event.x-intWidth;
		if ( iframeWidth >= (screen.width/4*3))
			document.all.leftFrame.width = (screen.width/4*3);
		else if ( iframeWidth >= 1 )
			document.all.leftFrame.width = iframeWidth;				
		else
			document.all.leftFrame.width = 1;
	}
}

//框架切换中：鼠标放开
function MUp()
{
	if ( Obj != "" )
	{
		document.all.leftFrame.releaseCapture();
		Obj = "";
	}
}

//初始化页面
/*function init()
{
	if ("object" != typeof(parent.frmMenu)) return;

	if (parent.frmMenu.style.display=="none")
		showtocTD.style.display="block";
	else
		showtocTD.style.display="none";
}*/

//框架切换中：隐藏或者打开
function showHideMenu() 
{
	var str = "";
	if ("undefined" == typeof(switchPoint))
		str = "parent.";
	
	var objFrmMenu = eval(str + "frmMenu");
	var objMainFrame = eval(str + "mainFrame");
	var objSwitchPoint = eval(str + "switchPoint");
	var objLeftFrame = eval(str + "document.all.leftFrame");
	
	if (objFrmMenu.style.display=="none")
	{
		objFrmMenu.style.display="block";
//		objMainFrame.showtocTD.style.display="none";
		objSwitchPoint.src="images/column_left.gif"; 
	}
	else
	{
		objFrmMenu.style.display="none";
//		objMainFrame.showtocTD.style.display="block";
		objSwitchPoint.src="images/column_right.gif"; 
	}

	if ( parseInt(objLeftFrame.style.width) <= 50 )
		objLeftFrame.style.width = 150;
}

//框架切换中：鼠标移动到
function MM_swapImage_judge() { //v3.0
	var objsrc,newsrc;
	objsrc = switchPoint.src.slice(-9);
	if (objsrc == "_left.gif")
	{
		newsrc = "images/column_left2.gif";
	}
	else if (objsrc == "right.gif")
	{
		newsrc = "images/column_right2.gif";
	}
	MM_swapImage('switchPoint','',newsrc,1);
  
}

//框架切换中：鼠标离开
function MM_swapImgRestore_judge() { //v3.0

	if (frmMenu.style.display=="none") 
	{ 
		switchPoint.src="images/column_right.gif"; 
	} 
	else 
	{ 
		switchPoint.src="images/column_left.gif"; 
	} 
  
}

//切换table
/*function showHide(id1,id2)
{
	var hideTab = document.getElementById(id1);
	var showTab = document.getElementById(id2);
	if(hideTab.style.display=="none")
	{
		hideTab.style.display="";
		showTab.style.display="none";
	}
	else
	{
		hideTab.style.display="none";
		showTab.style.display="";
	}
}

//页面table隐藏状态
var hideState = true;

//切换table
function showAllHide()
{
	var i=1;
	while (1)
	{
		var hideTab = "hideApp" + i;
		var showTab = "showApp" + i;

		hideTab = document.getElementById(hideTab);
		if (hideTab == null) break;
		showTab = document.getElementById(showTab);
		if (showTab == null) break;

		if(hideState == true)
		{
			hideTab.style.display="none";
			showTab.style.display="";
		}
		else
		{
			hideTab.style.display="";
			showTab.style.display="none";
		}

		i++;
	}
	
	hideState = (hideState == true) ? false : true;
}

//从一个select移动到另一个select
function delSelectedOptions(from1,to1)
{
	// Delete them from original

	var from = MM_findObj(from1);
	if (from == null) return false;

	var to = MM_findObj(to1);
	if (to == null) return false;
	
	for (var i=(from.options.length-1); i>=0; i--) 
	{
		var o = from.options[i];
		var checkifexsist = 0;

		if (o.selected) 
		{
			for (pi=0; pi<to.options.length; pi++)
			{
				if (to.options[pi].value == o.value)
				{
					checkifexsist = 1;
				}
			}

			if (checkifexsist != 1)
			{
				// 对方增加一项
				to.options[to.options.length] = new Option( o.text, o.value, false, false);
			}

			from.options[i] = null;
		}
	}

	if ((arguments.length<3) || (arguments[2]==true)) 
	{
		sortSelect(from);
		sortSelect(to);
	}
    
	from.selectedIndex = -1;
	to.selectedIndex = -1;
} 

//从一个select全部移动到另一个select
function delAllSelectedOptions(from1,to1)
{
	var from = MM_findObj(from1);
	if (from == null) return false;

	var to = MM_findObj(to1);
	if (to == null) return false;
	
	selectAllOptions(from);
	if (arguments.length==2)
	{
		delSelectedOptions(from1,to1);
	}
	else if (arguments.length==3)
	{
		delSelectedOptions(from1,to1,arguments[2]);
	}
	else if (arguments.length==4)
	{
		delSelectedOptions(from1,to1,arguments[2],arguments[3]);
	}
} 

//选择全部的select选项
function selectAllOptions(obj)
{
	for (var i=0; i<obj.options.length; i++)
	{
		obj.options[i].selected = true;
	}
}

//利用图片按钮提交表单
function operFormAction(action)
{
	var frmCol = document.getElementsByTagName("FORM");
	frmCol[0].action.value = action;
	frmCol[0].submit();
}

//选择所有选项
function selectAllItem(list1)
{
	var list = MM_findObj(list1);
	if (list == null) return false;

	with (list)
	{
		for (var i=0; i<length; i++)
		{
			options[i].selected = true;
		}
	}
}

//提交所有选项
function submitAllItem(list1,action)
{
	selectAllItem(list1);
	operFormAction(action);
}

//删除所选项
function deleteItems(action)
{
	var frmCol = document.getElementsByTagName("FORM");
	var len = frmCol[0].elements.length;
	var flagSel = false;
	for (var i=0;i<len;i++) 
	{
		var e = frmCol[0].elements[i];
		if (e.type=='checkbox' && e.name=='selectunit' && e.checked)
			flagSel = true;
	}

	if (flagSel == false) return false;

	operFormAction(action);
}*/

 /*全选-反选*/
 var isChecked=false;
function checkAll()
{  
   var a = document.getElementsByTagName("input");
   //if(a[0].checked==true){
   if(isChecked==true){
     isChecked=false;
   for (var i=0; i<a.length; i++)
      if (a[i].type == "checkbox") a[i].checked = false;
   }
   else
   {
   isChecked=true;
   for (var i=0; i<a.length; i++)
      if (a[i].type == "checkbox" && disabled==false) a[i].checked = true;
   }
}
 /*审核意见的显隐*/
function IndexDeploy(ID,type){
	obj=document.getElementById("cate_"+ID);	
	img=document.getElementById("img_"+ID);
	if(obj.style.display=="none"){
		obj.style.display="";
		img_re=new RegExp("_open\\.gif$");
		img.src=img.src.replace(img_re,'_fold.gif');
		
	}else{
		obj.style.display="none";
		img_re=new RegExp("_fold\\.gif$");
		img.src=img.src.replace(img_re,'_open.gif');
		
	}
	return false;
}
//角色授权部分

//从一个select移动到另一个select
function delSelectedOptions(from1,to1)
{
	// Delete them from original

	var from = MM_findObj(from1);
	if (from == null) return false;

	var to = MM_findObj(to1);
	if (to == null) return false;
	
	for (var i=(from.options.length-1); i>=0; i--) 
	{
		var o = from.options[i];
		var checkifexsist = 0;

		if (o.selected) 
		{
			for (pi=0; pi<to.options.length; pi++)
			{
				if (to.options[pi].value == o.value)
				{
					checkifexsist = 1;
				}
			}

			if (checkifexsist != 1)
			{
				// 对方增加一项
				to.options[to.options.length] = new Option( o.text, o.value, false, false);
			}

			from.options[i] = null;
		}
	}

	if ((arguments.length<3) || (arguments[2]==true)) 
	{
		sortSelect(from);
		sortSelect(to);
	}
    
	from.selectedIndex = -1;
	to.selectedIndex = -1;
} 

//从一个select全部移动到另一个select
function delAllSelectedOptions(from1,to1)
{
	var from = MM_findObj(from1);
	if (from == null) return false;

	var to = MM_findObj(to1);
	if (to == null) return false;
	
	selectAllOptions(from);
	if (arguments.length==2)
	{
		delSelectedOptions(from1,to1);
	}
	else if (arguments.length==3)
	{
		delSelectedOptions(from1,to1,arguments[2]);
	}
	else if (arguments.length==4)
	{
		delSelectedOptions(from1,to1,arguments[2],arguments[3]);
	}
} 

//选择全部的select选项
function selectAllOptions(obj)
{
	for (var i=0; i<obj.options.length; i++)
	{
		obj.options[i].selected = true;
	}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}



//颜色对话框
function callColorDlg(sInitColor,ctrlobj,prectrlobj)
{
	if (sInitColor == null) 
		var sColor = dlgHelper.ChooseColorDlg();
	else
		var sColor = dlgHelper.ChooseColorDlg(sInitColor);
	sColor = sColor.toString(16);	
	if (sColor=="0")
		return false;
	else if (sColor.length >1 && sColor.length < 6)
	{
		var sTempString = "000000".substring(0,6-sColor.length);
		sColor = sTempString.concat(sColor);
	}
	//返回颜色值
	ctrlobj.value = "#" + sColor;
	//预览表格更新
	prectrlobj.style.background = "#" + sColor;
}

// 弹出一个窗口, 使用系统默认弹开位置
function popWindow(url, width, height, title){
    window.open(url,"_blank","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",title="+title).focus();

}

//页面中 处理按钮 定位区域
function getObjPosById(oid){

	var iobj = eval("document.all."+oid);
	return iobj.offsetTop;
}
function goToPos(oid)
{
	var top = getObjPosById(oid);

	document.body.scrollTop = top;
}
//快捷回复
function selectShortcut(obj1,obj2){

    var value = obj1.options[obj1.selectedIndex].text;
	obj2.value = obj2.value +value;


	//更新使用率
	xml = new ActiveXObject("Microsoft.XMLHTTP"); 
	var post=" ";//构造要携带的数据 
	xml.open("POST","../sys/dictionary.do?action=update_usenum&vc_id="+obj1.value,false);//使用POST方法打开一个到服务器的连接，以异步方式通信 
	xml.setrequestheader("content-length",post.length); 
	xml.setrequestheader("content-type","application/x-www-form-urlencoded"); 
	xml.send(post);//发送数据 
	var res = xml.responseText;//接收服务器返回的数据 
	//document.all.checklogin.innerHTML = res;

	obj1[0].selected=true;
	obj2.focus();
}
//快捷回复 高级编辑器
function selectShortcut2(obj1,obj2){

	    var value = obj1.options[obj1.selectedIndex].text;
		var  oEditor  =  FCKeditorAPI.GetInstance(obj2) ;
		oEditor.SetHTML(oEditor.GetXHTML(true) + value);
	

	//更新使用率
	xml = new ActiveXObject("Microsoft.XMLHTTP"); 
	var post=" ";//构造要携带的数据 
	xml.open("POST","../sys/dictionary.do?action=update_usenum&vc_id="+obj1.value,false);//使用POST方法打开一个到服务器的连接，以异步方式通信 
	xml.setrequestheader("content-length",post.length); 
	xml.setrequestheader("content-type","application/x-www-form-urlencoded"); 
	xml.send(post);//发送数据 
	var res = xml.responseText;//接收服务器返回的数据 
	//document.all.checklogin.innerHTML = res;

	obj1[0].selected=true;
	//oEditor.focus();
}

//下载方式2
function down(name,path){
	location="../down.jsp?filename="+encodeURI(name)+"&pathfile="+path;
}
//下载方式3
function down(mdname,name,path){
	location="../down.jsp?filename="+encodeURI(name)+"&pathfile="+path;
}
	
//高亮显示
function hilitWord(keyword,href){
  var r=document.body.createTextRange();
  var s='<FONT style="background-color:yellow;color:red">'+keyword+'</font>';
  while(r.findText(keyword)){
    for(var o=r.parentElement();o&&o.tagName!="A";o=o.parentElement);
    if(!o)try{
      r.pasteHTML(s);
      }catch(e){}
    r.collapse(false);
  }
}
// 目的：得到选择框返回的数值
function popObjectSelectInfo(url, userid, username){
	var objUserId = userid;
	var objUserName = username;

	var formData = url+"&date="+new Date();

	showx = 250;  // + deltaX;
	showy = 150;  // + deltaY;

	var features =
		'dialogWidth:'  + 430 + 'px;' +
		'dialogHeight:' + 345 + 'px;' +
		//'dialogLeft:'   + showx + 'px;' +
		//'dialogTop:'    + showy + 'px;'+
		'directories:yes; location:yes; menubar:no; status=no; toolbar=no;scrollbars:no;Resizeable=no';
	//features = "toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=430,height=645";
	var value = window.showModalDialog(formData, "NewWindow", features);

	if ( value != null ) {
		objUserId.value = value[0];
		
		var html = value[1];
		//objUserName.value = value[1];
		//objUserName.title = value[1];
		
		//过滤 html 中 font
		re = new RegExp("(<\/font>)","gi");
		html = html.replace(re, "");
		
		re = new RegExp("(<font color=blue\>)","gi");
		html = html.replace(re, "");
		
		objUserName.value = html;
	}
}
// 功能:把指定的文本中左边和右边的空格全部截取
// 返回:已经截取的文本
// 参数:text 指定的文本
function trimAll(text)
{
    return leftTrim(rightTrim(text));//先右截取,再左截取,返回
}

// 名称:左截取函数
// 功能:把指定的文本中左边的空格全部截取
// 返回:已经截取的文本
// 参数:text 指定的文本
function leftTrim(text)
{
   if(text==null || text=="") return text;//如果text无内容,返回text
   var leftIndex=0;//定义最左非空格字符的索引下标(空格字符数)
   while(text.substring(leftIndex,leftIndex+1)==" ")//直至找到最左的非空格的字符,要么进行
        {
           leftIndex++;//最右非空格字符的索引下标后移
        }
   return text.substring(leftIndex,text.length);//返回
}

// 名称:右截取函数
// 功能:把指定的文本中右边的空格全部截取
// 返回:已经截取的文本
// 参数:text 指定的文本
function rightTrim(text)
{
   if(text==null || text=="") return text;//如果text无内容,返回text
   var rightIndex=text.length;//定义最右非空格字符的索引下标
   while(text.substring(rightIndex-1,rightIndex)==" ")//直至找到最右的非空格的字符,要么进行
    {
       rightIndex--;//最右非空格字符的索引下标前移
    }
   return text.substring(0,rightIndex);//返回
}
	
//-->