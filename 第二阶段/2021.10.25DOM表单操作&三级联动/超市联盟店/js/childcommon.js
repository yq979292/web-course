// JavaScript Document
//图文列表切换
$(function(){
	$(".twqh li").bind("mouseenter",weekly_ani).bind("mouseleave",function(){clearTimeout($(this).data("setTime"));});
	function weekly_ani(e){
	var me=$(e.target).closest("li");
	if(me.hasClass("current")) return;
	var orili=me.parent().find(".current");
	$(this).data("setTime",setTimeout(function(){weekly_move(me,orili,190,26)},150));
	}
	function weekly_move(me,orili,h,h2){
	me.addClass("current");
	$(".twqh li").unbind("mouseenter",weekly_ani);
	setTimeout(function(){
	var cur_h=me.height();
	if(cur_h < h-2){
	var cur_orih=orili.height();
	var dh=Math.round((h-cur_h)/2.5);
	me.css("height",cur_h+dh);
	orili.css("height",cur_orih-dh);
	setTimeout(arguments.callee,25);
	}
	else{
	me.addClass("current").css("height",h);
	orili.css("height",h2);
	$(".twqh li").bind("mouseenter",weekly_ani);
	orili.removeClass("current");
	}
	},25);
	}
	$(".twqh").find("li:first").addClass("current").animate({height:190}, 300);
});
$(document).ready(function(){
	$(".Menu").mouseover(function(){	
	$(".wrap1").show();	
	});
$(".Menu").mouseleave(function(){	
	$(".wrap1").hide();	
	});
	$(".wrap .all-sort-list").find(".item").each(function () {
		    $(this).mouseenter(function () {
			$(this).addClass("all-sort-listcurrent");
			$(this).children(".item-list").show().css("opacity", 0.1).animate({ paddingLeft: '15px', opacity: 1 }, 500);
		});
		$(this).mouseleave(function () {
			$(this).removeClass("all-sort-listcurrent");
			$(this).children(".item-list").hide().animate({ paddingLeft: '0px' }, 10);
		});
		});
	  $(".tab1 a").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
	$(".tab_list1").eq($(".tab1 a").index(this)).show().siblings(".tab_list1").hide();
  });
  //多维条件过滤
 $(".Select div p a").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("selected")) {
			$(".selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($(".selectA").length > 0) {
				$(".selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("class", "selectA"));
			}
		}
	});
	$(".selectA").live("click", function () {
		$(this).remove();
		$(".Select div .selected").addClass("selected").siblings().removeClass("selected");
	}); 
  	//Tab切换(选择颜色)
  $(".change a").click(function () {
    $(this).addClass("current").siblings().removeClass();
  });
  //Tab切换(评价切换)
  $(".tab3 a").click(function () {
    $(this).addClass("current").siblings().removeClass();
	$(".tab_list3").eq($(".tab3 a").index(this)).show().siblings(".tab_list3").hide();
  }); 	
  //Tab切换(评价图片切换)
  $(".tab2 a").click(function () {
    $(this).addClass("current").siblings().removeClass();
	$(".tab_list2").eq($(".tab2 a").index(this)).show().siblings(".tab_list2").hide();
  }); 	
  //Tab切换(评价图片切换)
  $(".tab img").click(function () {
    $(this).addClass("current").siblings().removeClass();
	$(".tab_list").eq($(".tab img").index(this)).show().siblings(".tab_list").hide();
  });
  $(".disa").click(function(){
	$(this).hide();
  })  
  //Tab切换(去结算)
  $(".zf2 span").click(function () {
    $(this).addClass("current2").siblings().removeClass("current2");
  });
  //点击关闭
  $(".hide").click(function(){
    $(".tab1 a").removeClass("current");
	$(".Bar1190_big").hide();
  })
  //逛团购顶部浮动导航
$(function() {
  var showTop = $(".bulk_tit").offset().top;
  $(window).scroll(function() {
    var bsltop = $(this).scrollTop();
	if (bsltop > showTop + 50) {
	  $(".floattopnav1").show();
	} else {
	  $(".floattopnav1").hide();
	};
  });
});
});

 //倒计时
var endtimes=new Array();//结束时间
endtimes[1]="8/12/2015 17:37:50";
endtimes[2]="8/12/2015 17:37:50";
endtimes[3]="8/12/2015 17:29:00";
var nowtimes;
function givetime(){
	nowtimes=new Date("8/12/2015 17:28:55");//当前服务器时间
	window.setTimeout("DownCount()",1000)
}
function DownCount(){
	nowtimes=Number(nowtimes)+1000;
	for(var i=1;i<=3;i++)
	{
		var theDay=new Date(endtimes[i]);
		theDay=theDay++;
		if(theDay<=nowtimes)
		{
			//document.getElementById("times"+i).innerHTML = "00&nbsp;00&nbsp;00";
			document.getElementById("a"+i).innerHTML = "立即抢购";
			document.getElementById("s"+i).innerHTML = "距结束";
			document.getElementById("a"+i).className = "";
			endtimes[3]="8/12/2015 17:35:00";
		}
		else{
				timechange(theDay,i);
		}
	}
	window.setTimeout("DownCount()",1000);
}
function timechange(theDay,i){
	var theDays=new Date(theDay);
	var seconds = (theDays - nowtimes)/1000;
	var minutes = Math.floor(seconds/60);
	var hours = Math.floor(minutes/60);
	var days = Math.floor(hours/24);
	var CDay= days;
	var CHour= hours % 24;
	var CMinute= minutes % 60;
	var CSecond= seconds % 60;
	var CHour=CHour+CDay*24;
	if(CMinute<10)
	{
		CMinute="0"+CMinute;
	}
	if(CHour<10)
	{
		CHour="0"+CHour;
	}
	if(CSecond<10)
	{
		CSecond="0"+CSecond;
	}
	document.getElementById("times"+i).innerHTML =CHour+"&nbsp;"+CMinute+"&nbsp;"+CSecond ;
} 	
//换一组
  function divrefresh(){
    var m1=document.getElementById('movie1');
    var m2=document.getElementById('movie2');
    var m3=document.getElementById('movie3');
    if(m1.style.display=='block'){
    m1.style.display='none';
    m2.style.display='block';
    }else if(m2.style.display=='block'){
      m2.style.display='none';
      m3.style.display='block';
    }else{
      m3.style.display='none';
      m1.style.display='block';
    }
  }
	