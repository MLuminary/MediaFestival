/**
 * Created by haoqin on 2017/5/16.
 */
(function(){
    var data = ['news'];
    //根据地址？后面的参数获取信息，实现两个页面的参数的传递
    function getRequest(){

        var request =  window.location.search;
        if(request){
            var dataType = request.split('=')[1];
            data = [dataType];
        }

    }

    getRequest();
    showContent();
    $('.item').bind('click',function(){
        $('.item').removeClass('on');
        if($(this).hasClass('on')){
            return;
        }
        data = [$(this).data('type')];
        showContent();
        $(this).addClass('on');
    })

    function showContent(){
        $('.item').removeClass('on')
        $('.wrap').fadeOut();
        $('.'+data[0]).fadeIn();
        $('.item').each(function(index,item){
            if($(item).data('type')==data[0]){
               $(item).addClass('on');
            }
        })
    }

})()//结束