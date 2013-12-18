define(['models/message'], function(MessageModel){
	
	return Backbone.Collection.extend({		
		url: function(){
			return '/messages'
		},
		model: MessageModel
	});

});