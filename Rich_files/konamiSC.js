var konami={input:"",clear:setTimeout('konami.clear_input()',2000),load:function(link){window.document.onkeyup=function(e){konami.input+=e?e.keyCode:event.keyCode
if(konami.input=="38384040373937396665"){konami.code(link)
clearTimeout(konami.clear)}
clearTimeout(konami.clear)
konami.clear=setTimeout("konami.clear_input()",2000)}},code:function(link){window.location=link},clear_input:function(){konami.input="";clearTimeout(konami.clear);}}
konami.code=function(){document.getElementById('konamiGeeks').style.display='block';if(navigator.appName.indexOf("Microsoft")!=-1){window['BaconEatingFlash'].GotoFrame(2);window['BaconEatingFlash'].Play();}else{document.embeds['BaconEatingFlash'].GotoFrame(2);document.embeds['BaconEatingFlash'].Play();}
return false;}
konami.load()