// 验证是否登录
if(!getCookie().token){
    var arr=location.href.split("/");
    var url=arr[arr.length-1].split(".")[0];
    location.href="login.html?from="+url;
}