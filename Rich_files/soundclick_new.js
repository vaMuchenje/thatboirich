function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf(prefix);if(begin==-1)
return null;var end=document.cookie.indexOf(";",begin);if(end==-1)
end=dc.length;return unescape(dc.substring(begin+prefix.length,end));}
function Newsflash(string)
{window.open("http://www.soundclick.com/frontpage/"+string,"displayWindow","toolbar=no,width=415,height=200,directories=no,status=no,scrollbars=yes,resize=yes,menubar=no,resizable=yes");}
function Vote(string)
{remote=window.open("","remotewin","width=468,height=174,resizable=no");remote.location.href="http://www.soundclick.com/Util/VoteNew.cfm?ID="+string;if(remote.opener==null)remote.opener=window;remote.opener.name="opener";remote.focus();}
function checkUncheckAll(field){if(field[0]){var isChecked=field[0].checked;for(var i=0;i<field.length;i++)
{if(isChecked){field[i].checked=false;}else{field[i].checked=true;}}}else{if(field.checked){field.checked=false;}else{field.checked=true;}}}
function VoteInfo(string)
{remote=window.open("","remotewin","width=468,height=174,resizable=no");remote.location.href="http://www.soundclick.com/Util/VoteInfo.cfm?ID="+string;if(remote.opener==null)remote.opener=window;remote.opener.name="opener";remote.focus();}
function popUp(url,width,height)
{window.open(url,"win","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width="+width+",height="+height);}
function readCookie(cookieName){var theCookie=""+document.cookie;var ind=theCookie.indexOf(cookieName);if(ind==-1||cookieName=="")return"";var ind1=theCookie.indexOf(';',ind);if(ind1==-1)ind1=theCookie.length;return unescape(theCookie.substring(ind+cookieName.length+1,ind1));}
function httpGet(theUrl)
{var xmlHttp=null;xmlHttp=new XMLHttpRequest();xmlHttp.open("GET",theUrl,false);xmlHttp.send(null);return xmlHttp.responseXML;}
function playNext(id){playMobile('/single_player.cfm?songid='+id);}
function goPage(id){location.href='http://www.soundclick.com/bands/default.cfm?bandID='+id;}
function createAudioDiv(id){if(document.getElementById('audioDiv')==null){var audioDiv=document.createElement('div');audioDiv.setAttribute('id','audioDiv');audioDiv.setAttribute('style','width:100%;height:70px; background-color:#333;position:fixed; bottom:0px; left:0px;padding:0 10px 10px 10px;');document.body.appendChild(audioDiv);}else{var audioDiv=document.getElementById('audioDiv');}
var resp=httpGet("/player/html5/songXML.cfm?songid="+id);var source=unescape(resp.getElementsByTagName("source")[0].childNodes[0].nodeValue);var artist=unescape(resp.getElementsByTagName("artist")[0].childNodes[0].nodeValue);var song=unescape(resp.getElementsByTagName("song")[0].childNodes[0].nodeValue);var nextsong=unescape(resp.getElementsByTagName("nextsong")[0].childNodes[0].nodeValue);var bandid=unescape(resp.getElementsByTagName("bandid")[0].childNodes[0].nodeValue);var audioElement2=document.createElement('audio');audioElement2.setAttribute('src',source);audioElement2.setAttribute('id','mp3audio');audioElement2.setAttribute('style','width:90%;');audioElement2.setAttribute('controls','controls');audioElement2.load();audioElement2.play();audioElement2.addEventListener('ended',function(){playNext(nextsong);},false);var newText="<div style='white-space:nowrap;width:100%;margin:8px 60px 16px 20px;text-align:center;color:white;font-size:20px;'><span id='artist' onclick='goPage("+bandid+")'> "+artist+" </span> - <span id='song'> "+song+" </span></div>";if(nextsong!=0)newText=newText+"<div style='position:absolute;width:100px;top:8px;right:12px; background-color:#333; text-align:center;color:white;font-size:20px;' id='nextDiv'><div onclick='playNext("+nextsong+")'>next &#9658;</div></div>";document.getElementById('audioDiv').innerHTML=newText;audioDiv.appendChild(audioElement2);}
function newAd(){var xmlhttp;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.open("GET","http://www.soundclick.com/promo/selectAd728.cfm?t="+Math.random(),false);xmlhttp.send();document.getElementById("promoDiv").innerHTML=xmlhttp.responseText;}
function getUrlVars(url){var vars={};var parts=url.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;}
function playMobileOLD_ANDROID(url){var id=getUrlVars(url)["songid"];if(document.getElementById('audioDiv')!=null){var oldMP3=document.getElementById('mp3audio');document.getElementById('audioDiv').removeChild(oldMP3);}
createAudioDiv(id);}
function playMobile(url){var id=getUrlVars(url)["songid"];if(document.getElementById('audioDiv')==null){createAudioDiv(id);}else{var resp=httpGet("/player/html5/songXML.cfm?songid="+id);var artist=unescape(resp.getElementsByTagName("artist")[0].childNodes[0].nodeValue);var song=unescape(resp.getElementsByTagName("song")[0].childNodes[0].nodeValue);var source=unescape(resp.getElementsByTagName("source")[0].childNodes[0].nodeValue);var nextsong=unescape(resp.getElementsByTagName("nextsong")[0].childNodes[0].nodeValue);var bandid=unescape(resp.getElementsByTagName("bandid")[0].childNodes[0].nodeValue);var audioElement=document.getElementById('mp3audio');audioElement.pause();audioElement.setAttribute('src',source);audioElement.load();audioElement.play();document.getElementById('artist').innerHTML=artist;document.getElementById('artist').setAttribute('onclick','goPage('+bandid+')');document.getElementById('song').innerHTML=song;document.getElementById('nextDiv').innerHTML="<div onclick='playNext("+nextsong+")'>next &#9658;</div>";audioElement.addEventListener('ended',function(){playNext(nextsong);},false);}
newAd();}
var singlePlayWindow='';function Player(url){var myCookie=getCookie("mbrowser");if(myCookie!=null){playMobile(url);}else{if(singlePlayWindow&&!singlePlayWindow.closed&&singlePlayWindow.location){singlePlayWindow.location.href=url;}else{var mySize=readCookie('SC_size');if(mySize=='small'){singlePlayWindow=window.open(url,"singlePlay","location=no,toolbar=no,width=500,height=226,directories=no,status=0,scrollbars=no,resize=no,menubar=no,resizable=no,titlebar=no");}else if(url.indexOf('v4/player.cfm')!=-1){singlePlayWindow=window.open(url,"singlePlay","location=no,toolbar=no,width=728,height=430,directories=no,status=no,scrollbars=no,resize=no,menubar=no,resizable=yes,titlebar=no");}else if(url.indexOf('single_player.cfm')==-1){singlePlayWindow=window.open(url,"singlePlay","location=no,toolbar=no,width=500,height=400,directories=no,status=no,scrollbars=no,resize=no,menubar=no,resizable=yes,titlebar=no");}else{singlePlayWindow=window.open(url,"singlePlay","location=no,toolbar=no,width=500,height=365,directories=no,status=no,scrollbars=no,resize=no,menubar=no,resizable=yes,titlebar=no");}}
if(singlePlayWindow){singlePlayWindow.focus();}
stopVIPFlash();}}
function controlFlashMovie(movieName){if(navigator.appName.indexOf("Microsoft")!=-1){return window[movieName]}else{return document[movieName]}}
function stopVIPFlash(){try{controlFlashMovie('MP3PlayerVIP').GotoFrame(21);}catch(err){}}
function resizeMe(newX,newY){var iWidth=0,iHeight=0,d=document,w=window;if(xDef(w.innerWidth,w.innerHeight)){iWidth=w.innerWidth;iHeight=w.innerHeight;if(xDef(d.height)&&d.height>w.innerHeight)iWidth-=16;if(xDef(d.height)&&d.width>w.innerWidth)iHeight-=16;}
else if(d.compatMode=='CSS1Compat'&&d.documentElement&&d.documentElement.clientWidth)
{iWidth=d.documentElement.clientWidth;iHeight=d.documentElement.clientHeight;}
else if(d.body&&d.body.clientWidth)
{iWidth=d.body.clientWidth;iHeight=d.body.clientHeight;}
iWidth=newX-iWidth;iHeight=newY-iHeight;window.resizeBy(iWidth,iHeight);window.focus();}
function xDef()
{for(var i=0;i<arguments.length;++i){if(typeof(arguments[i])=='undefined')return false;}
return true;}
function googleSearch(formName){var myObj=document.getElementById(formName);if(myObj.Realm.value==4&&myObj.SearchTerm.value.length==0){myObj.SearchTerm.style.background="url(/images/navigation/googlesearch.gif) no-repeat";}else{myObj.SearchTerm.style.background="";}}
function textCounter(field,maxlimit){if(field.value.length>maxlimit)
{field.value=field.value.substring(0,maxlimit);alert("Sorry, you've reached the max of "+maxlimit+" characters!")}}
function getPicExt(file){ext=file.substring(file.lastIndexOf('.')+1);ext=ext.toLowerCase();if(ext!='jpg'&&ext!='gif'){alert("Please upload ONLY .jpg or .gif files!");document.myForm.reset();}}
function allowGifJpgPng(file){ext=file.substring(file.lastIndexOf('.')+1);ext=ext.toLowerCase();if(ext!='jpg'&&ext!='jpeg'&&ext!='gif'&&ext!='png'){alert("Please upload ONLY .png,  .jpg, or .gif files!");}}
function move(foo,way){j=-1;menuLen=foo.length;if(way=='up'){lim=0;m=-1}else{lim=menuLen-1;m=1};for(i=0;i<menuLen;i++)if(foo.options[i].selected){j=i;i=menuLen;}
if(j==-1)alert('You have nothing selected.');else if(j==lim)alert('You can\'t go '+way+' any further.')
else{k=j+m;tempt=foo.options[k].text;tempv=foo.options[k].value;foo.options[k].text=foo.options[j].text
foo.options[k].value=foo.options[j].value
foo.options[j].text=tempt;foo.options[j].value=tempv;foo.options[j].selected=false;foo.options[k].selected=true;}}
function showMenu(foo){temp='';menuLen=foo.length;comma=''
for(i=0;i<menuLen;i++){j=i+1;temp+=comma+foo.options[i].value;comma=','}
document.theForm.theResults.value=temp}
function loadIframe(iframeName,url){if(window.frames[iframeName]){imeout
window.frames[iframeName].location=url;return false;}
else return true;}
function expandField(obj,startValue,expandValue){if(obj.rows==expandValue){obj.rows=startValue;}else if(obj.rows==startValue){obj.rows=expandValue;}}
function postTW(url,via,text){window.open('https://twitter.com/intent/tweet?url='+url+'&via='+via+'&text='+text,'tw_remote','location=0,toolbar=0,titlebar=0,menubar=0,status=0,scrollbars=0,width=550,height=420,resizable=1');}
function imageError(element){element.onerror='';element.src='/images/siteNav/logo100x100_dark.png';}
function reloadImage(pic,box,runs){document.getElementById(box).src=pic;runs=runs+1
if(!document.getElementById(box).complete&&runs<8){setTimeout(function(){reloadImage(pic,box,runs)},1000);}}