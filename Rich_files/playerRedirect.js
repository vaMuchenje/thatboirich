function getPage(url,myext){if(myext==1){newwindow=window.open(url,'newwindow');newwindow.focus();}else{if(window.opener&&!window.opener.closed){opener.location.href=url;opener.focus();}
else if(top.window.opener&&!top.window.opener.closed){top.opener.location.href=url;top.opener.focus();}
else{newwindow=window.open(url,'newwindow');newwindow.focus();}
self.focus();}}