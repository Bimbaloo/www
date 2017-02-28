$(document).ready(function(){
    $("input[type!='checkbox']").focus(
        function(){
            $(this).parent().addClass("box1")
        }
    ).blur(
        function(){
            $(this).parent().removeClass("box1")
        }
    )














});
