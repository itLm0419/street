

$(function(){

    //轮播图
    var iNow=0;
    var timerB=null;
    var $oOl=$('.ad_LBT').children().eq(3);//ol
    var $oUl=$('.ad_LBT').children().eq(0);//ul
    $oUl.children().eq(0).css({
        left:0,opacity:1
    });
    function tab(iNow){
        $oOl.children().attr('class','');
        $oOl.children().eq(iNow).attr('class','active');
    }
    var zIndex=100;
    function next(){
        zIndex++;
        $oUl.children().eq(iNow).animate({
            left:180,opacity:0
        });
        iNow++;
        if(iNow==$oUl.children().length)iNow=0;
        $oUl.children().eq(iNow).css({
            left:-180,zIndex:zIndex
        });
        $oUl.children().eq(iNow).animate({
            left:0,opacity:1
        });
        $('.prev').css('zIndex',zIndex);
        $('.next').css('zIndex',zIndex);
        $oOl.css('zIndex',zIndex);
        tab(iNow);
    }
    function prev(){
        zIndex++;
        $oUl.children().eq(iNow).animate({
            left:-180,opacity:0
        });
        iNow--;
        if(iNow==-1)iNow=$oUl.children().length-1;
        $oUl.children().eq(iNow).css({
            left:180,zIndex:zIndex
        });
        $oUl.children().eq(iNow).animate({
            left:0,opacity:1
        });
        $('.prev').css('zIndex',zIndex);
        $('.next').css('zIndex',zIndex);
        $oOl.css('zIndex',zIndex);
        tab(iNow);
    }
    $('.prev').click(function(){
        prev();
    });
    $('.next').click(function(){
        next();
    });
    $oOl.children().mouseover(function(){
        if($(this).index()>iNow){
            $oUl.children().eq(iNow).animate({
               left:180,opacity:0
            });
            $oUl.children().eq($(this).index()).css('left',-180);
            $oUl.children().eq($(this).index()).animate({
                left:0,opacity:1
            });
        }else if($(this).index()<iNow){
            $oUl.children().eq(iNow).animate({
                left:-180,opacity:0
            });
            $oUl.children().eq($(this).index()).css('left',180);
            $oUl.children().eq($(this).index()).animate({
                left:0,opacity:1
            });
        }
        tab($(this).index());
        iNow=$(this).index();
    });
    $('.ad_LBT').children(0).mouseover(function(){
        $('.ad_LBT>a').css('display','block');
        clearInterval(timerB);
    });
    clearInterval(timerB);
    timerB=setInterval(next,3000);
    $('.ad_LBT').children(0).mouseout(function(){
        $('.ad_LBT>a').css('display','none');
        clearInterval(timerB);
        timerB=setInterval(next,3000);
    });

    //.ad .ad_left li>dl:hover{width:226px;
    // border-top:1px solid #cfcfcf;border-top:1px solid #cfcfcf;}

    //nav
    $('.ad_left ul').children().mouseover(function(){
        if ($(this).index()==0){
            $(this).children().eq(0).css({
                width:'226',zIndex:2*zIndex,borderTop:0,borderBottom:'1px solid #cfcfcf'
            });
        }else {
            $(this).children().eq(0).css({
                width:'226',zIndex:2*zIndex,borderTop:'1px solid #cfcfcf',borderBottom:'1px solid #cfcfcf'
            });
        }
        $(this).children().eq(1).css({
            display:'block',zIndex:2*zIndex-1
        });

        $(this).prev().children().eq(0).css({
            borderBottom:0
        });

    });
    $('.ad_left ul').children().mouseout(function(){
        $(this).children().eq(1).css('display','none');
        $(this).children().eq(0).css({
            width:'225',borderTop:0,borderBottom:'1px dashed #c7c7c7'
        });
        $(this).prev().children().eq(0).css({
            borderBottom:'1px dashed #c7c7c7'
        });
    });


    //搜索类型
    $('.sch_li1').mouseenter(function(){
        $('.sch_li1 span').css('display','block');
        $('.sch_li1 a img').attr('src','images/sans.png');
    });
    $('.sch_li1').mouseleave(function(){
        $('.sch_li1 span').css('display','none');
        $('.sch_li1 a img').attr('src','images/san.png');
    });
    $('.sch_li1 span').mouseenter(function(){
        var $sch=$(this).parent().children().eq(0).children().eq(0);
        var $this=this;
        $(this).children().click(function(){
            $sch.html('搜'+$(this).html());
            $sch.prev().attr('src','images/san.png');
            $($this).css('display','none');
        });
    });

    $('.sch_li1 span').mouseleave(function(){
        $(this).css('display','none');
        $('.sch_li1 a img').attr('src','images/san.png');
    });


    //搜索框
    $('.sch input').focus(function(){
        var _this=this;
        $(this).keyup(function(){
            if($(_this).val()){
                $(_this).next().css('display','none');
            }else {
                $(_this).next().css('display','block');
            }
        });
        $(this).next().click(function(){
            $(_this).focus();
        });
    });

    //倒计时
    ;(function(){
        var oDate = new Date();
        var Ms=oDate.getTime()+5400*1000;
        function countDown(){
            var now = new Date();
            var ms = now.getTime();
            var s = parseInt((Ms-ms)/1000);
            var d = parseInt(s/86400);
            s%=86400;
            var h = parseInt(s/3600);
            s%=3600;
            var m = parseInt(s/60);
            s%=60;
            $('.Dj_top .timer').eq(2).html(toDou(h));
            $('.Dj_top .timer').eq(1).html(toDou(m));
            $('.Dj_top .timer').eq(0).html(toDou(s));
        }
        countDown();
        setInterval(countDown,1000);

        function toDou(n){
            return n<10?'0'+n:''+n;
        }
    })();

    //穿墙
    $('.model_2 .cont_left ul li,.content .model_1 .t_q ul li div:nth-child(1)').each(function(index,item){
        through($(item));
    });

    //回到顶部
    var bOk=false;
    var timerT=null;
    var $count=Math.floor(2000/30);
    $(window).scroll(function(){
        if(bOk){
            clearInterval(timerT);
        }
        bOk=true;
        if($(document).scrollTop()>0) {
            $('.nav_rigth span').css('display','block');
        }else if($(document).scrollTop()==0){
            $('.nav_rigth span').css('display','none');
        }
        //吸顶条
        // $(window).height()可视区域的高度。
        if($(document).scrollTop()>700){
            $('.mark').css('display','block');
            $('.floor').css('display','block');
        }else if ($(document).scrollTop()<=700){
            $('.mark').css('display','none');
            $('.floor').css('display','none');
        }
    });
    $('.nav_rigth span').click(function(){
        var n=0;
        var $scrollTop=$(document).scrollTop();
        var $start=$scrollTop;
        var $dis=0-$scrollTop;
        timerT=setInterval(function(){
            bOk=false;
            n++;
            var a=1-n/$count;
            var cur=$start+$dis*(1-a*a*a);
            $(document).scrollTop(cur);
            if(n==$count){
                clearInterval(timerT);
            }
        },30);
    });

    //弹性菜单
    ;(function(){
        var pos=0;
        var oPos=$('#pos');
        $('.floor li').mouseenter(function(){
            move(oPos,$(this).position().top);
           // $(this).children().css('color','#fff');
        });
        $('.floor li').mouseleave(function(){
            move(oPos,pos);
            //字体颜色的改变 没有成功
            /* var t=Math.ceil(oPos.position().top/$('.floor li').outerHeight())-1;
             /!* console.log(oPos.position().top,$('.floor li').outerHeight());*!/
             $('.floor li').eq(t).children().css('color','#fff');*/
        });
        $('.floor li').click(function(){
            pos=$(this).position().top;
            move(oPos,pos);
        });
    })();

    //飞入购物车
    ;(function(){
        var offset = $('#end').position();
        var offset2=$('#end2').position();
        $(".model_2 .cont_right p span").click(function(event){
            var $this = $(this);
            var img = $this.parent().parent().find('img').attr('src');
            var flyer = $('<img class="u-flyer" src="'+img+'">');
            flyer.fly({
                start: {
                    left: event.clientX,
                    top: event.clientY
                },
                end: {
                    left: 1315,
                    top: offset.top+50,
                    width: 0,
                    height: 0
                },
                onEnd: function(){
                    $("#msg").show().animate({width: '50px'}, 200).fadeOut(1000);
                    $this.children().css("cursor","default");
                    $this.css({'background':'#ccc',"cursor":"default"}).removeClass('orange').unbind('click');
                     this.destory();
                }
            });
        });

        $(".content .model_1 .t_q ul li div:nth-child(1) a,.content .model_2 .cont_left ul li span a").click(function(event){
            var $this = $(this);
            var img = $this.parent().parent().next().find('img').attr('src') || $this.parent().parent().find('img').attr('src');
            var flyer = $('<img class="u-flyer" src="'+img+'">');
            flyer.fly({
                start: {
                    left: event.clientX,
                    top: event.clientY
                },
                end: {
                    left: 1315,
                    top: offset2.top+50,
                    width: 0,
                    height: 0
                },
                onEnd: function(){
                    $("#msg2").show().animate({width: '50px'}, 200).fadeOut(1000);
                    $this.children().css("cursor","default");
                    $this.css({'background':'#ccc',"cursor":"default"}).removeClass('orange').unbind('click');
                    this.destory();
                }
            });
        });
    })();


    //
    $('.nav_rigth li').mouseenter(function(){
        var H=$(this).position().top;
        $(this).find('div').css('display','block').animate({opacity:1,top:H});
    });
    $('.nav_rigth li').mouseleave(function(){
        $(this).find('div').css('display','none').animate({opacity:0,top:0});
    });


    //cookie
    if (getCookie('bOk')){
        var k=getCookie('name');
        $('.cookie').html('<a href="javascript:;" id="TC">[退出]</a><p>'+k+'你好</p>');
    }
    $('#TC').click(function(){
        if (confirm('确定退出')){
            removeCookie('bOk');
            removeCookie('name');
            $('.cookie').html('<a href="reg.html">注册</a>'+
                '<a href="login.html">登录</a>');
        }

    });


    //购物车
    $('#GW').click(function(){
       /* if (getCookie('bOk')){
            $('#mark').css('display','block');
            $('.buyCar').css('display','block');
        }else{
            alert('请先登陆');
        }*/
        $('#mark').css('display','block');
        $('.buyCar').css('display','block');

    });
    $('#back').click(function(){
        $('#mark').css('display','none');
        $('.buyCar').css('display','none');
    });

    $(function(){
        $('.all').click(function(){
            if($(this).attr('checked')){
                $('.choose').attr('checked',$(this).attr('checked'));
            }else {
                $('.choose').attr('checked',false);
            }
        });
        var n=0;
        $('.choose').each(function(index,item){
            $(item).click(function(){
                if($(this).attr('checked')){
                    n++;
                    console.log(n);
                }else{
                    n--;
                }
                if(n==$('.choose').length){
                    $('.all').attr('checked',true);
                }else{
                    $('.all').attr('checked',false);
                }
            });
        });
    });
});

//穿墙
function getDir(obj,ev){
    var x=obj.offset().left+obj.width()/2-ev.pageX;
    var y=obj.offset().top+obj.height()/2-ev.pageY;
    return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}
function through(obj){
    var $oS=obj.children().eq(0);
    var H=$oS.height();
    var W=$oS.width();
    obj.mouseenter(function(ev){
        var oEvent=ev||event;
        switch (getDir(obj,oEvent)){
            case 0:
                $oS.css({'left':W, 'top':0});
                break;
            case 1:
                $oS.css({'left':0,'top':H});
                break;
            case 2:
                $oS.css({'left':-W,'top':0});
                break;
            case 3:
                $oS.css({'left':0,'top':-H
                });
                break;
        }
        $oS.animate({left:0,top:0});
    });
    obj.mouseleave(function(ev){
        var oEvent=ev||event;
        switch (getDir(obj,oEvent)){
            case 0:
                $oS.animate({left:W,top:0});
                break;
            case 1:
                $oS.animate({left:0,top:H});
                break;
            case 2:
                $oS.animate({left:-W,top:0});
                break;
            case 3:
                $oS.animate({left:0,top:-H});
                break;
        }
    });
}