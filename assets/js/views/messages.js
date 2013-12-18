define(['collections/messages'], function(MessagesCollection){

	return Backbone.View.extend({
		initialize: function(){
			this.collection = new MessagesCollection();
			this.collection.on('update', this.render, this);
			this.collection.fetch();
		}, 
		render: function(collection){
			collection.each(function(model){
				$('body').append($('<div>' + model.get('message') + '</div>'));
			});
		}
	});

});