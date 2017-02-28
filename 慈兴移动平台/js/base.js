$(document).ready(function(){

$("#checkname").on("click", 
  function(){ 
    if(this.checked){ 
        $("input[name='checkname']").prop('checked', true)
    }else{ 
        $("input[name='checkname']").prop('checked', false)
    } 
  } 
);
$("input[name='checkname']").click(
        function(){
            if ($("input[name='checkname']").prop("checked")==false) {
                $("#checkname").prop('checked', false)
            }else{
                $("#checkname").prop('checked', true)
            }
        }
    )

    


    /*点谁显示谁*/


});/*reday函数结束*/

/*菜单内容绑定*/
function showMenu(id){
        art = $("#"+id).attr("art");
        if(id!='logomin'&&id!='jqsm'){
            $("#"+id).siblings().not("#logomin").attr("class","");
            $("#"+id).siblings().not("#logomin").children(".nowShow").attr("class","nowShow bgBule hide");
            $("#"+id).addClass("frenchGrey");
            $("#"+id).children(".nowShow").attr("class","nowShow bgBule");
            $("#content"+art).siblings().attr("class","content hide");
            $("#content"+art).removeClass("hide")
        }else if(id=='jqsm'){
            var a = prompt("请输入单号");
            console.log(a)
        }
    }


/*滚动态插件*/
(function ($) {
        $(window).on("load", function () {
            $.mCustomScrollbar.defaults.theme = "dark-2"; //set "light-2" as the default theme
            $(".Scrollbar").mCustomScrollbar({
                axis: "yx",
                set_height:780
            });
            $(".Scrollbar5").mCustomScrollbar({
                axis: "yx",
                set_height:660
            });
            $(".Scrollbar6").mCustomScrollbar({
                axis: "yx",
                set_height:440
            });
        });
})(jQuery);