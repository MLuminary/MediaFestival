/**
 * Created by haoqin on 2017/5/14.
 */
(function () {


    //获取此时content的高度;
    var contentHeight = $('.content').height();
    //最大的高度
    var maxContentHeight = 610;
    var imgBox = [
        'center_bottom.jpg',
        'center_middle.jpg',
        'center_top.jpg',
        'left_bottom.jpg',
        'left_middle.jpg',
        'left_top.jpg',
        'right_top.jpg',
        'right_bottom.jpg'
    ];
    var resizeImg = [];
    //读取图片
    function loadPic(curr){
        var curImg = new Image();
        var file = './images/';
        curImg.onload = function(){
            resizeImg[imgBox[curr]]={width:curImg.width,height:curImg.height};
            adjustImg(imgBox[curr]);
            if(curr == imgBox.length-1){
                //图片加载完毕
                return;
            }else{
                loadPic(++curr);
            }
        };


        curImg.src= file + imgBox[curr];
    }

    loadPic(0);
    //调整图片大小
    function adjustImg(picName){

        var adjustHeight = resizeImg[picName].height * contentHeight / maxContentHeight;
        var adjustWidth = adjustHeight * resizeImg[picName].width / resizeImg[picName].height / 3 - 1;
        if(picName == 'center_middle.jpg'){
            adjustWidth*=3;
        }
        $('.'+picName.split('.')[0].split('_')[0] +' .'+ picName.split('.')[0].split('_')[1] +'').css({
            'width':adjustWidth +'px',
            'height':adjustHeight + 'px',
            'background-image': 'url(./images/'+picName+')'
        })
    }
    $(window).resize(function(){
        contentHeight = $('.content').height();
        for(var i =0;i<imgBox.length;i++){
            adjustImg(imgBox[i]);
        }
    })


    $('.part').bind('click',function(){
        if($(this).hasClass('showmask')){
            $('.mask').addClass('maskshow');
            $('.mask').addClass($(this).data('type'));
        }

    })
    $('.mask .close').click(function(){
        $('.mask').attr('class','mask');

    })


})();//主函数结束