// JavaScript Document

$.extend({
	
	 showDiv:function(op){
		 	var defaults={
				title: "弹出窗口",
				content: "显示内容",
				time: 4000,
				btns:"关闭",
				width:400,
				height:240,
				canscroll:0,
				tagtab:".tagtab",
				fixedbody:".fixedbody",
				cantop:30
				
			}
			var opts = $.extend(defaults, op);
			
			var h=$(window).height();
			var w=$(window).width();
			var the=this;
			
			$("body").prepend("<div class=\"dialog-big\"></div>")
		 	$("body").prepend("<div class=\"dialog-win\"><div class='closeDialog'>X&nbsp;&nbsp;</div><div class=\"dialog-content\">"+opts.content+"</div></div>");
		 	var left=(w-opts.width)/2-10;
			var top=(h-opts.height)/2-10;
			//alert(h)
			$(".dialog-content").height(opts.height-5)
		 	$(".dialog-big").stop().animate({'width':w,"height":h},100)
			$(".dialog-win").stop().animate({'left':left,"top":top,'width':opts.width,'height':opts.height},300)
			$(".closeDialog").click(function(){
				the.hideDiv();	
				 $("#code").focus();
			})
			$(".dialog-ok").click(function(){
				the.hideDiv();	
				 $("#code").focus();
			})
			if(opts.time>0){
			
			setTimeout(function() {
				the.hideDiv();
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
			/*
			$(".dialog-win .dialog-content").bind("scroll",function(){
					var top=$(this).scrollTop();
					if(opts.canscroll==1){
						
						if(top>opts.cantop)
						{
							
							$(opts.fixedbody).css("top",$(this).offset().top)
							$(opts.fixedbody).css("width",$(opts.tagtab).width())
							$(opts.fixedbody).show();
						}else{
							$(opts.fixedbody).hide();
							
						}	
					}
	
			})
			*/
			
												
												
	},
	hideDiv:function(){
	
		$(".dialog-big").hide();
		$(".dialog-big").remove();
		$(".dialog-win").hide();
		$(".dialog-win").remove();
		$("#code").focus();
		$("#code",window.parent.document).focus();
	},
	config:{
		ismove:false,
		_x:0,
		_y:0
		
	}
	
	})