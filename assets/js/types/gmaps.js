! function($) {
	$.extend($.fn.modobox.types, {
		gmaps : {
			render : function($e) {
				return '<iframe src="' + $e.attr('href') + '8&amp;output=embed" width="99%" height="99%" style="display: block; margin: 0 auto;"></iframe>';
			}
		}
	})
}(window.jQuery); 