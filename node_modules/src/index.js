var redis = require('redis-url');
var uuid = require('uuid');
var _ = require('underscore')
module.exports = function(config){
  var cache = {};
  var client = redis.connect(config.url);
  var id = config.id || uuid.v1();
  cache.client = client;
  function prefix() {
    return id + ':'
  }
  function compose(k) {
    return prefix() + k
  }
  function decompose(k) {
    return k.replace(prefix(), '')
  }
  cache.set = function(key, value, cb){
    key = compose(key)
    client.set(key, value, function(){
      client.expire(key, config.expiry, function(err){
        if (typeof cb !== 'undefined') {
          cb(err);
        }
      });
    });
  }
  cache.get = function(key, cb){
    key = compose(key)
    client.get(key, cb);
  }
  cache.del = function(key, cb){
    key = compose(key)
    client.del(key, cb);
  }
  cache.id = function() {
    return id;
  }
  cache.keys = function(cb, opts) {
    client.keys(prefix() + '*', function(err, keys) {
      if (err) {
        return cb(err)
      }
      cb(null, (opts && opts.raw) ? keys : _.map(keys, decompose))
    })
  }
  return cache;
}
