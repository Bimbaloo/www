// JavaScript Document

$.extend({
	
	 msgbox:function(op){
		 	var defaults={
				title: "弹出窗口",
				content: "显示内容",
				time: 0,
				btns:"关闭",
				width:300,
				height:140,
				isclosep:0,
				eventA:""
			}
			var opts = $.extend(defaults, op);
			
			var h=$(window.top.document).height();
			var w=$(window.top.document).width();
			var the=this;
			the.hideMsg();
			//$(selector, window.top.document);
			$("body",window.top.document).prepend("<div class=\"msg-big\"></div>")
		 	$("body",window.top.document).prepend("<div class=\"msg-win\"><div class=\"msg-title\"><span>&nbsp;&nbsp;"+opts.title+"</span><font class='closemsg'>X&nbsp;&nbsp;</font></div><div class=\"msg-content\">"+opts.content+"</div><button class='msg-ok' type='button'>"+opts.btns+"</button></div>");
		 	var left=(w-opts.width)/2
			var top=(h-opts.height)/2
			$(".msg-content",window.top.document).height(opts.height-80)
		 	$(".msg-big",window.top.document).stop().css({'width':w,"height":h},100)
			$(".msg-win",window.top.document).stop().css({'left':left,"top":top,'width':opts.width,'height':opts.height},300)
			$(".closemsg",window.top.document).click(function(){
				the.hideMsg();
				//alert("");
				if(opts.isclosep==1){
					
					$(window.parent.document).find(".closeDialog").click();
				}
			})
			$(".msg-ok",window.top.document).click(function(){
				the.hideMsg();	
				//alert("");
				
				if(opts.isclosep==1){
					
					 $(window.parent.document).find(".closeDialog").click();
				}
			})
			$(".msg-ok",window.top.document).bind("click",opts.eventA);
			if(opts.time>0){
			
			setTimeout(function() {
				the.hideMsg();
				},opts.time);
			}
			$(".msg-win .msg-title",window.top.document).mousedown(function(e){
				the.config.ismove=true;
				$(this).parent(".msg-win").css("cursor","move");		
				the.config._x=e.pageX-parseInt($(this).parent(".msg-win").css('left'))
				the.config._y=e.pageY-parseInt($(this).parent(".msg-win").css('top'))
				$(this).parent(".msg-win").fadeTo(50, 0.5);
				//alert(the.config._x);
									
			})
			$(".msg-win .msg-title",window.top.document).mouseup(function(e){
				$(this).parent(".msg-win").css("cursor","default");
				the.config.ismove=false;
				//alert(the.config._x);
				$(this).parent(".msg-win").fadeTo("fast", 1);
				
			})
			$(".msg-win .msg-title",window.top.document).mousemove(function(e){
				if(the.config.ismove){
				var x=e.pageX-parseInt(the.config._x);
				
				var y=e.pageY-the.config._y;						
				$(this).parent(".msg-win").css({'left':x,'top':y});	
				}
			})
										
	},
	hideMsg:function(){
	
		$(".msg-big",window.top.document).hide();
		$(".msg-big",window.top.document).remove();
		$(".msg-win",window.top.document).hide();
		$(".msg-win",window.top.document).remove();
	},
	config:{
		ismove:false,
		_x:0,
		_y:0
		
	}
	
	})