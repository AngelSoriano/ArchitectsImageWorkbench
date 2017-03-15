/**
 * Created by kami on 3/15/17.
 */
'use strict';

var admin = require('firebase-admin');
var conf = require('./flashlightConfig');
require('colors');

exports.init = function() {

  var instance;
  var config = {
    databaseURL: conf.FB_URL ,
    credential: admin.credential.cert(conf.FB_SERVICEACCOUNT)
  };

  function createInstance(){
    var object = admin.initializeApp(config);
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance
    }
  }

};



exports.fbRef = function(path) {
  return admin.database().ref().child(path);
};

exports.pathName = function(ref) {
  var p = ref.parent.key;
  return (p? p+'/' : '')+ref.key;
};

exports.isString = function(s) {
  return typeof s === 'string';
};

exports.isObject = function(o) {
  return o && typeof o === 'object';
};

exports.unwrapError = function(err) {
  if( err && typeof err === 'object' ) {
    return err.toString();
  }
  return err;
};

exports.isFunction = function(f) {
  return typeof f === 'function';
};
