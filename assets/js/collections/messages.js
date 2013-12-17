(function(){
	text.collections = text.collections || {};

	text.collections.Messages = Backbone.Collection.extend({
		model: text.models.Message
	})
}());