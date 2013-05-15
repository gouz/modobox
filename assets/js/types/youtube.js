! function($) {
	$.extend($.fn.modobox.types, {
		youtube : {
			requires: ['https://www.youtube.com/iframe_api'],
			render : function($e) {
				var id = '',
					regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
    				match = $e.attr('href').match(regExp);
				if (match&&match[7].length==11)
    				return '<iframe class="ytplayer" type="text/html" width="99%" height="99%" src="https://www.youtube.com/embed/' + match[7] + '" frameborder="0" allowfullscreen style="display: block; margin: 0 auto;">';
    			return 'wrong youtube url';
			}
		}
	})
}(window.jQuery); 