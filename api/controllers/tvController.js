'use strict';

let smartcast = require('vizio-smart-cast');
let tv = new smartcast('192.168.1.228', 'Zevwov0nxx');

exports.power_on = function(req, res) {
  tv.control.power.on();
  res.json({ message: 'Powered On' });
};

exports.power_off = function(req, res) {
  tv.control.power.off();
  res.json({ message: 'Powered Off' });
};


exports.pause = function(req, res) {
  tv.control.media.pause();
  res.json({ message: 'Paused' });
};


exports.play = function(req, res) {
  tv.control.media.play();
  res.json({ message: 'Played' });
};

exports.test = function(req, res) {
  res.json({ message: 'Played' });
};
