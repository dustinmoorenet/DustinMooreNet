
/**
 * Module dependencies.
 */

var express = require('express')
  , stylus = require('stylus')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(stylus.middleware({
    src: __dirname,
    debug: false,
    dest: __dirname + '/public',
    compress: false
  }));
  app.use(express.static(__dirname + '/public'));
});

app.configure('production', function(){
  app.use(express.errorHandler());
  app.use(stylus.middleware({
    src: __dirname,
    dest: __dirname + '/public',
    compress: true
  }));
  app.use(express.static(__dirname + '/public'));
});

// Routes
console.log(routes);
routes(app);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
