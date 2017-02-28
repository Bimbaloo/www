
    var offset = $(".active_left")[0].offsetWidth;
    var $allWidth =window.screen.availWidth;
    var $width = $allWidth-offset-5;
    var $height = $(".base_right").height();
    


    var menuoffset=200;

$(document).ready(function(){

    
   
 //   $(".tabs").height($height-147); // 初始化“tabs”高度
    $(".base_right").width($width)
//    $("#container").width($(window).width()-165);  // 初始化“iframe”宽度
    $("#container").height($height-126); // 初始化“iframe”高度
    $a = $("#container").height();
    $(".base_right").width($width); // 初始化右边宽度
    $("#anav").width($width-115); // 初始化页签栏宽度
    
    /* 一级菜单点击弹出二级和效果 */    
    $(".list_1").mouseenter(  
            
            function(){
                
                var iconname=$(this).attr("iconname");                              //对应的类名用 "iconname" 代替
                $(this).addClass("liBgColorBule");                                  //背景变成蓝色                
                $(this).children("p").eq(0).addClass("white") ;                     //文字颜色变成白色
                var display = $(this).next(".list_2").eq(0).css("display");         //对应二级的"display"状态   
                var $iconMain =$(this).children(".iconBigBox").eq(0)                // $iconMain 指代 icon 的图片对象      
                var $img = $(this).children(".imgBox").eq(0)                        // $img 指代箭头的图片对象     
                $iconMain.addClass("iconMain_12")                                   //icon换成白色，并记入原来的状态
                
                if (display!="none") {                                              //二级展开时             
                    $img.addClass("downImg_1")                                      //箭头换成相应蓝色，并记入原来的状态 
                }
                else{
                    $img.addClass("leftImg_1")                                      //箭头换成相应蓝色，并记入原来的状态 
                }

            }
        ).mouseleave(
            function(){
                var display = $(this).next(".list_2").eq(0).css("display");         //对应二级的"display"状态   
                var iconname=$(this).attr("iconname"); 
                var $iconMain =$(this).children(".iconBigBox").eq(0)                // $iconMain 指代 icon 的图片对象      
                var $img = $(this).children(".imgBox").eq(0)                        // $img 指代箭头的图片对象  
                var $p = $(this).children("p").eq(0)
                $(this).removeClass("liBgColorBule");                               //背景变成原状
                if (display!="none"){                                               //二级展开时 
                    $iconMain.attr("class",iconname+" iconBigBox iconMain_11")      //icon变成原状
                    $img.attr("class","imgBox junk downImg")                        //箭头变成原状
                    $p.attr("class","bule")
                }else{                                                              //二级没有展开时 
                    $iconMain.attr("class",iconname+" iconBigBox iconMain_10")      //icon变成原状
                    $img.attr("class","imgBox junk leftImg")                        //箭头变成原状
                    $p.attr("class","gary")
                }

            }
        )
    $(".list_1").click(
            function() {
                $(this).next(".list_2").toggle();                                                                   // 二级菜单展开收拢
                var iconname=$(this).attr("iconname");                                                              // 记录所属class
                var display = $(this).next(".list_2").eq(0).css("display");                                         //对应二级的"display"状态   
                var $iconMain =$(this).children(".iconBigBox").eq(0)                                                // $iconMain 指代 icon 的图片对象      
                var $img = $(this).children(".imgBox").eq(0)                                                        // $img 指代箭头的图片对象     
                if (display=="none") {                                                                              // 二级展开时
                    $("#displayarea").removeAttr("id");                                                 
                    $img.attr("class","imgBox junk leftImg_1");
                    $(this).removeClass("liBgImg");
                    $(this).children(".show").attr("class","show");
                    $(this).removeClass("played");

                } else {
                    if($(".played").size()!=0)
                    {
                        menuclose();
                        $(".played").removeClass("played");
                    }
                    $(this).addClass("liBgImg");  //背景色替换为图片
                    $img.attr("class","imgBox junk downImg_1");  //箭头换方向             
                    $(this).children(".show").addClass("block");   //蓝色标记显示
                    $(this).addClass("played");
                }
            }
        );
        
    
    

$("#alertdiv2").css({"margin-left": $("#alertdiv2").width()/2*(-1)-20,"margin-top": $("#alertdiv2").height()/2*(-1)-20});

    $(".up").on({
        mousedown:
            function()
            {
                $(this).css("background","#305a84") ;
                $(this).children("img").attr("src",path+"/images/default/up_1.png");
            },
        mouseup:
            function()
            {
                $(this).css("background","#2f4050");
                $(this).children("img").attr("src",path+"/images/default/up.png");
            }
    });
    
    $(".down").on({
        mousedown:
            function()
            {
                $(this).css("background","#305a84") ;
                $(this).children("img").attr("src",path+"/images/default/down_1.png");
            },
        mouseup:
            function()
            {
                $(this).css("background","#2f4050");
                $(this).children("img").attr("src",path+"/images/default/down.png");
            }
    })

    

    $(".down").click(
        function(){
            if($(".base_left").css("display")=="block"){         //大menu
            if($("#menu").children("li").last().offset().top<=menuoffset)
                {
                return false;
                }
            
            
            
            var value=$("#menu").css("bottom");
            if(value!="auto")
                {
                value=value.split("px")[0];
                value=47+parseInt(value);
                }
            
            else
                value=47;
            $("#menu").animate({bottom:value+'px'},100);
        }
               else  //小mune
                {
                
                    if($("#minimenu").children("li").last().offset().top<=menuoffset)
                    {
                    return false;
                    }
                
                
                
                var value=$("#minimenu").css("bottom");
                if(value!="auto")
                    {
                    value=value.split("px")[0];
                    value=80+parseInt(value);
                    }
                
                else
                    value=80;
                $("#minimenu").animate({bottom:value+'px'},100);
                   
                   
                }   
        }
     
        )
        

      $(".up").click(
        function(){
            if($(".base_left").css("display")=="block"){         //大menu
            var value=$("#menu").css("bottom");
            value=value.split("px")[0];
            if(value-47<0||value=="auto")
                {
                return false;
                }
            
            if(value!="auto")
                {
                
                value=parseInt(value)-47;
                }
            
            else
                value=-47;
            $("#menu").animate({bottom:value+'px'},100);
        }
               else
                {
                
                    var value=$("#minimenu").css("bottom");
                    value=value.split("px")[0];
                    if(value-80<0||value=="auto")
                        {
                        return false;
                        }
                    
                    if(value!="auto")
                        {
                        
                        value=parseInt(value)-80;
                        }
                    
                    else
                        value=-80;
                    $("#minimenu").animate({bottom:value+'px'},100);
                   
                }}
        )

    

/* 屏幕自适应和左右移动 */
   $(".button").on({
        mousedown:
            function(e){
                if(1 == e.which){                                                                                       //左键按下时
               $(".base_top_main .button").removeClass("buttonImg").addClass("buttonImg1")
            }           
        },
        mouseup:
            function(e){
                if (1 == e.which) {                                                                                     //左键松开时
                            $(".base_top_main .button").removeClass("buttonImg1").addClass("buttonImg")
                                var display =$(".base_left")[0].style.display == "block"?false:true;
                                if (display) {
                                    $(".base_left").show().addClass("active_left");
                                    $(".min_left").hide().removeClass("active_left");
                                    $(".base_right").css({"width":$(window).width() - 165,"left":165}) ;
                                    $("#anav").width($width-115);
                                }
                    
                                else{
                                    
                                    $(".base_left").hide().removeClass("active_left");
                                    $(".min_left").show().addClass("active_left");
                                    $(".base_right").css({"width":$(window).width() - 96,"left": 96}) ;
                                    $("#anav").width($width-115);
                                    
                                    $(".choosen").css("display","none");
                                 
                                    $(".choosen").parent().eq(0).removeClass("showcolor");
                                    
                                    $(".choosen").removeClass("choosen");  
                                    if($(".played").length!=0){
                                    var pos=($(".played").parent().index())/2;  // 每个li元素后有一个js 
                                    $(".list").eq(pos).addClass("showcolor");           
                                    $(".list").eq(pos).children(".min_show").addClass("choosen");
                                    $(".list").eq(pos).children(".min_show").css("display","block");
                                    var value=pos*80;
                                    $(".list").parent().parent().animate({bottom:value+'px'},100);
                                    }
                                }
                          }      
            }
            
        
    })
 
 
     $(".list_2 li ").on("click",
                function(){
              
          var $this = $(this)
         click_replacement($this);                                                      //重置其他二级
         $(".unhide").addClass("hide");
         $(".unhide").removeClass("unhide");
         $(".icon_right_2").addClass("hide");
         $(this).siblings(".white").removeClass("white");
         
         $(this).children("p").eq(0).addClass("list_1_p_1");
        
         var len = 0;
         $(this).addClass("li_2");
         $(this).children(".list_3").find("li").each(function(){
             if($(this).find("p").text().length > len){
                 len = $(this).find("p").text().length;
             }
         });
         $(this).removeClass("liBgColorBule");
         $(this).children(".list_3").find("li").css("width",(len*14+60+40))  //动态做三级菜单的宽度
         if($(this).children(".list_3").find("li").length > 0){
            var value=$(this).offset().top;         
            var wid=$(this).children(".list_3").find("li").css("width")
            $(this).children(".list_3").css("width",wid);
            $(this).children(".list_3").css("top",value);
            $(this).children(".list_3").addClass("unhide");
            $(this).children(".list_3").removeClass("hide");
            $(this).children(".icon_right_2").removeClass("hide");
            $(this).children("div").children("div").attr('id',"displayarea") 
         }
     })
     
    


/* 三级菜单出现和消失 */           /* 二级菜单效果变化 */
    $(".list_2 li ").on({
        mouseenter:
            function()
            {
    
        if($("li[in='true']").length!=0 &&$(this).parents('div').eq(0).attr('id')!="displayarea" )   //2级才进去
                { 
                
                
                   var iconname=$("li[in='true']").attr("iconname");
                   $("li[in='true']").children(".icon_right_2").addClass("hide");
                   $("li[in='true']").children("p").eq(0).removeClass("list_1_p_1");
                   $("li[in='true']").children("img").eq(0).attr("src", path+"/images/default/menu/"+iconname+"_01.png")
                   $("li[in='true']").children(".list_3").addClass("hide");
                   $("li[in='true']").children(".list_3").removeClass("unhide");               ///需要修改
                
                
                $("li[in='true']").attr("in","");
                
                }
        $(this).addClass("liBgColorBule");
                $("#displayarea").removeAttr("id")
                var iconname=$(this).attr("iconname");
               
                $(this).children("p").eq(0).addClass("white");
                $(this).children(".icon_2").eq(0).attr("class","icon_2 iconBox iconMain_2 "+iconname)
  
              
            },
        mouseleave:
            function()
            {   
            if($(this).attr("in")!="true")
                {
                var iconname=$(this).attr("iconname");
                if($(this).hasClass("li_2"))
                    {
                    
                    }
                else
                    {
                    $(this).children(".icon_right_2").addClass("hide");
                    $(this).children("p").eq(0).removeClass("white");
                    $(this).children(".icon_2").eq(0).attr("class","icon_2 iconBox iconMain_0 "+iconname)
                    }
                $(this).removeClass("liBgColorBule");
            
                if( $(this).parent().parent().attr('id')=="displayarea")
                $(this).parent().parents("li").eq(0).attr("in","true");
                
                $(this).children("div").children("div").attr('id',"")  //后加的
                
                }
            else
                {
                  mouseleave_2($(this));
                }
            
            return false;
                
                
            }
    });
    /* 进入三级菜单，三级菜单变化 */
    $(".list_3 li").on({
        mouseenter:
            function()
            {
            mouseenter_1($(this));
         mouseenter_2($(this))
            return false;
           },
        mouseleave:
            function()
            {
            mouseleave_1($(this));
            return false;
           
                
            }
    });
/*     进入三级菜单，二级菜单变化 
    $(".list_3").on({
        mouseenter:
            function()
            {
            console.log("33");
            // return false;
            },
        mouseleave:
            function()
            {
            mouseleave_2($(this));
return false;
            }
    });
*/
    /* 进入三级菜单，三级菜单变化 */
    var mouseenter_1 = function($this){

        $this.addClass("list_3_1");
        $this.find("p").eq(0).attr("class","white");
        $this.find(".icon_3").removeClass("icon_0").addClass("icon_1");
        
        
        var height=$(".base_right").css("height").split("px")[0];  // 3级菜单的滚动
        
        var ulMenu=$this.parent();

        ulMenu.parent().attr('id',"displayarea");
          var ulHeight=ulMenu.css("height");
        ulHeight=ulHeight.split("px")[0];
        height=height-$this.parent().parent().parent().parent().offset().top;
        
        
        if(ulHeight>height)
        {
            
        
        
        height=height+'px';
        
        $("#displayarea").css("height",height);
        $("#displayarea").css("display","block");
        $("#displayarea").css("position","relative");
        $("#displayarea").css("width",ulMenu.css("width"));
        ulMenu.css("height",ulHeight);
        ulMenu.css("display","block");
        }
        else
            {
            
            height=ulHeight+'px';
            
            $("#displayarea").css("height",height);
            $("#displayarea").css("display","block");
            $("#displayarea").css("position","relative");
            $("#displayarea").css("width",ulMenu.css("width"));
            ulMenu.css("height",ulHeight);
            ulMenu.css("display","block");
            }
        
        
    
    }
    /* 进入三级菜单，二级菜单变化 */
    var mouseenter_2 = function($this){
        $this.parents("li").addClass("li_2")
        
    };
    /* 移出三级菜单，三级菜单变化 */
    var mouseleave_1 = function($this){
        $this.removeClass("list_3_1");
        $this.find("p").eq(0).attr("class","gary");
        $this.find(".icon_3").removeClass("icon_1").addClass("icon_0");
    }
    /* 移出三级菜单，二级菜单变化 */
    var mouseleave_2 = function($this){
        $this.parents("li").eq(0).removeClass("li_2");
        $("#displayarea").children().css("top",0);
       
    }
    /* 点击二级，其他的变回原样 */
    var click_replacement = function($this){
        
        var arr =$this.siblings("li");
        for(var i=0;i<arr.length;i++){
        var $siblings =$this.siblings("li").eq(i);
        var iconname=$siblings.attr("iconname"); 
        $siblings.attr("class","")
        $siblings.children(".icon_2").eq(0).attr("class","icon_2 iconBox iconMain_0 "+iconname);
        $siblings.children(".gary").eq(0).attr("class","gary");
        $siblings.children(".icon_right_2").eq(0).attr("class","icon_right_2 imgBox junk rightImg_1 hide");
        $siblings.children(".list_3 ").eq(0).attr("class","list_3 hide");
        }
    }

    
$(".list_3").children().on("mousewheel DOMMouseScroll", function (e) {           // 3级菜单的滚动
        

    
    
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome
                                                                                                    // & ie
                    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

        
        
       $("#displayarea").css("width",$(this).children().eq(0).css("width"));
        var ulMenu=$("#displayarea").children();
        ulMenu.css("position","absolute");
        
        var height1=Number($("#displayarea").css("height").split("px")[0]);
        var height2=Number(ulMenu.css("height").split("px")[0]);
        if( height1<height2)
            {
        
        
        var beishu=parseInt((e.timeStamp)/1000);
        beishu =beishu>1?2:1;
        if (delta > 0) {
            // 向上滚
            
            var value=ulMenu.css("top");
            if(value=="auto")
                {
                value="0px";
                }
                
                value=value.split("px")[0];
            
   
            var liHeight=Number(ulMenu.children("li").css("height").split("px")[0]);
            var maxDistance=$("#displayarea").offset().top-ulMenu.offset().top; 
        //  var maxDistance=Number(ulMenu.css("height").split("px")[0])-Number(ulMenu.parent().css("height").split("px")[0]);   //menu比div长的长度即最大可位移高度
        //  var maxDistance=ulMenu.children("li").last().offset().top+liHeight-Number($(".base_right").css("height").split("px")[0]); //menu底部距离显示底部的距离即最大可位移高度
            if(maxDistance-47*beishu<0)
                {
                
            
                ulMenu.animate({top:"0px"},10);
                return;
                }
            
            else 
                {
                value=maxDistance-47*beishu;
                }
            
            
            ulMenu.animate({top:-value+'px'},10);
            
        
        } else if (delta < 0) {
            // 向下滚
      
            var liHeight=Number(ulMenu.children("li").css("height").split("px")[0]);
            var maxDistance=ulMenu.children("li").last().offset().top+liHeight-Number($(".base_right").css("height").split("px")[0]); //menu底部距离显示底部的距离即最大可位移高度
            if(maxDistance<0)
            {
            return false;
            }
        
        
        
        var value=ulMenu.css("top");
        if(value=="auto")
            {
            value="0px";
            }
            
            value=value.split("px")[0];
            value2=parseInt(value)-47*beishu;
            if(value2+maxDistance<0)
                {
                value2=value-maxDistance;
                }
            
        ulMenu.animate({top:value2+'px'},10);
           
        }
            }
    });
    
    
  
      $("#menu") //大菜单的滑轮 
      . on("mousewheel DOMMouseScroll", function (e) {
      
            if($("#displayarea").length==0)
            {
        
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome
            // & ie
(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
      
      
      $(".unhide").addClass("hide"); $(".unhide").removeClass("unhide");
      
      var beishu=parseInt((e.timeStamp)/1000); beishu =beishu>1?2:1; if (delta >
      0) { // 向上滚
      
      
      var value=$("#menu").css("bottom"); value=value.split("px")[0];
      if(value-47*beishu<0||value=="auto") { value=0;
      $("#menu").animate({bottom:0},10); return; }
      
      if(value!="auto") {
      
      value=parseInt(value)-47*beishu; }
      
      else value=-47*beishu; $("#menu").animate({bottom:value+'px'},10);
      
       } else if (delta < 0) { // 向下滚
      if($("#menu").children("li").last().offset().top<=menuoffset) { return false; }
      
      
      
      var value=$("#menu").css("bottom"); if(value!="auto") {
      value=value.split("px")[0]; value=47*beishu+parseInt(value); }
      
      else value=47*beishu; $("#menu").animate({bottom:value+'px'},10);
       } }
      
      
});
     
    
    $(".min_left_main").find("ul").eq(0)  // 小菜单的滑轮
    .
   on("mousewheel DOMMouseScroll", function (e) {
        
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome
                                                                                                    // & ie
                    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

        var minmenu=$(".min_left_main").find("ul").eq(0);
        var beishu=parseInt((e.timeStamp)/1000);
        beishu =beishu>1?2:1;
        if (delta > 0) {
            // 向上滚
            
   
            var value=minmenu.css("bottom");
            value=value.split("px")[0];
            if(value-47*beishu<0||value=="auto")
                {
                value=0;
                minmenu.animate({bottom:0},10);
                return;
                }
            
            if(value!="auto")
                {
                
                value=parseInt(value)-47*beishu;
                }
            
            else
                value=-47*beishu;
            minmenu.animate({bottom:value+'px'},10);
            
        
        } else if (delta < 0) {
            // 向下滚
            if(minmenu.children("li").last().offset().top<=menuoffset)
            {
            return false;
            }
        
        
        
        var value=minmenu.css("bottom");
        if(value!="auto")
            {
            value=value.split("px")[0];
            value=47*beishu+parseInt(value);
            }
        
        else
            value=47*beishu;
        minmenu.animate({bottom:value+'px'},10);
           
        }
    });
    
    
    /* 页签自动生成 */
    $(".list_2 li").on("click",
            function(){
                if($(this).children("a").size()==0){
                    return;
                }
                 var rel = $(this).children("a").attr("rel");
                 
                 
                 
                 if($("#anav ul").find("[rel='"+rel+"']").find(".signdiv").length==0)
                     {
                     

                    $(this).attr("actived",true);
                    $("#anav ul").append("<li onclick='clickfuntion(this)' rel='"+rel+"' class='navtab'><h4>"+$(this).find("p").html()+"</h4><div class='signdiv'></div><div class='noshow'></div></li>");
                    createTab(rel,$(this).children("a").attr("url"));
                    $("#anav ul").find("[rel='"+rel+"']").find(".signdiv").addClass("sign");
                    $("#anav ul").find("[rel='"+rel+"']").attr("active",true);
                    var ulWidth = $("#anav").width();
                    if(computeTabWidth()-ulWidth > 0){
                        leftHide();
                    }
                    showTab(rel);
                }else{
                    $("#anav ul").find("[rel='"+rel+"']").find(".signdiv").addClass("sign");
                    $("#anav ul").find("[rel='"+rel+"']").attr("active",true);
                    showTab(rel);
                }

               
      
              
                 
                 
            }
        )

    
    /* 页签自动生成 */
    $(".list_3 li").on("click",
        function(){
            if($(this).children("a").attr("url")=="#"){
                return;
            }
             var rel = $(this).children("a").attr("rel");
            if(!$(this).attr("actived")){
                $(this).attr("actived",true);
                $("#anav ul").append("<li onclick='clickfuntion(this)' rel='"+rel+"' class='navtab'><h4>"+$(this).children("a").attr("title")+"</h4><div class='signdiv'></div><div class='noshow'></div></li>");
                createTab(rel,$(this).children("a").attr("url"));
                $("#anav ul").find("[rel='"+rel+"']").find(".signdiv").addClass("sign");
                $("#anav ul").find("[rel='"+rel+"']").attr("active",true);
                var ulWidth = $("#anav").width();
                if(computeTabWidth()-ulWidth > 0){
                    leftHide();
                }
                showTab(rel);
            }else{
                $("#anav ul").find("[rel='"+rel+"']").find(".signdiv").addClass("sign");
                $("#anav ul").find("[rel='"+rel+"']").attr("active",true);
                showTab(rel);
            }
            
            var obj=$(this).parents("li").eq(0);
            var iconname=obj.attr("iconname");
            obj.children(".icon_right_2").addClass("hide");
            obj.children("p").eq(0).removeClass("list_1_p_1");
            obj.children("img").eq(0).attr("src", path+"/images/default/menu/"+iconname+"_01.png")
            obj.children(".list_3").addClass("hide");
            obj.children(".list_3").removeClass("unhide");  
            return false;
        }
    
    )

    $(".list").click(
        function(){     
            if( $(".choosen").get(0)==$(this).find("div").eq(0).get(0))  // 点击对象是否是原来那个
                {
                                
                $(".base_left").show().addClass("active_left");
                $(".min_left").hide().removeClass("active_left");
                $(".base_right").css({"width":$(window).width() - 165,"left":165}) ;
                $("#anav").width($width-115);
            }else           
            {           
                
                $(".choosen").parent("li").eq(0).removeClass("showcolor")       
                $(".choosen").css("display","none");
                $(".choosen").removeClass("choosen");
                $(this).addClass("showcolor")        
                $(this).children(".min_show").addClass("choosen");
                $(this).children(".min_show").css("display","block");
                var pos=($(".choosen").parent().parent().index());  // 每个li元素后有一个js
                $("#played").removeClass("played");          
                $("#menu").children("li").eq(pos).css("display","block");
                var value=pos*45;
                $("#menu").animate({bottom:value+'px'},100);
                $(".base_left").show().addClass("active_left");
                $(".min_left").hide().removeClass("active_left");
                $(".base_right").css({"width":$(window).width() - 165,"left":165}) ;
                $("#anav").width($width-115);              
                $("#menu").children("li").eq(pos).addClass("played");
                list_1_click($("#menu").children("li").eq(pos));
            }              
        }
    )



    $("body").on("click",".noshow",function(){
        var prel = '';
        if(!$(this).parent("li").attr("pinned")){
            if($(this).parent("li").attr("active")){
                $(this).parent("li").prev().find(".signdiv").addClass("sign");
                $(this).parent("li").prev().attr("active",true);
                prel = $(this).parent("li").prev().attr("rel");
            }
            else{
                prel = $("#anav ul").find("[active=true]").attr("rel");
            }
            var rel = $(this).parent("li").attr("rel");
            $("#tab"+rel).remove();
            $(".left_main").find("[rel='"+rel+"']").parent("li").removeAttr("actived");
            $(this).parent("li").remove();
           if(prel != undefined && prel != ''){
               showTab(prel);
           }else{
               showDefaultTab();
           }
        }

    })
    $("#aright").click(function(){
        var divWidth = $("#anav").width();
        var ulWidth = computeTabWidth();
        rightShow();
        if(computeTabWidth()-$("#anav").width() > 0){
                leftHide();
        }

    });
    $("#aleft").click(function(){
        var divWidth = $("#anav").width();
        var ulWidth = computeTabWidth();
        leftShow();
        while(computeTabWidth()-$("#anav").width() > 0){
            rightHide();
        }
    });

    $("body").on("click",function(){
//      setTimeout(function() {
            $(".right-click_1").addClass("hide");
            $(".right-click_1").removeAttr("rel");
//        }, 500);
        
    })
    /**/
    $("body").on("mousedown",".navtab",function(e){
        $(this).bind('contextmenu',function(e){
            return false;
        });

       $(this).mouseup(function(e){
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
                if($(this).attr("rel")){
                    $(".right-click_1").attr("rel",$(this).attr("rel"))
                }
           }

       });

    });
    $("body").on("click",".navtabList",function(){
            var rel = $(this).attr("rel");
            var idx  = $(this).attr("idx");
            var pos = $(this).attr("pos");
            if(rel == 'undefined' || rel == undefined){
                rel = "";
            }
            if(pos == 0){
                showTab(rel);
            }else{
                var offset = 1;
                if(pos == -1){
                    for(var i = idx+1;i<$(".navtab").length;i++){
                        if(checkTabIsShow($(".navtab").eq(i).attr("rel"))){
                            break;
                        }else{
                            offset++;
                        }
                    }
                }else{
                    for(var i = idx-1;i> 0;i--){
                        if(checkTabIsShow($(".navtab").eq(i).attr("rel"))){
                            break;
                        }else{
                            offset++;
                        }
                    }
                }
                for(var i = 0;i<offset;i++){
                    if(pos == -1){
                        rightHide();
                        leftShow();
                    }else{
                        leftHide();
                        rightShow();
                    }
                }
                showTab(rel);
            }
           $(".right-click_2").addClass("hide");
           $(".right-click_2 ul").empty();
    })
    $("#adown").click(function(e){
        $(".right-click_2 ul").empty();
        var idx = 0;
        var pos = -1;
        $(".navtab").each(function(){
            var rel = $(this).attr("rel")
            var text = $(this).find("h4").html();
            if(checkTabIsShow(rel)){
                pos = 0;
            }else{
                if(pos == 0){
                    pos  = 1;
                }
            }
            $(".right-click_2 ul").append("<li><p class='p_1 navtabList' rel='"+rel+"' idx='"+idx+"' pos="+pos+">"+text+"</p></li>");
            idx++;
        });
        $(".right-click_2").css({
            "position": "absolute",
            "left": e.pageX-160,
            "top": e.pageY,
            "z-index":99
        }).removeClass("hide");
        event.stopPropagation();  //阻止冒泡
    });    
    $("body").click(function(){
//      setTimeout(function() {
            $(".right-click_2").addClass("hide");   
//       }, 500);
    })
    $(".tabReflush").on("click",function(){
        var rel = $(".right-click_1").attr("rel")
        if( rel){
            $("#tab"+ rel).children("iframe").attr("src",$("#tab"+ rel).children("iframe").attr("src"));
            showTab(rel);
        }
        $(".right-click_1").addClass("hide");
        $(".right-click_1").removeAttr("rel");
    });
    $(".closeCurTab").on("click",function(){
        var rel = $(".right-click_1").attr("rel")
        if( rel){
           closeTab(rel);
        }
        $(".right-click_1").addClass("hide");
        $(".right-click_1").removeAttr("rel");
    });
    $(".closeOther").on("click",function(){
        var rel = $(".right-click_1").attr("rel");
        $(".navtab").each(function(){
            if(!$(this).attr("pinned")){
                if($(this).attr("rel") != rel){
                    closeTab($(this).attr("rel"));
                }
            }
        });
        showTab(rel);
        $(".right-click_1").addClass("hide");
        $(".right-click_1").removeAttr("rel");
    });
    $(".closeAll").on("click",function(){
        var rel = $(".right-click_1").attr("rel");
        $(".navtab").each(function(){
            if(!$(this).attr("pinned")){

                    closeTab($(this).attr("rel"));

            }
        });
        showTab("");
        $(".right-click_1").addClass("hide");
        $(".right-click_1").removeAttr("rel");
    });
});
function checkTabIsShow(rel){
    var d = "";
    var itm = $("#anav ul").find("[rel='"+rel+"']");
    if(itm[0].currentStyle){
        d = itm[0].currentStyle.display;
    }else{
        d =  itm[0].style.display;
    }
    if(d=="none"){
        return false;
    }else{
        return true;
    }
}
function closeTab(id){
    $("#tab"+id).remove();
    if($("#anav ul [rel='"+id+"']").attr("active")){
        showTab($("#anav ul [rel='"+id+"']").prev().attr("rel"))
    }
    $("#anav ul [rel='"+id+"']").remove();
    $(".list_3 ul").find("[rel='"+id+"']").parent("li").removeAttr("actived");
}
function leftShow(){
    var i = findFistBlockli();
    $(".navtab").eq(i-1).removeClass("hide");
}
function leftHide(){
    var i = findFistBlockli();
    $(".navtab").eq(i).addClass("hide");
    if( $(".navtab").eq(i).attr("active")){
        $(".navtab").eq(i).removeAttr("active");
        setActive(i+1);
    }
}
function rightShow(){
    var i = findLastBlockLi();
    $(".navtab").eq(i+1).removeClass("hide");
}
function setActive(idx){
    $(".navtab").eq(idx).find(".signdiv").addClass("sign");
    $(".navtab").eq(idx).attr("active",true);
    var rel =  $(".navtab").eq(idx).attr("rel");
    showTab(rel);
}
function rightHide() {
    var i = findLastBlockLi();
    $(".navtab").eq(i).addClass("hide");
    if ($(".navtab").eq(i).attr("active")) {
        $(".navtab").eq(i).removeAttr("active");
        setActive(i - 1);
    }

}
function findLastBlockLi(){
    var its = $(".navtab");
    var i = 0;
    for(i=its.length-1;i >=0;i--){
            if(its.eq(i).css("display")!="none")
                return i;
    }
    return 0;
}
function findFistBlockli(){
    var its = $(".navtab");
    var i = 0;
    for(i=0;i<its.length;i++){
            if(its.eq(i).css("display")!="none")
                return i;
    }
    return 0;
}
function createTab(id,src){
    var div = "<div class='tabs' id='tab"+id+"'><iframe frameborder='no' border='0' class='tabframe' src='"+src+"'></iframe></div>";
    $("#container").append(div);
 //   $(".tabs").width($(window).width()-191);// 初始化".tabs"宽度
 //   $(".tabs").height($height-147); // 初始化“.tabs”高度
 //   $(".tabframe").width($(window).width()-211);// 初始化"tabframe"宽度
 //   $(".tabframe").height($height-167); // 初始化“tabframe”高度
//    $(".bodyinfo1").height( $(".tabframe").height()-63); //左右结构初始化"bodyinfo1"高度
}
function computeTabWidth(){
    var tabLength = 0;
    $("#anav ul").children("li").each(function(){
   
        if( $(this).css("display") != "none"){
            tabLength +=$(this).width();
        }
    })
    return tabLength;
}


function showDefaultTab(){
    $(".tabs").hide();
    $("#anav ul").find("[pinned=true]").find(".signdiv").addClass("sign");
    $("#anav ul").find("[pinned=true]").attr("active",true);
    $("#anav ul").find("[pinned=true]").children("h4").addClass("h4_sign");
   // $(".tabDefault").find(".signdiv").addClass("sign");
   // $(".tabDefault").attr("active",true);
    $(".tabDefault").show();

}
function showTab(id){
    $(".navtab").each(function(){
        $(this).find(".signdiv").removeClass("sign");
        $(this).removeAttr("active");
        $(this).find("h4").removeClass("h4_sign");
    })
    if(id == undefined  || id=='' || id=='-1'){
        showDefaultTab();
        return;
    }
    $(".tabs").hide();
    $("#anav ul").find("[rel='"+id+"']").find(".signdiv").addClass("sign");
    $("#anav ul").find("[rel='"+id+"']").attr("active",true);
    $("#anav ul").find("[rel='"+id+"']").find("h4").addClass("h4_sign");
    $("#tab"+id).show();
}
function showTabWithRefreash(id){
    $(".navtab").each(function(){
        $(this).find(".signdiv").removeClass("sign");
        $(this).removeAttr("active");
        $(this).find("h4").removeClass("h4_sign");
    })
    if(id == undefined  || id=='' || id=='-1'){
        showDefaultTab();
        return;
    }
    $(".tabs").hide();
    $("#anav ul").find("[rel='"+id+"']").find(".signdiv").addClass("sign");
    $("#anav ul").find("[rel='"+id+"']").attr("active",true);
    $("#anav ul").find("[rel='"+id+"']").find("h4").addClass("h4_sign");
    $("#tab"+id).show();
    var obj=  $("#tab"+id).show().find("iframe");
    obj.attr("src",obj.attr("src"));
    
    
}

/** ************************************************************************************* */
//$(window).resize(function () { // 当浏览器大小变化时
//    if($width<=820)
//        $width=820;
//    $("#container").width($width);
//    $(".base_right").width($width);
//    $("#anav").width($width-115);
//    $("#container").height($height-125);
//    $(".tabs").width($("#container").width()-26);  // 初始化“tabs”宽度
//    $(".tabs").height($height-147); // 初始化“.tabs”高度
//    $(".tabframe").width($("#container").width()-46);// 初始化"tabframe"宽度
//    $(".tabframe").height($height-167); // 初始化“tabframe”高度
//})


$(window).on('load resize',function(){
    
     offset = $(".active_left")[0].offsetWidth;
     $width =window.screen.availWidth-offset -5;
     $height = $(".base_right").height();
     if($width<=820)
            $width=820;
//      $("#container").width($width);
        $(".base_right").width($width);
        $("#anav").width($width-115);
        $("#container").height($height-126);
        $a = $("#container").height()
//      $(".tabs").width($("#container").width()-26);  // 初始化“tabs”宽度
//      $(".tabs").height($height-147); // 初始化“.tabs”高度
//      $(".tabframe").width($width-20);// 初始化"tabframe"宽度
//      $(".tabframe").height($height-141); // 初始化“tabframe”高度
    })



/* 锟斤拷锟揭城╋拷锟揭城┳刺拷浠� */
function clickfuntion(obj)
{
    if($(obj).find(".sign").length == 0){
        $(obj).children("h4").addClass("h4_sign");
        showTab($(obj).attr("rel"));
    }
}
//
$("#anav ul li").click(
    function(){
        $(this).children("h4").addClass("h4_sign")
    }
)


function menuclose()
            {
                
                var obj=$(".played");
                $(obj).next(".list_2").css("display","none");
                var iconname=$(obj).attr("iconname");
                if(iconname==undefined)
                    {
                     var iconname=$(obj).eq(1).attr("iconname");
                    }
                $(obj).children(".iconBigBox").eq(0).removeClass("iconMain_11").addClass("iconMain_10");
                $(obj).children(".imgBox").eq(0).removeClass("downImg").addClass("leftImg");
              
                $(obj).removeClass("liBgImg");

                
                $(obj).children(".show").attr("class","show")
                $(obj).children("p").attr("class","gary");
                $(obj).removeClass("played");
            }



function  list_1_click(obj) {
    
    $(obj).find(".list_2").css("display","block");// 二级菜单展开收拢
    var iconname=$(obj).find("div").eq(0).attr("iconname");
    if($(".played").size()!=0)
    {
        menuclose();
        $(".played").removeClass("played");
        
    }

    obj=$(obj).find("div").eq(0);
        $(obj).css("background","#1e3245") ;
        $(obj).children("img").eq(0).attr("src", path+"/images/default/menu/"+iconname+"_03.png");
        $(obj).children("img").eq(1).attr("src", path+"/images/default/down_2.png");
        $(obj).css("background", "#1e3245");

        $(obj).children(".show").css("display","block");
        $(obj).children("p").css("color","#0093dd");
        $(obj).addClass("played");
    
    $(obj).children("p").eq(0).attr("pre","#ccd7e9");
    $(obj).children("img").eq(0).attr("pre",path+"/images/default/menu/"+iconname+"_01.png") ;
    $(obj).children("img").eq(1).attr("pre",path+"/images/default/down_2.png") ;
  
}



function frosted () // 毛玻璃效果
{

    $("#container2").css("display","block");
    
    }

function frostedclose () // 毛玻璃效果
{

    $("#container2").css("display","none");
    
    }


$("#container").click(function() {   //3级窗口以外区域的点击事件;
            /*  var disabled = $('#jqxScrollThumbhorizontalScrollBarcontext').jqxScrollBar('disabled'); 
                console.log(disabled);*/
                
            var obj=    $(".unhide").parent();
            if(obj.length==0)
                obj=    $(".unhide",parent.document).parent();  
                var iconname=obj.attr("iconname");
                obj.children(".icon_right_2").addClass("hide");
                obj.children("p").eq(0).removeClass("list_1_p_1");
                obj.children("img").eq(0).attr("src", path+"/images/default/menu/"+iconname+"_01.png")
                obj.children(".list_3").addClass("hide");
                obj.children(".list_3").removeClass("unhide");           
        })
        $(".unhide").click(function(event) {
            event.stopPropagation();
        });










