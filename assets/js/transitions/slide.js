!function($) {
	$.extend($.fn.modobox.transitions, {
		slide : function(m) {
			if (typeof m.opts.t_slide === "undefined")
				m.opts.t_slide = {};
			if (typeof m.opts.t_slide.speed === "undefined")
				m.opts.t_slide.speed = 300;
			if (typeof m.opts.t_slide.easing === "undefined")
				m.opts.t_slide.easing = '';
			if (typeof m.opts.t_slide.queue === "undefined")
				m.opts.t_slide.queue = false;
			if (typeof m.opts.t_slide.direction === "undefined")
				m.opts.t_slide.direction = 'left';
			var a = {
				duration: m.opts.t_slide.speed, 
				easing: m.opts.t_slide.easing, 
				queue: m.opts.t_slide.queue
			},
				b = {},
				c = {},
				d = {};
			if (m.opts.t_slide.direction.indexOf('left') !== -1) {
				m.$items.width((100 / m.opts.view) + '%');
				b['left'] = (100 / m.opts.view) + '%';
				b['top'] = 0;
				c['left'] = 0;
				d['left'] = -(100 / m.opts.view) + '%';
			}
			if (m.opts.t_slide.direction.indexOf('top') !== -1) {
				m.$items.height((100 / m.opts.view) + '%');
				b['top'] = (100 / m.opts.view) + '%';
				b['left'] = 0;
				c['top'] = 0;
				d['top'] = -(100 / m.opts.view) + '%';
			}
			if (m.opts.t_slide.direction.indexOf('right') !== -1) {
				m.$items.width((100 / m.opts.view) + '%');
				b['left'] = -(100 / m.opts.view) + '%';
				b['top'] = 0;
				c['left'] = 0;
				d['left'] = (100 / m.opts.view) + '%';
			}
			if (m.opts.t_slide.direction.indexOf('bottom') !== -1) {
				m.$items.height((100 / m.opts.view) + '%');
				b['top'] = -(100 / m.opts.view) + '%';
				b['left'] = 0;
				c['top'] = 0;
				d['top'] = (100 / m.opts.view) + '%';
			}
			m.$items.css('position', 'absolute').css(b).eq(m.current).css(c);
			m.$wrapper.on({
				'modobox.next': function () {
					for (var i = 0; i < m.opts.view; i++) {
						m.$items.eq((m.current + i) % m.nbItems).stop().animate(d, a);
						m.$items.eq((m.nextItem + i) % m.nbItems).stop().css(b).animate(c, a);
					}
				},
				'modobox.prev': function () {
					for (var i = 0; i < m.opts.view; i++) {
						m.$items.eq((m.current + i) % m.nbItems).stop().animate(b, a);
						m.$items.eq((m.nextItem + i) % m.nbItems).stop().css(d).animate(c, a);
					}
				}
			});
		}
	})
}(window.jQuery); 