'use strict';
module.exports = function(app) {
  var tvController = require('../controllers/tvController');

  app.route('/tv/poweron')
    .post(tvController.power_on);
  app.route('/tv/poweroff')
    .post(tvController.power_off);
  app.route('/tv/pause')
    .post(tvController.pause);
  app.route('/tv/play')
    .post(tvController.play);

  app.route('/tv/test')
    .get(tvController.test);

};
