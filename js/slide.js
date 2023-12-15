$(function(){
    var updownslider=0;
    var sliderPosition;
    setInterval(function(){
        if(updownslider<2){
            updownslider++;
        }else{
            updownslider=0;
        }sliderPosition=updownslider*(-300)+"px"
        $(".sliders").animate({top:sliderPosition},400);
    },3000);
})