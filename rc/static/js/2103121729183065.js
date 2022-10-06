document.writeln("<div class=\"head_pic\">");
document.writeln("<img src=\"/picture/88/2103121723287754756.png\" />");
document.writeln("<div>");
document.writeln("<h3>济宁市任城区科学技术局</h3>");
document.writeln("<span>Science and Technology Bureau of Rencheng District, Jining City</span>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("<div class=\"head_search\">");
document.writeln("				<form class=\"jiansuo\" action=\"http://www.rencheng.gov.cn/jrobot/search.do\" method=\"get\" target=\"_blank\" onsubmit=\"return  checkFormguolv()\">");
document.writeln("					<input id=\"webid\" name=\"webid\" type=\"hidden\" value=\"123\">");
document.writeln("					<input type=\"text\" id=\"q\" name=\"q\" class=\"searchText ss-txt\"");
document.writeln("						onfocus=\"if(this.value==\'请输入关键字\'){this.value=\'\'}\"");
document.writeln("						onblur=\"if(this.value==\'\'){this.value=\'请输入关键字\'}\" value=\"请输入关键字\" autocomplete=\"off\">");
document.writeln("              <input type=\"button\" class=\"ss-btn\" value=\"搜索\">");
document.writeln("					<input id=\"pos\" value=\"title,content\" type=\"hidden\" name=\"pos\">");
document.writeln("					<input type=\"hidden\" name=\"category\" value=\"\">");
document.writeln("				</form>");
document.writeln("			</div>");
document.writeln("<div class=\"clear\"></div>");
document.writeln("    ");
function checkFormguolv(){
    var oTxe=document.getElementById('q');
    if (oTxe.value=="请输入关键字" || oTxe.value==""){
      alert("请输入关键字!")
      oTxe.value="";
      return false;}
  }

