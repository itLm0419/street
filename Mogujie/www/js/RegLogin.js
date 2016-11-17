$(function(){
    $('.mod').click(function(){
        $('.mod').removeClass('active');
        $(this).addClass('active');
        $('form').removeClass('actives');
        $('form').eq($(this).index()).addClass('actives');
    });
   // $('.p').children().eq(0).focus(function(){
    $('.name').val('');
    $('.p').children(0).focus(function(){
        var $this=$(this);
        $(this).keyup(function(){
            if($this.val()){
                $this.next().css('display','none');
            }else {
                $this.next().css('display','block');
            }
        });
    });

    var re= /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
    var re2= /^\w+\@[0-9a-zA-Z\-]+(\.[a-zA-Z]{2,8}){1,2}$/;
    $('.name').blur(function(){
        if(re.test($(this).val()) || re2.test($(this).val())){
            $('#cuo').css('display','none');
        }else{
            $('#cuo').css('display','block');
        }
    });
    $('.name').focus(function(){
        $('#cuo').css('display','none');
    });


    $('#p').focus(function(){
        console.log(1);
        /* $this.focus;*/
    });



});