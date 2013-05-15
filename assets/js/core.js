!function($) {
	'use strict';
	var Modobox = function($element, opts, _id) {
		this.$element = $element;
		this.opts = opts;
		if (typeof this.opts.view === "undefined")
			this.opts.view = 1;
		this._id = _id;
		this.current = 0;
		this.nbItems = 0;
		this.init();
	};
	Modobox.prototype = {
		init : function() {
			var self = this;
			this.controls = $.extend({}, $.fn.modobox.controls);
			this.effects = $.extend({}, $.fn.modobox.effects);
			this.transitions = $.extend({}, $.fn.modobox.transitions);
			this.types = $.extend({}, $.fn.modobox.types);
			for (var i in this.types)
				if (typeof this.types[i].requires !== "undefined")
					for (var j in this.types[i].requires)
						if (!$('#modobox-require-' + i + '_' + j).length) {
							var tag = document.createElement('script');
      						tag.src = this.types[i].requires[j];
      						tag.id = 'modobox-require-' + i + '_' + j;
      						var firstScriptTag = document.getElementsByTagName('script')[0];
      						firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
						}
			$(window).on('resize', function() {
				if ( typeof self.$wrapper != 'undefined')
					self.$wrapper.trigger('modobox.resize');
			});
			this.$element.on('click', function() {
				self.current = parseInt($(this).data('modoboxindex'));
				self.open();
				return false;
			});
			if ( typeof this.$element.data('modobox') == 'undefined')
				this.$element.data('modobox', this.opts.type == '' ? 'image' : this.opts.type);
			this.$element.attr('data-modoboxg' + this._id, '1');
		},
		open : function() {
			var self = this;
			$('body').append('<div id="modobox-wrapper"><div id="modobox-opacity" /><div id="modobox-inner" /></div>');
			this.$wrapper = $('#modobox-wrapper').hide().on({
				'modobox.resize' : function() {
					var h = $(window).height();
					self.$wrapper.height(h);
				},
				'modobox.open': function () {
					self.$opacity.css({
						'background' : self.opts.overlay.background,
						'opacity' : self.opts.overlay.opacity
					});
				},
				'modobox.closed': function() {
					self.$inner.html('');
					self.$wrapper.remove();
				},
				'modobox.next': function () {
					self.nextItem = (self.current + 1) % self.nbItems;
				},
				'modobox.prev': function () {
					self.nextItem = (self.current - 1) % self.nbItems;
				}
			});
			this.$wrapper.trigger('modobox.resize');
			var fxs = this.opts.effects.split(' '), fl = fxs.length,
				ctrls = this.opts.controls.split(' '), cl = ctrls.length,
				trans = this.opts.transitions.split(' '), trl = trans.length,
				tl = this.types.length;
			for (var i = 0; i < fl; i++)
				if ($.isFunction(this.effects[fxs[i]]))
					this.effects[fxs[i]](this);
			this.$opacity = $('#modobox-opacity', this.$wrapper);
			this.$inner = $('#modobox-inner', this.$wrapper);
			this.$inner.html(this.opts.tpl);
			var $content = $('#modobox-content', this.$inner);
			$('[data-modoboxg' + this._id + ']').each(function() {
				var $this = $(this);
				$content.append('<div class="modobox-item modobox-item-' + $this.data('modobox') + '">' + self.types[$this.data('modobox')].render($this) + '</div>');
			});
			for (var i = 0; i < cl; i++)
				if ($.isFunction(this.controls[ctrls[i]]))
					this.controls[ctrls[i]](this);
			this.$items = $('.modobox-item', this.$wrapper).width('100%').height('100%');
			this.nbItems = this.$items.length;
			this.current %= this.nbItems;
			for (var i = 0; i < trl; i++)
				if ($.isFunction(this.transitions[trans[i]]))
					this.transitions[trans[i]](this);
			for (var i = 0; i < tl; i++)
				if ($.isFunction(this.types[i].script))
					this.types[i].script();
			this.$wrapper.show().trigger('modobox.open').on('modobox.next modobox.prev', function () {
				self.current = self.nextItem;
			});
		},
		close : function() {
			this.$wrapper.trigger('modobox.close');
		},
		prev : function() {
			this.$wrapper.trigger('modobox.prev');
		},
		next : function() {
			this.$wrapper.trigger('modobox.next');
		},
		goto : function(x) {
			this.current = (parseInt(x) - 1) % this.nbItems;
			this.$wrapper.trigger('modobox.next');	
		}
	};
	$.fn.modobox = function(option) {
		var _id = Math.floor(Math.random() * 1e9);
		return this.each(function(i) {
			var $this = $(this), 
				data = $this.data('modoboxinstance'), 
				opts = $.extend({}, $.fn.modobox.defaults, $this.data(), typeof option == 'object' && option);
			$this.data('modoboxindex', i);
			if (!data)
				$this.data('modoboxinstance', (data = new Modobox($this, opts, _id)));
			if (typeof option == 'string')
				data[option]();
		})
	};
	$.fn.modobox.defaults = {
		tpl : '<div id="modobox-content" /><div id="modobox-controls" />',
		controls : 'keys',
		effects : 'fade',
		transitions: 'slide',
		easing: '',
		speed : 500,
		type : '',
		overlay : {
			background : '#000000',
			opacity : 0.8
		}
	};
	$.fn.modobox.controls = {};
	$.fn.modobox.transitions = {};
	$.fn.modobox.effects = {};
	$.fn.modobox.types = {};
}(window.jQuery);