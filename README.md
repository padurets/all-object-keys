# all-object-keys-deep

## Install

`npm i all-object-keys-deep -S`

## Hot to use?

```js
var keys = require('all-object-keys-deep');

var options = {
    divider: '.', // is default
    iPrefix: '[', // default ''
    iSuffix: ']' // default ''
};

var obj =  {
    universal: true,
    hello: {
        world: {
            item: 'could be used in browser as well'
        }
    },
    array: ['a','b', {c: 'e'}]
};

keys(options, obj)
// returns
// ["universal", "hello.world.item", "array[0]", "array[1]", "array[2].c"]

keys(obj)
// returns
// ["universal", "hello.world.item", "array.0", "array.1", "array.2.c"]

```