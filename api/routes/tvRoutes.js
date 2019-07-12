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

  app.route('/')
    .get(tvController.test1);

  app.route('/tv/pair/init')
    .post(tvController.initiate_pairing);

  app.route('/tv/pair')
    .post(tvController.pair);

  app.route('/tv/pair/auth')
    .post(tvController.set_auth);
  
  app.route('/tv/input/list')
    .get(tvController.list_inputs);

  app.route('/tv/input/current')
    .get(tvController.current_input);

  app.route('/tv/input/set/tv')
    .post(tvController.set_input_tv);

  app.route('/tv/magic/abc')
    .post(tvController.magic_abc)

};
