/*
	$.refreshCSS.start();
**/

$(function(){
	
	$.extend({
		refreshCSS: {
			refresh: function(){
				$('link[rel="stylesheet"]').each(function(i, item){
	           		item.href = item.href.replace(/\?.*/, '') + '?' + (new Date().valueOf());
				});
			},
			start: function(time){
				_self = this;
				this.interval = setInterval(function(){
		            _self.refresh();
		        }, time || 5000);
			},
			stop: function(){
				clearInterval(this.interval);
			}
		}	
	});
	
});