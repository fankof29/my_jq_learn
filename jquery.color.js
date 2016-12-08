; //为了稳妥，加上一个;

(function($){
	$.fn.extend({
		"color": function(value){
			//设置字体的颜色
			return this.css('color',value)
		}
	})
})(jQuery)