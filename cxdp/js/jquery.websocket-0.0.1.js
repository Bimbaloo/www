/*
 * jQuery Web Sockets Plugin v0.0.1
 * http://code.google.com/p/jquery-websocket/
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright (c) 2010 by shootaroo (Shotaro Tsubouchi).
 */
(function($){
$.extend({
	websocketSettings: {
		open: function(){},
		close: function(){},
		message: function(){},
		error: function(){},
		options: {},
		events: {}
	},
	websocket: function(url, s) {
		var ws = ReconnectingWebSocket ? new ReconnectingWebSocket( url ) : {
			open:function(){return false;},
			send: function(m){ return false },
			error:function(e){console.info(e);e;return false},
			close: function(){}
		};
		ws._settings = $.extend($.websocketSettings, s);
		$(ws)
			.bind('open', $.websocketSettings.open)
			.bind('close', $.websocketSettings.close)
			.bind('message', $.websocketSettings.message)
			.bind('error',$.websocketSettings.error)
			.bind('message', function(e){
				var m = $.evalJSON(e.originalEvent.data);
				var h = $.websocketSettings.events[m.type];
				if (h) h.call(this, m);
			});
		ws._send = ws.send;
		ws.send = function(type, data) {
			var m = {type: type};
			m = $.extend(true, m, $.extend(true, {}, $.websocketSettings.options, m));
			if (data) m['data'] = data;
			return this._send($.toJSON(m));
		}
		$(window).unload(function(){ ws.close(); ws = null });
		return ws;
	}
});
})(jQuery);
