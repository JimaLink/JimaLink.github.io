/*!
Urite, the so-called "Über Write" module.
Created By NanaLich. 2010-08-20
This module is published under WTFPL v2, so you just DO WHAT THE Fxxx YOU WANT TO with it.
*/!function(){var w=this,n=w._fn_urite||'urite';w[n]?w[n](0,1):function(){var u,d=document,o=d.write,t=o,x=/^([\s\S]*?<\/script[^>]*>)([\s\S]*)$/i,l='<script type="text/ecmascript" src="',r='" urite-agent="1"></script>',s='',p=s,f=1;if(o.call)t=function(v){o.call(d,v);};t(l+'data:,_data_uri_useable=1'+r);function urite(v,_){if(!u)u=l+(w._data_uri_useable?'data:,'+n+'(0,1)':function(){var c=d.getElementsByTagName('script'),i=c.length,a=w._src_urite||n,h;while(i-->0){h=c[i].getAttribute('src');if(h&&h.indexOf(a)>=0)
return encodeURI(h);}
return a;}())+r;if(_){f=1,v=s+p,p=s='';if(v)t(v.replace(x,function(m,a,b,i,h){p=b;f=0;return a+u;}));}else{s+=v;if(f)f=0,t(u);}}
w[n]=d[n]=urite;}();}();