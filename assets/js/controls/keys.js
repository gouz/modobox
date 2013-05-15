!function($) {
	$.extend($.fn.modobox.controls, {
		keys : function(m) {
			if (typeof m.opts.c_keys === "undefined")
				m.opts.c_keys = {};
			if (typeof m.opts.c_keys.prev === "undefined")
				m.opts.c_keys.prev = 37;
			if (typeof m.opts.c_keys.next === "undefined")
				m.opts.c_keys.next = 39;
			if (typeof m.opts.c_keys.close === "undefined")
				m.opts.c_keys.close = 27;
			$(document).on('keydown', function(event) {
				switch (event.keyCode) {
					case m.opts.c_keys.prev:
						m.prev();
						return false;
					case m.opts.c_keys.next:
						m.next();
						return false;
					case m.opts.c_keys.close:
						m.close();
						return false;
				}
			});
		}
	})
}(window.jQuery); 