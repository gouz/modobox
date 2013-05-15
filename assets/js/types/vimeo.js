! function($) {
	$.extend($.fn.modobox.types, {
		vimeo : {
			render : function($e) {
				return '<iframe src="http://player.vimeo.com/video/' + $e.attr('href').replace('http://vimeo.com/', '') + '" width="99%" height="99%" style="display: block; margin: 0 auto;"></iframe>';
			}
		}
	})
}(window.jQuery); 