$(document).ready(function() {
  //登录
$(".xl").mouseenter(function() {
		$(this).addClass("currentt")
		$(".xl a.ddl").css("color", "#d70c19")
		$(".login").show();
	});
	$(".xl").mouseleave(function() {
		$(".login").hide();
		$(".xl a.ddl").attr("style", "")
		$(this).removeClass("currentt")
	});
	//登录成功
	$('.login1').click(function() {
		$(".YC").html('<span style="line-height:40px;color:#d70c19;">北葵向暖</span><span style="line-height:40px; padding-left:15px;"><a href="index.html">[退出]</a></span>')
	});	
	//网站地图
	$(".wzdt").mouseenter(function() {
			$(this).addClass("currentt")
			$(".wzdt p a").css("color", "#d70c19")
			$(".wzdt .wzdt-list").show();
		});
		$(".wzdt").mouseleave(function() {
			$(".wzdt .wzdt-list").hide();
			$(".wzdt p a").attr("style", "")
			$(this).removeClass("currentt")
		});
	//下拉列表
	$('.son_ul').hide();
	$('.box span').click(function() {
		$(this).parent().find('ul.son_ul').slideDown();
		$(this).parent().find('ul.son_ul li').hover(function() {
			$(this).addClass('hover')
		}, function() {
			$(this).removeClass('hover')
		});
		$(this).parent().hover(function() {}, function() {
			$(this).parent().find("ul.son_ul").slideUp(10);
		});
	});
	$('ul.son_ul li').click(function() {
		$(this).parents('.searchcon li').find('span').html($(this).html()).css("color", "#666");
		$(this).parents('.searchcon li').find('ul').slideUp(10);
	});
	//文本框
	$(function() {
		$("input[type='text'],input[type='password'],textarea").each(function() {
			var $input = $(this);
			$input.css("color", "#bebebe");
			var oldText = $.trim($input.val());
			$input.focus(function() {
				var newText = $.trim($input.val());
				if (newText == oldText) {
					$input.val("");
				}
				$input.css("color", "#000");
			});
			$input.blur(function() {
				var newText = $.trim($input.val());
				if (newText == "") {
					$input.val(oldText);
					$input.css("color", "#bebebe");
				}
			});
		});
	});
	//Tab切换
	$(".tab a").mouseover(function() {
		$(this).addClass("current").siblings().removeClass();
		$(".tab_list").eq($(".tab a").index(this)).show().siblings(".tab_list").hide();
	});
		//Tab切换(生鲜市场)
	$(".tab span").mouseover(function() {
		$(this).addClass("current").siblings().removeClass();
		$(".tab_list").eq($(".tab span").index(this)).show().siblings(".tab_list").hide();
	});
		//右侧浮动切换
	$(".rtnav li").mouseenter(function(){
		$(this).children(".tooltip").css("visibility","visible");
		$(this).children(".rightnav .list").css("display","block");
	});
	$(".rtnav li").mouseleave(function(){
		$(this).children(".tooltip").css("visibility","hidden");
		$(this).children(".rightnav .list").hide();

	});
});
//区域切换
var proStr = '河南省';
var cityStr = '开封市';
var countyStr = '祥符区';

function switchArea(obj) {
	if (obj.parentElement.id == 'pro') {
		str = '<h1>市域：</h1>';
		proStr = obj.innerHTML;
		var city = area[obj.innerHTML];
		for (var i = 0; i < city.length; i++) {
			for (var o in city[i]) {
				str += '<span onclick="switchArea(this)">' + o + '</span>';
			};
		}
		document.getElementById("city").innerHTML = str;
		//选中状态切换
		var cc = $("#pro span");
		for (var o in cc) {
			cc[o].className = '';
		}
		obj.className = "blue";
		$("#county").css("display", "none");
	} else if (obj.parentElement.id == 'city') {
		str = '<h1>县区：</h1>';
		cityStr = obj.innerHTML;
		var city = area[proStr];
		for (var i = 0; i < city.length; i++) {
			for (var o in city[i]) {
				if (cityStr == o) {
					var arr = city[i][o];
					for (var a in arr) {
						for (var b in arr[a]) {
							str += '<span onclick="switchArea(this)">' + b + '</span>';
						}
					};
				}
			}
		}
		str = str + '<div class="go" style=" margin-top:60px;"><a href="javaScript:subSwitch()">切&nbsp;&nbsp;换</a></div>';
		document.getElementById("county").innerHTML = str;
		//选中状态切换
		var cc = $("#city span");
		for (var o in cc) {
			cc[o].className = '';
		}
		obj.className = "blue";
		$("#county").css("display", "");
	} else {
		countyStr = obj.innerHTML;
		//选中状态切换
		var cc = $("#county span");
		for (var o in cc) {
			cc[o].className = '';
		}
		obj.className = "blue";
	}
}
function subSwitch() {
	$("#cityName").text(cityStr);
	$("#countyName").text(countyStr);
	$(".close-reveal-modal").click();
	$(".header").css(proStr + '/' + cityStr + '/' + countyStr + ') no-repeat center top');
}
$(function() {
	$('a[data-reveal-id]').on('click', function(e) {
		e.preventDefault();
		var modalLocation = $(this).attr('data-reveal-id');
		$('#' + modalLocation).reveal($(this).data());
	});
	$.fn.reveal = function(options) {
		var defaults = {
			animation: 'fadeAndPop',
			animationspeed: 300,
			closeonbackgroundclick: true,
			dismissmodalclass: 'close-reveal-modal'
		};
		var options = $.extend({}, defaults, options);
		return this.each(function() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
			var modal = $(this),
				topMeasure = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
				locked = false,
				modalBG = $('.reveal-modal-bg');
			if (modalBG.length == 0) {
				modalBG = $('<div class="reveal-modal-bg">').insertAfter(modal);
			}
			modal.on('reveal:open', function() {
				modalBG.off('click.modalEvent');
				$('.' + options.dismissmodalclass).off('click.modalEvent');
				if (!locked) {
					lockModal();
					if (options.animation == "fadeAndPop") {
						modal.css({
							'top': $(document).scrollTop() - topOffset,
							'opacity': 0,
							'visibility': 'visible'
						});
						modalBG.fadeIn(options.animationspeed / 2);
						modal.delay(options.animationspeed / 2).animate({
							"top": $(document).scrollTop() + topMeasure + 'px',
							"opacity": 1
						}, options.animationspeed, unlockModal());
					}
					if (options.animation == "fade") {
						modal.css({
							'opacity': 0,
							'visibility': 'visible',
							'top': $(document).scrollTop() + topMeasure
						});
						modalBG.fadeIn(options.animationspeed / 2);
						modal.delay(options.animationspeed / 2).animate({
							"opacity": 1
						}, options.animationspeed, unlockModal());
					}
					if (options.animation == "none") {
						modal.css({
							'visibility': 'visible',
							'top': $(document).scrollTop() + topMeasure
						});
						modalBG.css({
							"display": "block"
						});
						unlockModal()
					}
				}
				modal.off('reveal:open');
			});
			modal.on('reveal:close', function() {
				if (!locked) {
					lockModal();
					if (options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top": $(document).scrollTop() - topOffset + 'px',
							"opacity": 0
						}, options.animationspeed / 2, function() {
							modal.css({
								'top': topMeasure,
								'opacity': 1,
								'visibility': 'hidden'
							});
							unlockModal();
						});
					}
					if (options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity": 0
						}, options.animationspeed, function() {
							modal.css({
								'opacity': 1,
								'visibility': 'hidden',
								'top': topMeasure
							});
							unlockModal();
						});
					}
					if (options.animation == "none") {
						modal.css({
							'visibility': 'hidden',
							'top': topMeasure
						});
						modalBG.css({
							'display': 'none'
						});
					}
				}
				modal.off('reveal:close');
			});
			modal.trigger('reveal:open')
			var closeButton = $('.' + options.dismissmodalclass).on('click.modalEvent', function() {
				modal.trigger('reveal:close')
			});
			if (options.closeonbackgroundclick) {
				modalBG.css({
					"cursor": "pointer"
				})
				modalBG.on('click.modalEvent', function() {
					modal.trigger('reveal:close')
				});
			}
			$('body').keyup(function(e) {
				if (e.which === 27) {
					modal.trigger('reveal:close');
				}
			});

			function unlockModal() {
				locked = false;
			}

			function lockModal() {
				locked = true;
			}

		});
	}
});

