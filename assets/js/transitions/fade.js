!function($) {
	$.extend($.fn.modobox.transitions, {
		fade : function(m) {
			if (typeof m.opts.t_fade === "undefined")
				m.opts.t_fade = {};
			if (typeof m.opts.t_fade.speed === "undefined")
				m.opts.t_fade.speed = 300;
			if (typeof m.opts.t_fade.easing === "undefined")
				m.opts.t_fade.easing = '';
			if (typeof m.opts.t_fade.queue === "undefined")
				m.opts.t_fade.queue = false;
			m.$items.css({
				opacity: 0,
				'z-index': 1
			});
			for (var i = 0; i < m.opts.view; i++)
				m.$items.eq((m.current + i) % m.nbItems).css({
					opacity: 1,
					'z-index': 2
				});
			m.$wrapper.on('modobox.prev modobox.next', function() {
				for (var i = 0; i < m.opts.view; i++)
					m.$items.eq((m.current + i) % m.nbItems).animate({
						opacity: 0
					}, {
						duration: m.opts.t_fade.speed, 
						easing: m.opts.t_fade.easing, 
						queue: m.opts.t_fade.queue,
						complete: function() {
							$(this).css('z-index', 1);
						}
					});
				for (var i = 0; i < m.opts.view; i++)
					m.$items.eq((m.nextItem + i) % m.nbItems).animate({
						opacity: 1
					}, {
						duration: m.opts.t_fade.speed, 
						easing: m.opts.t_fade.easing, 
						queue: m.opts.t_fade.queue,
						complete: function() {
							$(this).css('z-index', 2);
						}
					});
			});
		}
	})
}(window.jQuery); 