
/*
* 自己的js代码
* */
//入口函数
$(function () {
    var resize=function(){
        //    获取屏幕大小
        var windowWidth=$(window).width();
        var isSmailScreen=windowWidth<768;
//    获取全部的item,并且遍历
        var $items=$('#main_ad .carousel-inner .item').each(function (i,item) {
            var $item=$(item);
            var imgSrc=$item.data(isSmailScreen?'image-xs':'image-lg')
            $item.css('backgroundImage',"url('"+imgSrc+"')");
            if (isSmailScreen) {
                $item.html("<img src='" + imgSrc + "'>");
            } else {
              $item.empty();
            }
        });

        //特别推荐自动滑动条
        var AllWidth=50;
        // 获取总宽度
        $('#products > .container > .nav-tabs-parent > .nav-tabs li').each(function (index,ele) {
            AllWidth+=$(ele).width();
        });
//    设置.nav-tabs-parent的总宽度
        if ($(window).width()<AllWidth){
            $('#products > .container > .nav-tabs-parent').css({width:$(window).width()+'px',overflowX:'scroll'})
            $('#products > .container > .nav-tabs-parent > .nav-tabs').css({width:AllWidth+'px'});
        }

    }
    //将函数绑定到屏幕尺寸变化事件上，并执行一次
    $(window).on('resize',resize).trigger('resize');


});