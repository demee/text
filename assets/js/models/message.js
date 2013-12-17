(function(){
	text.models = text.models || {};

	text.models.Message = Backbone.Model.extend({
		url: '/message'
	})
}());