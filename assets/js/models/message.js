define(function(){
	return Backbone.Model.extend({
		url: function(){
			return '/message';
		}
	});
});