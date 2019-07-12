'use strict';

let ip = '184.91.158.102:3456'
// let ip = '192.168.1.228'

let smartcast = require('vizio-smart-cast');
let tv = new smartcast(ip);

exports.set_auth = function (req, res) {
  tv.pairing.useAuthToken(req.body.auth);
  res.json({ success: true });
}

exports.initiate_pairing = function (req, res) {
  tv.pairing.initiate()
    .catch(err => {
      console.log(err);
      res.json({ success: false });
    });
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

exports.list_inputs = function(req, res) {
  tv.input.list()
    .then(data => {
      console.log(data);
      res.json({data: data});
    })
    .catch(err => {
      console.log(err);
    });
};

exports.current_input = function(req, res) {
  tv.input.current().then(data => {
    console.log(data.ITEMS[0].VALUE);
    res.json(data.ITEMS[0].VALUE);
  })
}

exports.set_input_tv = function(req, res) {
  tv.input.set("TV");
  res.json('success');
}

exports.magic_abc = function(req, res) {
  
  tv.control.power.on()
    .then(data => {  
      tv.input.set("TV");
      res.json('succes');
    })
    .catch(err => {
      console.log(err);
      res.json('error');
    });

}

exports.test = function(req, res) {
  res.json({ message: 'Played' });
};

exports.test1 = function(req, res) {
  res.json({ message: 'working!' });
};

