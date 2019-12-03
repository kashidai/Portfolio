$('.Work-A-right a[href^="#"]').hover(function(){
    $(this).css("background-color", "yellow");//マウスをホバーした時の処理
}, function(){
    $(this).css("background-color", "pink");//マウスが離れた時の処理
});
