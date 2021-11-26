src
===

Simple Redis Cache
[![Build Status](https://travis-ci.org/wlaurance/src.png)](https://travis-ci.org/wlaurance/src)

###Usage

src takes one hash parameter with url and expiry defined. Expiry is the
number of seconds a value is non expired in Redis.

```javascript
var src = require('src');
var cache = src(
  {
    url:'redis://user:password@example.com:9073/'
    ,expiry:2
  }
);
```
Callbacks for set are optional
```javascript
cache.set('key', 'value', [cb]);
```
get requires a callback
```javascript
cache.get('key', function(err, value){
  if(typeof value !== 'undefined')
    console.log(value);
});
```
If the key has expired, err will not be used to determine this. Err will
only be a non null value when an error is thrown from Redis.

If you want to delete a key from the cache explicity src provides this
functionality through ```cache.del```

Callbacks are optional for del
```javascript
cache.del('key', [cb]);
```
