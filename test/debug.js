'use strict';

var keys = require('../');
var json_object = require('./data/object.json');
var json_object_small = require('./data/object.small.json');
var json_array = require('./data/array.json');


var options = {
    keyType: {
        string: {
            prefix: '.',
            suffix: ''
        }
    }
};

var data = {
    "name": {
        "first": "Joseph",
        "last": "Raketov"
    },
    age: 24,
    "eyeColor": "red",
    "friends": [
      {
        "id": 0,
        "name": "Alex Shakirov"
      },
    ],
};

setTimeout(function () {
    // console.log('json_object', keys(json_object))
    // console.log('json_array', keys(json_array))
    console.log('options', keys(json_array))
}, 3000);