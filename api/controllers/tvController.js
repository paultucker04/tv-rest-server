'use strict';

// let ip = '209.18.47.61:3456';

let ip = '184.91.158.102:3456'

let smartcast = require('vizio-smart-cast');
let tv = new smartcast(ip);

exports.initiate_pairing = function (req, res) {
  tv.pairing.initiate();
  res.json({ success: true });
};

exports.pair = function (req, res) {
  const pin = req.body.pin;
  console.log(typeof pin);
  tv.pairing.pair(pin).then(response => {
    // log the token to be used for future, authenticated requests
    let auth = response.ITEM.AUTH_TOKEN;
    console.log(auth);
    tv.pairing.useAuthToken(auth);
    res.json({ auth: auth });
  })
  .catch(err => {
    console.log(err);
    res.json({ success: false });
  });
};

exports.power_on = function(req, res) {
  console.log('hit power on');
  tv.control.power.on();
  res.json({ message: 'Powered On' });
};

exports.power_off = function(req, res) {
  console.log('hit power off');
  tv.control.power.off().then((response) => {
    res.json({ message: 'Powered Off' });
  });
};


exports.pause = function(req, res) {
  console.log('hit pause')
  tv.control.media.pause().then(data => {
    console.log(data);
    res.json({ message: 'Paused' });
  }).catch(data => {
    console.log(data);
  });
};


exports.play = function(req, res) {
  console.log('hit play');
  tv.control.media.play();
  res.json({ message: 'Played' });
};

exports.test = function(req, res) {
  res.json({ message: 'Played' });
};

exports.test1 = function(req, res) {
  res.json({ message: 'working!' });
};

