var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
//var salt = 5;


var User = db.Model.extend({
  tableName: 'users',

  defaults: {
    'username': '',
    'password': ''
  },

  hasher: function(pass){
    var self = this;
/*    bcrypt.genSalt(salt, function(err, salt){
      if(err){
        console.log('line 17 genSalt', err);
      }*/
      bcrypt.hash(pass, null, null, function(err, hash){
        if(err){
          console.log('line 21 hash', err);
        }
        self.set('password', hash);
        console.log('hashedPassword:', hash);
      });
    // });
  }


});

module.exports = User;