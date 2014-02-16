var vows = require('vows');
var assert = require('assert');

var Message = require('../../../api/models/Message.js');


vows.describe('failing test')
.addBatch({
	'message should be defined': function(){
		assert.isDefined(Message);
	}
}).export(module);