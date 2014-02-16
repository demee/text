var jsdom = require('jsdom'); 
var jQuery = require('jquery'); 

global.window = window = jsdom.jsdom().createWindow('<html><body></body></html>') 
global.document = window.document; global.addEventListener = window.addEventListener 


global.jQuery = global.$ = jQuery; 
global.Backbone = require('backbone');  



