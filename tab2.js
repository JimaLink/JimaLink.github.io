//选项卡切换
function setTab(name, cursel, n) {
	for(i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con-" + name + "-" + i);
		menu.className = i == cursel ? "active" : "";
		con.style.display = i == cursel ? "block" : "none";
	}
}
function setTab1(name, cursel, n) {
	for(i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con-" + name + "-" + i);
		var more = document.getElementById("more-" + name + "-" + i);
		menu.className = i == cursel ? "hover" : "";
		con.style.display = i == cursel ? "block" : "none";
		more.style.display = i == cursel ? "block" : "none";
	}
}

function setTab2(name, cursel, n) {
	for(i = 1; i <= n; i++) {
		var menu = document.getElementById(name + i);
		var con = document.getElementById("con-" + name + "-" + i);
		con.style.display = i == cursel ? "block" : "none";
	}
}





























