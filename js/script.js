$(document).ready(function(){
 if($(window).width() > 767){
    $("#img").attr("src" , "/images/desktop/image-night-arcade.jpg")
 }else{
   $("#img").attr("src" , "/images/mobile/image-deep-earth.jpg")
 }
})