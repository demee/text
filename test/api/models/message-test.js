var vows = require('vows');
var assert = require('assert');

var Message = require('../../../api/models/Message.js');


vows.describe('api/models/message')
.addBatch({
	'message should be defined': function(){
		assert.isDefined(Message);
	}
}).export(module);