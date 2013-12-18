define(['collections/messages', 'views/message'], function(MessagesCollection, MessageView){

	return Backbone.View.extend({
		initialize: function(){
			this.collection = new MessagesCollection();
			this.collection.on('add', this.renderMessage, this);
			this.collection.on('all', function(){console.log(arguments)});
			this.collection.fetch();
		}, 
		render: function(){
			return this;
		},
		renderMessage: function(message){
			var messageView = new MessageView({
				model: message
			});

			this.$el.append(messageView.render().$el);
		}
	});

});