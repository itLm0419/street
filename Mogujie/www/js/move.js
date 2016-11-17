'use strict'
;(function (){
    var top=0;
    var iSpeed=20;
    var count=0;
    var timerM=null;
    window.move=function (obj,iTarget){
        clearInterval(timerM);
        timerM=setInterval(function (){
            iSpeed+=(iTarget-top)/5;
            iSpeed*=0.8;
            top+=iSpeed;
            obj.css('top',top);
            if(Math.round(iSpeed)==0&&Math.round(top)==iTarget){
                clearInterval(timerM);
            }
        },16);
    }
})();