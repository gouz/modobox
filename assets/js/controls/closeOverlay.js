!function($) {
	$.extend($.fn.modobox.controls, {
		closeOverlay : function(m) {
			m.$opacity.on('click', function () {
				m.close();
				return false;
			});
		}
	})
}(window.jQuery); 