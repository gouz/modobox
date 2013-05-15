!function($) {
	$.extend($.fn.modobox.controls, {
		buttons : function(m) {
			if (typeof m.opts.c_buttons === "undefined")
				m.opts.c_buttons = {};
			if (typeof m.opts.c_buttons.prev === "undefined")
				m.opts.c_buttons.prev = 'previous item';
			if (typeof m.opts.c_buttons.next === "undefined")
				m.opts.c_buttons.next = 'next item';
			if (typeof m.opts.c_buttons.close === "undefined")
				m.opts.c_buttons.close = 'close';
			var $controls = $('#modobox-controls', this.$inner);
			$controls.append('<a id="modobox-prev" href="#">' + m.opts.c_buttons.prev + '</a><a id="modobox-next" href="#">' + m.opts.c_buttons.next + '</a><a id="modobox-close" href="#">' + m.opts.c_buttons.close + '</a>');
			$('#modobox-prev', $controls).on('click', function () {
				m.prev();
				return false;
			});
			$('#modobox-next', $controls).on('click', function () {
				m.next();
				return false;
			});
			$('#modobox-close', $controls).on('click', function () {
				m.close();
				return false;
			});
		}
	})
}(window.jQuery); 