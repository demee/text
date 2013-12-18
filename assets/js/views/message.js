define(function(){

  return Backbone.View.extend({
		render: function(){
			this.$el.append('<p>' + this.model.get('text') + '</p>');
			return this;
		}
	});

});