# object-end-keys
[![Build Status](https://travis-ci.org/padurets/object-end-keys.svg?branch=master)](https://travis-ci.org/padurets/object-end-keys)
[![Coverage Status](https://coveralls.io/repos/github/padurets/object-end-keys/badge.svg?branch=master)](https://coveralls.io/github/padurets/object-end-keys?branch=master)

## Install

`npm i object-end-keys -S`

## Default options
```js
var options = {
    separator: '.',
    keyType: {
        string: {
            prefix: '',
            suffix: ''
        },
        number: {
            prefix: '[',
            suffix: ']'
        }
    }
};
```

## Usage example
```js
var keys = require('object-end-keys');
var data = {
    "name": {
        "first": "Joseph",
        "last": "Raketov"
    },
    "age": 24,
    "eyeColor": "red",
    "friends": [
      {
        "id": 0,
        "name": "Alex Shakirov"
      }
    ]
};
```

##### Example 1: simple
```js
keys(obj)
// ["name.first", "name.last", "age", "eyeColor", "friends[0].id", "friends[0].name"]
```
##### Example 2: includeParent
```js
options = {
    includeParent: true
}

keys(obj, options)
// ["name", "name.first", "name.last", "age", "eyeColor", "friends", "friends[0]", "friends[0].id", "friends[0].name"]
```

##### Example 3: prefix/suffix of keyType
```js
options = {
    keyType: {
        number: {
            prefix: '.',
            suffix: ''
        }
    }
};

keys(obj, options)
// ["name.first", "name.last", "age", "eyeColor", "friends.0.id", "friends.0.name"]
```

## TODO:
- support for browsers