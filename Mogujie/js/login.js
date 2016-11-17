$(function(){
    $('.mod').click(function(){
        $('.mod').removeClass('active');
        $(this).addClass('active');
    });

    $('.p').children(0).focus(function(){
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

    $('#login').click=function(){
        alert(1);
    }
});