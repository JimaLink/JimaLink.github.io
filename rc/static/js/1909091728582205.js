document.writeln("<div style=\'background: url(/picture/0/1911251649355381207.jpg) repeat-x;\'>");
document.writeln("<div class=\"top_nav\" ergodic=\"serve\">");
document.writeln("		<div class=\"w\">");
document.writeln("			<div class=\"title\">济宁市生态环境局任城区分局</div>");
document.writeln("			<div class=\"sousuo-1\">");
document.writeln("				<form class=\"jiansuo\" action=\"http://www.rencheng.gov.cn/jrobot/search.do\" method=\"get\" target=\"_blank\" onsubmit=\"return  checkFormguolv()\">");
document.writeln("					<input id=\"webid\" name=\"webid\" type=\"hidden\" value=\"123\">");
document.writeln("					<input type=\"text\" id=\"q\" name=\"q\" class=\"searchText ss-txt\"");
document.writeln("						onfocus=\"if(this.value==\'请输入关键字\'){this.value=\'\'}\"");
document.writeln("						onblur=\"if(this.value==\'\'){this.value=\'请输入关键字\'}\" value=\"请输入关键字\" autocomplete=\"off\">");
document.writeln("              <input type=\"image\" class=\"ss-btn\" value=\"\" src=\"/picture/0/1fe0115d47b9447face63fa798b46c97.jpg\">");
document.writeln("					<input id=\"pos\" value=\"title,content\" type=\"hidden\" name=\"pos\">");
document.writeln("					<input type=\"hidden\" name=\"category\" value=\"\">");
document.writeln("				</form>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("    </div>");
document.writeln("    </div>");
document.writeln("    ");
function checkFormguolv(){
    var oTxe=document.getElementById('q');
    if (oTxe.value=="请输入关键字" || oTxe.value==""){
      alert("请输入关键字!")
      oTxe.value="";
      return false;}
  }
document.writeln("    <style>");
document.writeln("    .top{");
document.writeln("	width: 100%;");
document.writeln("	height: 230px;");
document.writeln("}");
document.writeln(".top_nav{");
document.writeln("	height: 180px;");
document.writeln("	max-width: 100%;");
document.writeln("	background: url(/picture/0/b6beb989208c49beb82dd597eadb7f6e.png) no-repeat center;");
document.writeln("	margin: auto;");
document.writeln("}");
document.writeln(".w{width: 1200px;height: 180px; margin: auto}");
document.writeln(".w .title{font-size: 45px;color: #355e92;float: left;padding-left:100px;padding-top: 51px;}");
document.writeln(".jiansuo{width: 359px;height: 40px;float: right;padding-top: 80px;}");
document.writeln(".sousuo-1{");
document.writeln("	padding-left: 9px;");
document.writeln("	font-size: 15px;");
document.writeln("  }");
document.writeln(".ss-txt{");
document.writeln("	/* background: #fff url(/picture/0/1fe0115d47b9447face63fa798b46c97.jpg) no-repeat 4% center; */");
document.writeln("	height: 40px;");
document.writeln("	width: 287px;");
document.writeln("	border: 1px solid #cdcdcd;");
document.writeln("	padding-left: 20px;");
document.writeln("	border-right: none;");
document.writeln("	color: #999999;");
document.writeln("	font-size: 17px;");
document.writeln("	padding-top: 8px;");
document.writeln("	padding-bottom: 8px;");
document.writeln("	outline: none;");
document.writeln("  }");
document.writeln(".sousuo-1 .ss-btn{");
document.writeln("	width: 77px;");
document.writeln("	height: 40px;");
document.writeln("	background:url(/picture/0/1fe0115d47b9447face63fa798b46c97.jpg) no-repeat;");
document.writeln("	margin-left: -5px;");
document.writeln("	color: #fff;");
document.writeln("	position: absolute;");
document.writeln("	border: none;");
document.writeln("	outline: none;");
document.writeln("  }");
document.writeln("    </style>");