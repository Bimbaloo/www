$(document).ready(function(){


/* 初始自适应高度、宽度 */
    var $height=$("body").height()-120;
    var $width=$("body").width()-160;

    $(".content").height($height-690);
    //$(".content").height(200);

    $("#right").width($width).height($height);
    $("#left").height($height);

/* 切换“生产信息”和“异常列表”  */
    $(".production").on("click",function() {
            $(this).addClass("showcolor").siblings().removeClass("showcolor");
            $(".tables").addClass("hide");
            $(".table_production").removeClass("hide")
    })
    $(".abnormal").on("click",function() {
        $(this).addClass("showcolor").siblings().removeClass("showcolor");
        $(".tables").addClass("hide");
        $(".table_abnormal").removeClass("hide")
    });

/* 根据设备状态显示同颜色  */
if($("#zhuangtai").hasClass("normal")){
    $(".zhuangtai").eq(0).removeClass("hide")
}else if($("#zhuangtai").hasClass("mothballed")){
    $(".zhuangtai").eq(1).removeClass("hide")
}else if($("#zhuangtai").hasClass("Waste")){
    $(".zhuangtai").eq(2).removeClass("hide")
}else if($("#zhuangtai").hasClass("warning")){
    $(".zhuangtai").eq(3).removeClass("hide")
}

/* 根据设备状态字体颜色改变 */
    var text =  $("#guanli").html();
    var text1 =  $("#yunxing").html();
    if(text="正常"){
        $("#guanli").addClass("bule")
    }else if(text="异常"){
        $("#guanli").addClass("orange")
    }
    else if(text="封存"){
        $("#guanli").addClass("grey")
    }
    else if(text="报废"){
        $("#guanli").addClass("red")
    };

    if(text1="负载"){
        $("#yunxing").addClass("bule")
    }else if(text1="待机"){
        $("#yunxing").addClass("orange")
    }
    else if(text1="关机"){
        $("#yunxing").addClass("grey")
    }

    $("#menu li").not("#jqsm").click(function(){
        $(this).siblings().removeClass("thisli");
        $(this).addClass("thisli");

        if ($("#scjh").hasClass("thisli")){
            $("#right_scgy").attr("class","hide");
            $("#SPC").attr("class","hide");
            $("#right_scjh").attr("class","");
        };
        if ($("#gygl").hasClass("thisli")){
            $("#right_scjh").attr("class","hide");
            $("#SPC").attr("class","hide");
            $("#right_scgy").attr("class","");
        };
        if ($("#SPCleft").hasClass("thisli")){
            $("#right_scjh").attr("class","hide");
            $("#right_scgy").attr("class","hide");
            $("#SPC").attr("class","")
        };

    });



    /*点谁显示谁*/


});/*reday函数结束*/

/* 关闭modal窗口函数 */
function modalhide(){
    $(".btn").parentsUntil(".modal").parent().modal("hide")
}

function deleteTr(){
    $("#a1").remove();
}

function modalshow(){
    $("#sm").modal("show")
}


/*点检*/
function dianjian(id){
    alert("点检成功");
    $("#"+id).addClass("set1").removeClass("set");
    console.log()
}

