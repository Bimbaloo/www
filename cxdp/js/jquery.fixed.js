// JavaScript Document

$.extend({
	
	 fixedtab:function(op){
		 	var defaults={
				tag:".obj",
				canscroll:0,
				tagtab:".tagtab",
				fixedbody:".fixedbody",
				cantop:30
				
			}
			var opts = $.extend(defaults, op);
			//$(opts.tag).prepend("<div id=\"overhidden\"></div>")
			$(opts.tag).bind("scroll",function(){
					var top=$(this).scrollTop();
					if(opts.canscroll==1){
						
						if(top>opts.cantop)
						{
							/*
							$("#overhidden").css({
												 "position":"fixed",
												 "top":$(this).offset().top,
												 "left":$(this).offset().left,
												 "height":$(opts.fixedbody).height(),
												 "width":$(opts.tagtab).width()*0.997,
												 "border":"1px solid #ff0000",
												  "z-index":"999995"
												 })*/
							//$(opts.fixedbody).css("top",$(this).offset().top)
							//$(opts.fixedbody).css("left",$(this).offset().left)
							$(opts.fixedbody).css("width",$(opts.tagtab).width())
							$(opts.fixedbody).show();
						}else{
							$(opts.fixedbody).hide();
							
						}	
					}
	
			})
			
												
												
	}
	
	
	})