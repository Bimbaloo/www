// JavaScript Document

$.extend({
	
	 showFrame:function(op){
		 	var defaults={
				title: "弹出窗口",
				content: "显示内容",
				time: 4000,
				btns:"关闭",
				width:800,
				height:600,
				url:"",
				scrolling:"no",
				style:"",
				zindex:102,
				noclose:0,
				type:0
				
			}
			var opts = $.extend(defaults, op);
			
			if(opts.type==1){
				var h=$(document).height();
				var w=$(document).width();
			}else{
				var h=screen.height;
				var w=screen.width;
			}

			var the=this;
			the.hideFrame();	
			$("body").prepend("<div class=\"dialog-big\"></div>")
			
			var html="<div class=\"dialog-win\"><div class='closeDialog'>X&nbsp;&nbsp;</div><div class=\"dialog-content\">";
			html+="<iframe id='dialogframe' scrolling='"+opts.scrolling+"' width='"+opts.width+"' height='"+opts.height+"' src='"+opts.url+"' style='"+opts.style+"'></iframe>"
			html+="</div></div>";
			
		 	$("body").prepend(html);
		 	$(".closeDialog").css({"z-index":opts.zindex})
		 	if(opts.noclose==1){
		 		$(".closeDialog").hide();
		 	}
		 	var left=(w-opts.width)/2
			var top=(h-opts.height)/2
			
			$(".dialog-content").height(opts.height)
			$("#dialogframe").height(opts.height)
			//alert(opts.height);
		 	$(".dialog-big").stop().animate({'width':w,"height":h},100)
			$(".dialog-win").stop().animate({'left':left,"top":top,'width':opts.width,'height':opts.height},300)
			$(".closeDialog").click(function(){
				the.hideFrame();	
				 $("#code").focus();
			})
			$(".dialog-ok").click(function(){
				the.hideFrame();	
				 $("#code").focus();
			
			})
			if(opts.time>0){
			
			setTimeout(function() {
				the.hideFrame();
				},opts.time);
			}
			$(".dialog-win .dialog-title").mousedown(function(e){
				the.config.ismove=true;
				$(this).parent(".dialog-win").css("cursor","move");		
				the.config._x=e.pageX-parseInt($(this).parent(".dialog-win").css('left'))
				the.config._y=e.pageY-parseInt($(this).parent(".dialog-win").css('top'))
				$(this).parent(".dialog-win").fadeTo(50, 0.5);
				//alert(the.config._x);
									
			})
			$(".dialog-win .dialog-title").mouseup(function(e){
				$(this).parent(".dialog-win").css("cursor","default");
				the.config.ismove=false;
				//alert(the.config._x);
				$(this).parent(".dialog-win").fadeTo("fast", 1);
				
			})
			$(".dialog-win .dialog-title").mousemove(function(e){
				if(the.config.ismove){
				var x=e.pageX-parseInt(the.config._x);
				
				var y=e.pageY-the.config._y;						
				$(this).parent(".dialog-win").css({'left':x,'top':y});	
				}
			})
		
			
												
												
	},
	hideFrame:function(){
	
		$(".dialog-big").hide();
		$(".dialog-big").remove();
		$(".dialog-win").hide();
		$(".dialog-win").remove();
	},
	config:{
		ismove:false,
		_x:0,
		_y:0
		
	}
	
	})