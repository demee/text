var vows = require('vows');
var assert = require('assert');
var requirejs = require('requirejs');

require('../../../initDOM.js');

var Message = requirejs('../../../assets/js/models/message.js');

vows.describe('assets/models/message')
.addBatch({
	'message should be defined': function(){
		assert.isDefined(Message);
	}
}).export(module);