(function($){
	$.fn.refreshCSS = function(options){
	    var options = $.extend({}, {
	        interval: 3000
	    }, options);

	    this.each(function(i, item){
	        var interval = setInterval(function(){
	            item.href = item.href.replace(/\?.*/, '') + '?' + (new Date().valueOf());
	        }, options.interval);
	    });
	}
})(jQuery);

$().ready(function(){
	$('link[rel="stylesheet"]').refreshCSS().;
})