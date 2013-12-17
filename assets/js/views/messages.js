(function(){
	text.views = text.views || {};

	text.views.Messages = Backbone.View.extend({
		initialise: function(){
			this.collection = new text.collections.Messages();
			this.collection.on('reset', this.render, this)
			this.collection.fetch();
		}, 
		render: function(collection){
			collection.each(function(model){
				$('body').append($('<div>' + model.get('message') + '</div>'));
			})
		}
	});

}());