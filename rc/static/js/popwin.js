
var g_eParameterA = null;
var g_eParameterAV = "";
var g_eParameterB = null;
var g_eParameterBV = "";
var g_eParameterC = null;
var g_eParameterCV = "";
var g_eParameterD = null;
var g_eParameterDV = "";

function ShowPopWin(eP,eDA,eDB){
     var dF=document.all.PopWinFrm;
     var wF=window.frames.PopWinFrm;
 //    if(null==wF.g_fPopWinLoaded||false==wF.g_fPopWinLoaded){
 //        alert("数据未加载完\r\n请重新刷新界面.");
 //       return;
 //    }
        var eL=0;
        var eT=0;
        var p=eP;
        while(p&&p.tagName!="BODY"){
           eT+=p.offsetTop;
           eL+=p.offsetLeft;
           p=p.offsetParent;
        }
        var eH=eP.offsetHeight;
        var dH=dF.style.pixelHeight;
        var sT=document.body.scrollTop;
        dF.style.left=eL;
        if(eT-dH>=sT&&eT+eH+dH>document.body.clientHeight+sT)
            dF.style.top=eT-dH;else dF.style.top=eT+eH;
        if("none"==dF.style.display)
            dF.style.display="block";
        g_eParameterA = eDA;
        g_eParameterB = eDB;

}
function ShowPopWin1(eP,eDA,eDB){
     var dF=document.all.PopWinFrm1;
     var wF=window.frames.PopWinFrm1;
 //    if(null==wF.g_fPopWinLoaded||false==wF.g_fPopWinLoaded){
 //        alert("数据未加载完\r\n请重新刷新界面.");
 //       return;
 //    }
        var eL=0;
        var eT=0;
        var p=eP;
        while(p&&p.tagName!="BODY"){
           eT+=p.offsetTop;
           eL+=p.offsetLeft;
           p=p.offsetParent;
        }
        var eH=eP.offsetHeight;
        var dH=dF.style.pixelHeight;
        var sT=document.body.scrollTop;
        dF.style.left=eL;
        if(eT-dH>=sT&&eT+eH+dH>document.body.clientHeight+sT)
            dF.style.top=eT-dH;else dF.style.top=eT+eH;
        if("none"==dF.style.display)
            dF.style.display="block";
        g_eParameterA = eDA;
        g_eParameterB = eDB;

}
function ShowPopWin2(eP,eDA,eDB){
     var dF=document.all.PopWinFrm2;
     var wF=window.frames.PopWinFrm2;
 //    if(null==wF.g_fPopWinLoaded||false==wF.g_fPopWinLoaded){
 //        alert("数据未加载完\r\n请重新刷新界面.");
 //       return;
 //    }
        var eL=0;
        var eT=0;
        var p=eP;
        while(p&&p.tagName!="BODY"){
           eT+=p.offsetTop;
           eL+=p.offsetLeft;
           p=p.offsetParent;
        }
        var eH=eP.offsetHeight;
        var dH=dF.style.pixelHeight;
        var sT=document.body.scrollTop;
        dF.style.left=eL;
        if(eT-dH>=sT&&eT+eH+dH>document.body.clientHeight+sT)
            dF.style.top=eT-dH;else dF.style.top=eT+eH;
        if("none"==dF.style.display)
            dF.style.display="block";
        g_eParameterA = eDA;
        g_eParameterB = eDB;

}
function SetParameterA(d){
    g_eParameterA.value=d;
    g_eParameterAV = g_eParameterA.value;
}

function SetParameterB(d){
    g_eParameterB.value=d;
    g_eParameterBV = g_eParameterB.value;
}

function SetParameterC(d){
    g_eParameterC.value=d;
    g_eParameterCV = g_eParameterC.value;
}

function SetParameterD(d){
    g_eParameterD.value=d;
    g_eParameterDV = g_eParameterD.value;
}

function chkBrowser(){
    this.ver=navigator.appVersion;
    this.dom=document.getElementById?1:0;this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
    this.ie4=(document.all && !this.dom)?1:0;this.ns5=(this.dom && parseInt(this.ver) >= 5) ?1:0;
    this.ns4=(document.layers && !this.dom)?1:0;
    this.bVer=(this.ie5 || this.ie4 || this.ns4 || this.ns5);
    return this;
}

bVer=new chkBrowser();
ns4 = (document.layers)? true:false;ie4 = (document.all)? true:false;
