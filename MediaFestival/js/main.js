$(function () {


    //根据浏览器高度设置字体大小
    $(window).resize(function () {

        var fontSize = 16 * (parseInt(document.documentElement.clientHeight) / 768);
        if (fontSize < 9) {
            fontSize = 9;
        }
        if (fontSize > 18) {
            fontSize = 18;
        }
        $('html').css({
            'font-size': fontSize + 'px'
        });
    })

})//结束