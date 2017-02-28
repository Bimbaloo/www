




$(document).ready(function(){
    $(".base_right").width($(window).width()-165); //初始化右边宽度
    $("#anav").width($(".base_right").width()-115); //初始化页签栏宽度
    /*一级菜单点击弹出二级和效果*/
    $(".list_1").click(
        function() {
            $(this).next(".list_2").toggle();      //二级菜单展开收拢
            var iconname=$(this).attr("iconname");
            var display = $(this).next(".list_2").eq(0).css("display");
            if (display=="none") {
                $(this).children("img").eq(0).attr("src", "images/"+iconname+".png");
                $(this).children("img").eq(1).attr("src", "images/left.png");
                $(this).css("backgroundColor", "#2f4050");

                $(this).children(".show").css("display","none");
                $(this).children("p").css("color","#a2a9bb");
                $(this).removeClass("played");

            } else {
                if($(".played").size()!=0)
                {
                    menuclose();
                    $(".played").removeClass("played");
                }

                $(this).css("backgroundColor","#1f2d3a") ;
                $(this).children("img").eq(0).attr("src", "images/"+iconname+"_1.png");
                $(this).children("img").eq(1).attr("src", "images/down_2.png");
                $(this).css("backgroundColor", "#1f2d3a");

                $(this).children(".show").css("display","block");
                $(this).children("p").css("color","#3197fc");
                $(this).addClass("played");
            }
            $(this).children("p").eq(0).attr("pre",$(this).children("p").eq(0).css("color"));
            $(this).children("img").eq(0).attr("pre",$(this).children("img").eq(0).attr("src")) ;
            $(this).children("img").eq(1).attr("pre",$(this).children("img").eq(1).attr("src")) ;

        }
    );
    $(".list_1").mouseenter(
        function(){
            $(this).css("background","#3197fc");

            var iconname=$(this).attr("iconname");
            //   $(this).children("p").addClass("list_1_p_1");
            $(this).children("img").eq(0).attr("pre",$(this).children("img").eq(0).attr("src")) ;

            $(this).children("p").eq(0).attr("pre",$(this).children("p").eq(0).css("color")) ;
            $(this).children("img").eq(0).attr("src","images/"+iconname+"_0.png");
            $(this).children("p").eq(0).css("color","white");


            var display = $(this).next(".list_2").eq(0).css("display");
            if (display!="none") {

                $(this).children("img").eq(1).attr("src","images/down_1.png");
            }
            else{
                $(this).children("img").eq(1).attr("pre",$(this).children("img").eq(1).attr("src")) ;

                $(this).children("img").eq(1).attr("src","images/left_1.png");
            }

        }
    ).mouseleave(
        function(){
            //$(this).children("p").removeClass("list_1_p_1");
            $(this).children("img").eq(0).attr("src",$(this).children("img").eq(0).attr("pre"));

            $(this).children("p").eq(0).css("color",$(this).children("p").eq(0).attr("pre"));
            $(this).css("background","#2f4050");

            var display = $(this).next(".list_2").eq(0).css("display");
            if (display!="none") {
                $(this).css("backgroundColor","#1f2d3a") ;
            }else{

            }  $(this).children("img").eq(1).attr("src",$(this).children("img").eq(1).attr("pre"));
        }
    )




/*屏幕自适应和左右移动*/
    $(".button").on("click",
        function(){
            var display =$(".base_left")[0].style.display == "block"?false:true;
            if (display) {
                $(".base_left").show().addClass("active_left");
                $(".min_left").hide().removeClass("active_left");
                $(".base_right").css({"width":$(window).width() - 165,"left":165}) ;
                $("#anav").width($(".base_right").width()-115);
            }

            else{
                $(".base_left").hide().removeClass("active_left");
                $(".min_left").show().addClass("active_left");
                $(".base_right").css({"width":$(window).width() - 87,"left": 87}) ;
               $("#anav").width($(".base_right").width()-115);
            }
        }
    )



/*三级菜单出现和消失*/           /*二级菜单效果变化*/
    $(".list_2 li ").on({
        mouseenter:
            function()
            {
                $(this).children(".icon_right_2").removeClass("hide");
                $(this).children("p").eq(0).addClass("list_1_p_1");
                $(this).children("img").eq(0).attr("src", "images/icon_2_0.png")
                var len = 0;
                $(this).children(".list_3").find("li").each(function(){
                    if($(this).find("p").text().length > len){
                        len = $(this).find("p").text().length;
                    }
                });
                $(this).children(".list_3").find("li").css("width",(len*14+60+40))
                if($(this).children(".list_3").find("li").length > 0){
                    $(this).children(".list_3").removeClass("hide");
                }
            },
        mouseleave:
            function()
            {
                $(this).children(".icon_right_2").addClass("hide");
                $(this).children("p").eq(0).removeClass("list_1_p_1");
                $(this).children("img").eq(0).attr("src", "images/icon_2.png")
                $(this).children(".list_3").addClass("hide")
            }
    });
    /*进入三级菜单，三级菜单变化*/
    $(".list_3 li").on({
        mouseenter:
            function()
            {
                $(this).addClass("list_3_1");
                $(this).children("p").eq(0).addClass("list_1_p_1");
                $(this).children("img").eq(0).attr("src", "images/icon_3_0.png")
            },
        mouseleave:
            function()
            {
                $(this).removeClass("list_3_1");
                $(this).children("p").eq(0).removeClass("list_1_p_1");
                $(this).children("img").eq(0).attr("src", "images/icon_3.png")
            }
    });
    /*进入三级菜单，二级菜单变化*/
    $(".list_3").on({
        mouseenter:
            function()
            {
                $(this).parent("li").addClass("li_2")
            },
        mouseleave:
            function()
            {
                $(this).parent("li").removeClass("li_2")
            }
    });

    /*页签自动生成*/
    $(".list_3").on("click",
        function(){
            $("#anav ul").children("li").find(".sign").removeClass("sign");
            $("#anav ul").append("<li onclick='clickfuntion(this)'><h4>"+$(this).find("p")[0].textContent+"</h4><div class='signdiv sign'></div><div class='noshow'></div></li>");

        }
    )

    $(".list").click(
        function(){
            $(this).children(".min_show").css("display","block")
        }
    )



    $("body").on("click",".noshow",function(){
        if(!$(this).parent("li").attr("pinned")){
            $(this).parent("li").prev().find(".signdiv").addClass("sign");
            $(this).parent("li").remove();
        }

    })
    $("#aright").click(function(){
        var divWidth = $("#anav").width();
        var ulWidth = 0;
        $("#anav ul").children("li").each(function(){
            ulWidth  += $(this).width();
        })

    })
/*原有右击功能屏蔽*/
    $(".anavtabs").on("mousedown",function(e){
        $(this).bind('contextmenu',function(e){
            return false;
        });
/*新的右击功能*/
       $(this).mouseup(function(e){
        //   return false;
            //如果按下的是右键，则执行函数
            if(3 == e.which){
                $(".right-click_1").bind('contextmenu',function(e){
                    return false;
                });
                $(".right-click_1").css({
                    "position": "absolute",
                    "left": e.pageX,
                    "top": e.pageY,
                    "z-index":99
                }).removeClass("hide");
           }
       });
    });
    /*鼠标离开右键菜单，菜单消失*/
$(".right-click_1").on(
    "mouseleave",function(){
        $(this).addClass("hide")
    }
)



    /*原有右击功能屏蔽*/
    $(".anavtabs_1").on("mousedown",function(e){
        $(this).bind('contextmenu',function(e){
            return false;
        });
        /*新的右击功能*/
        $(this).mouseup(function(e){
            //   return false;
            //如果按下的是右键，则执行函数
            if(3 == e.which){
                $(".right-click_2").bind('contextmenu',function(e){
                    return false;
                });
                $(".right-click_2").css({
                    "position": "absolute",
                    "left": e.pageX-160,
                    "top": e.pageY,
                    "z-index":99
                }).removeClass("hide");
            }
        });
    });
    /*鼠标离开右键菜单，菜单消失*/
    $(".right-click_2").on(
        "mouseleave",function(){
            $(this).addClass("hide")
        }
    )


});/*ready的结尾*/

/****************************************************************************************/

//alert($("div[name='left']").width())
$(window).resize(function () { //当浏览器大小变化时

    var offset = $(".active_left")[0].offsetWidth;
    var width=$(this).width()-offset;
    if(width<=820)
        width=820;
    $(".base_right").width(width);
    $("#anav").width(width-115);
})

/*点击页签，页签状态变化*/
function clickfuntion(obj)
{
    if($(obj).find(".sign").length == 0){
        $(obj).children("h4").addClass("h4_sign")
        $(obj).children(".signdiv").addClass("sign")
        $(obj).siblings().children(".signdiv").removeClass("sign")
        $(obj).siblings().children("h4").removeClass("h4_sign")
    }
}
//
$("#anav ul li").click(
    function(){
        //alert($(this).html())
      //  $(this).children(".sign").css("display","block");
        $(this).children("h4").addClass("h4_sign")
   //     $(this).siblings().children(".sign").css("display","none");
    //    $(this).siblings().children("h4").removeClass("h4_sign")
    }
)

//$(".noshow").on({"click":function(){alert("h")}})

function menuclose()
{
    var obj=$(".played");
    $(obj).next(".list_2").css("display","none");
    var iconname=$(obj).attr("iconname");
    $(obj).children("img").eq(0).attr("src", "images/"+iconname+".png");
    $(obj).children("img").eq(1).attr("src", "images/left.png");
    $(obj).css("backgroundColor", "#2f4050");

    $(obj).children(".show").css("display","none");
    $(obj).children("p").css("color","#a2a9bb");
    $(obj).removeClass("played");
}



