/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 */


(function (io) {

  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  var methodMap = {
    'create': 'post', 
    'read': 'get',
    'update': 'put', 
    'delete': 'delete'
  };

  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {
    var appView;

    // Listen for Comet messages from Sails
    socket.on('message', function messageReceived(message) {

      ///////////////////////////////////////////////////////////
      // Replace the following with your own custom logic
      // to run when a new message arrives from the Sails.js
      // server.
      ///////////////////////////////////////////////////////////
      log('New comet message received :: ', message);
      //////////////////////////////////////////////////////

    });

    log('Socket is now connected and globally accessible as `socket`');


    //Override backbone sync method to use socket.io istead of ajax
    Backbone.sync = function(method, model, options) {

      var url      = _.result(model, 'url');
      var method   = methodMap[method];
      var callback = options.success;

      log(method + ' ' + url);

      socket[method](url, callback);
    };

    //Configure requirejs
    requirejs.config({
      baseUrl: '/js'
    });

    //Loading main application view
    require(['views/messages'], function(MessagesView){
      var mainView = new MessagesView();
      $('body').append(mainView.render().$el);
    });

  });


  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;

  // Expose main namespace
  window.text = {};


  // Simple log function to keep the example simple
  function log () {
    if (typeof console !== 'undefined') {
      console.log.apply(console, arguments);
    }
  }
  

})(

  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io

);
