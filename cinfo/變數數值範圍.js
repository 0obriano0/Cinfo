$(document).ready(function(){
    var text_animation = [1,2,3];
    var cmds_animation = [0,1,0];
    var text_list = text_animation.length;
    var text_list_timer = 0;
    $(".table_cmd_body>p").addClass("cmd_hide");
    var timer_1= setInterval(timedCount,1000);
    function timedCount(){
        $("#text_timer_"+text_animation[text_list_timer]).addClass("for_text_show");
        $(".table_cmd_body>#for_cmd_timer_"+cmds_animation[text_list_timer]).removeClass("cmd_hide");
        if(text_list_timer == 0)
            $("#text_timer_"+text_animation[text_list]).removeClass("for_text_show");
        else
            $("#text_timer_"+text_animation[(text_list_timer-1)]).removeClass("for_text_show");
        if(text_list_timer == text_list){
            text_list_timer = 0;
            $(".table_cmd_body>p").addClass("cmd_hide");
        }else{
            text_list_timer += 1;
        }
    }
});