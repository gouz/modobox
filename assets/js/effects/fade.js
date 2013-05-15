!function($) {
	$.extend($.fn.modobox.effects, {
		fade : function(m) {
			m.$wrapper.on({
				'modobox.open' : function() {
					m.$wrapper.stop().css('opacity', 0).animate({
						opacity: 1
					}, {
						duration: m.opts.speed,
						easing: m.opts.easing,
						queue: false,
						complete: function () {
							m.$wrapper.trigger('modobox.opened');
						}
					});
				},
				'modobox.close' : function() {
					m.$wrapper.stop().animate({
						'opacity' : 0
					}, {
						duration: m.opts.speed,
						easing: m.opts.easing,
						queue: false,
						complete: function () {
							m.$wrapper.trigger('modobox.closed');
						}
					});
				}
			});
		}
	})
}(window.jQuery); 