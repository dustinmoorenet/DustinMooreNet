
/*
 * GET home page.
 */


console.log('blah');
module.exports = function(app) {

console.log('yeah');
  app.get('/', function(req, res) {
    res.render('index', { title: 'Funny Stuff like this' })
  });

  require('fs').readdirSync('./routes').forEach(function(file) {
    if (/^[^.].*\.js$/.test(file) && file != 'index.js') {
      require('./' + file)(app);
    }
  });
};

console.log(module.exports);
