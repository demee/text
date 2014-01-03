define(['models/message'], function(MessageModel){
	/* Send Message View */ 
	return Backbone.View.extend({
		events: {
			"click button": "_sendMessage"
		},
		template: _.template('<textarea></textarea><button>Send</button>'),	

		render: function(){
			this.$el.append(this.template({}));

			return this;
		}, 
		_sendMessage: function(){
			var message = new MessageModel();
			var self = this; 

			message.set({text: self.$('textarea').val()});
			message.save({}, {success: 
				function(){
					self.trigger('new', message);	
				}
			});

			
		}
	})
});