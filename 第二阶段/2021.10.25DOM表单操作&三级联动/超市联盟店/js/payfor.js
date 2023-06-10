// JavaScript Document
    $(function () {
        $("img.imgload").lazyload({ event: "scrollstop", effect: "fadeIn", threshold: 200 });
        //点击+ -按钮触发事件
        bindSub();
    });
    function showHtml(ele, arr) {
        ele.html(arr.join(''));
        ele.hide();
        ele.show("fast");
    }
    //验证数字的正则表达式
    var reg = /^([1-9]\d*)$/;
    //此段JS脚本调用未知
    function bindAdd() {
        $("input[lang='add']").click(function () {
            var ele = $(this).prev(".minicart_num");
            var v = ele.val();
            if (reg.test(v)) {
                v = parseInt(v) + 1;
                ele.val(v);
            } else {
                return;
            }
        });
        $("[lang='sub']").click(function () {
            var ele = $(this).next(".minicart_num");
            var v = ele.val();
            if (reg.test(v)) {
                v = parseInt(v) - 1;
                if (v == 0) {
                    return;
                }
                ele.val(v);
            } else {
                return;
            }
        });
    }
    //点击+ -按钮触发事件
    function bindSub() {
        $("input[lang='add1']").live("click", function () {
            var ele = $(this).prev(".minicart_num");
            var count = $(this).prev(".minicart_num").attr("count");
            var v = ele.val();
            if (reg.test(v)) {
                v = parseInt(v) + 1;
                if (parseInt(v) > parseInt(count)) {
                    //$(this).prev(".minicart_num").val(count);
                    return;
                }
                ele.val(v);
            } else {
                return;
            }
        });
        $("[lang='sub1']").live("click", function () {
            var ele = $(this).next(".minicart_num");
            var mincount = ele.attr("lang");
            var v = ele.val();
            if (reg.test(v)) {
                v = parseInt(v) - 1;
                if (v == 0) {
                    return;
                }
                //最低起订量
                if (v < mincount) {
                    return;
                }
                ele.val(v);
            } else {
                return;
            }
        });

        //update by:xuja
        //des:[新增]鼠标移出验证
        //updatetime:2015年07月22日 11:43:21
        $(".minicart_num").bind("blur", function () {
            var v = $(this).val();//输入值
            var min_count = $(this).attr("lang");//最小起订量
            $(this).val(v.replace(/\D/g, ''));
            if (v == "" || isNaN(v)) {
                $(this).val($(this).attr("blurlang"));
                return;
            }
            var inventory = $(this).attr("count");
            //输入值大于库存则默认库存量
            if (parseInt(v) > parseInt(inventory)) {
                $(this).val(inventory);
                return;
            }
            //输入值小于最低起订量则默认最低起订量
            if (parseInt(v) < parseInt(min_count)) {
                $(this).val(min_count);
                return;
            }
        });
    }