! function($) {
	$.extend($.fn.modobox.types, {
		anchor : {
			render : function($e) {
				return $($e.attr('href')).clone().html();
			}
		}
	})
}(window.jQuery); 