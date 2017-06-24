
const api = require('./api');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
  app.get('/api', api);

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};