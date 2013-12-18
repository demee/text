define(['models/message'], function(MessageModel){
	
	return Backbone.Collection.extend({		
		url: function(){
			return '/message'
		},
		model: MessageModel
	});

});