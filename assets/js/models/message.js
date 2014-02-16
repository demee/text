if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function(){
	return Backbone.Model.extend({
		url: function(){
			return '/message';
		}
	});
});