function setCookie(cn,cv,day){
    if(day){
        var d=new Date();
        var ms=d.getTime()+day*24*60*60*1000;
        d.setTime(ms);
        var str=d.toGMTString();
        document.cookie=cn+"="+cv+";expires="+str;
    }else{
        document.cookie=cn+"="+cv;
    }
}


function getCookie() {
    var arr = document.cookie.split("; ");
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var s = arr[i].split("=");
        obj[s[0]] = s[1];
    }
    return obj;
}