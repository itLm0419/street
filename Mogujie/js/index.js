
//轮播图
$(function(){
    var iNow=0;
    var timer=null;
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
        clearInterval(timer);
    });
    clearInterval(timer);
    timer=setInterval(next,2000);
    $('.ad_LBT').children(0).mouseout(function(){
        $('.ad_LBT>a').css('display','none');
        clearInterval(timer);
        timer=setInterval(next,2000);
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

    var timer=null;
    $('.sch_li1').mouseover(function(){
        clearTimeout(timer);
        $('.sch_li2').css('display','block');
        $('.sch_li1 a img').attr('src','images/sans.png');
    });
    $('.sch_li1').mouseout(function(){
        clearTimeout(timer);
        $('.sch_li2').css('display','block');
        $('.sch_li1 a img').attr('src','images/sans.png');
        timer=setTimeout(function(){
            $('.sch_li2').css('display','none');
            $('.sch_li1 a img').attr('src','images/san.png');
        },200);
    });
    //$('.sch_li2').mouseover(function(){
    $('.sch_li2').mouseenter(function(){
        clearTimeout(timer);
        $(this).css('display','block');
        $('.sch_li1 a img').attr('src','images/sans.png');
        var $sch=$(this).prev().children().children();
        var $this=this;
        $(this).children().click(function(){
            $sch.html('搜'+$(this).html());
            $($this).css('display','none');
            $('.sch_li1 a img').attr('src','images/san.png');
        });
    });
   // $('.sch_li2').mouseout(function(){
    $('.sch_li2').mouseleave(function(){
        $(this).css('display','none');
        $('.sch_li1 a img').attr('src','images/san.png');
    });


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
    $('.Dj_top .timer').html('12');
    var oDate=new Date();
    var H=oDate.getHours();
    var M=oDate.getMinutes();
    var S=oDate.getSeconds();

    console.log(H,M,S);

});
