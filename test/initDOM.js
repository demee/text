
jsdom = require('jsdom'); 
jQuery = require('jquery'); 
global.jQuery = global.$ = jQuery; 
window = jsdom.jsdom().createWindow('<html><body></body></html>') 
global.document = window.document; global.addEventListener = window.addEventListener 
global.Backbone = require('backbone');  
