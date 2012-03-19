module.exports = function(app) {
  app.get('/self', function(req, res) {
    res.render('self', { title: 'About Me' });
  });
}
