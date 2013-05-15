!function($) {
	$.extend($.fn.modobox.types, {
		image : {
			script: function () {
				$('img', _modobox.$wrapper).css('opacity', 0).on('load', function () {
					$(this).stop().animate({
						opacity: 1
					}, 100);
				});
			},
			render : function($e) {
				return '<img src="' + $e.attr('href') + '" />'
			}
		}
	})
}(window.jQuery); 