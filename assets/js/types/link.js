! function($) {
	$.extend($.fn.modobox.types, {
		link : {
			render : function($e) {
				return '<iframe src="' + $e.attr('href') + '" width="99%" height="99%" style="display: block; margin: 0 auto;"></iframe>';
			}
		}
	})
}(window.jQuery); 