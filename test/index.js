'use strict';

var test = require('tape');
var keys = require('..');
var json_object = require('./data/object.json');
var json_object_small = require('./data/object.small.json');
var json_array = require('./data/array.json');

test('arguments: no', (t) => {
    var result = keys();
    t.deepEqual(result, [], 'should use default delimiter when only object provided');
    t.end();
});

test('arguments: object', (t) => {
    const result = keys('Lorem i.');
    const expect = ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"];

    t.deepEqual(result, expect, 'if is string');
    t.end();
});

test('arguments: object', (t) => {
    const result = keys(2345.221);
    const expect = [];

    t.deepEqual(result, expect, 'if is number');
    t.end();
});

test('arguments: object', (t) => {
    const result = keys(json_array);
    const expect = ["[0].latitude", "[0].longitude", "[0].tags[0]", "[0].tags[1]", "[0].tags[2]", "[0].tags[3]", "[0].tags[4]", "[0].range[0]", "[0].range[1]", "[0].range[2]", "[0].range[3]", "[0].range[4]", "[0].range[5]", "[0].range[6]", "[0].range[7]", "[0].range[8]", "[0].range[9]", "[0].friends[0].id", "[0].friends[0].name", "[0].friends[1].id", "[0].friends[1].name", "[0].friends[2].id", "[0].friends[2].name", "[0].greeting", "[0].favoriteFruit", "[1]._id", "[1].index", "[1].guid", "[1].isActive", "[1].balance", "[1].picture", "[1].age", "[1].eyeColor", "[1].name.first", "[1].name.last", "[1].company", "[1].email", "[1].phone", "[1].address", "[1].about", "[1].registered", "[1].latitude", "[1].longitude", "[1].tags[0]", "[1].tags[1]", "[1].tags[2]", "[1].tags[3]", "[1].tags[4]", "[1].range[0]", "[1].range[1]", "[1].range[2]", "[1].range[3]", "[1].range[4]", "[1].range[5]", "[1].range[6]", "[1].range[7]", "[1].range[8]", "[1].range[9]", "[1].friends[0].id", "[1].friends[0].name", "[1].friends[1].id", "[1].friends[1].name", "[1].friends[2].id", "[1].friends[2].name", "[1].greeting", "[1].favoriteFruit", "[2]._id", "[2].index", "[2].guid", "[2].isActive", "[2].balance", "[2].picture", "[2].age", "[2].eyeColor", "[2].name.first", "[2].name.last", "[2].company", "[2].email", "[2].phone", "[2].address", "[2].about", "[2].registered", "[2].latitude", "[2].longitude", "[2].tags[0]", "[2].tags[1]", "[2].tags[2]", "[2].tags[3]", "[2].tags[4]", "[2].range[0]", "[2].range[1]", "[2].range[2]", "[2].range[3]", "[2].range[4]", "[2].range[5]", "[2].range[6]", "[2].range[7]", "[2].range[8]", "[2].range[9]", "[2].friends[0].id", "[2].friends[0].name", "[2].friends[1].id", "[2].friends[1].name", "[2].friends[2].id", "[2].friends[2].name", "[2].greeting", "[2].favoriteFruit", "[3]._id", "[3].index", "[3].guid", "[3].isActive", "[3].balance", "[3].picture", "[3].age", "[3].eyeColor", "[3].name.first", "[3].name.last", "[3].greeting", "[3].favoriteFruit", "[4]._id", "[4].index", "[4].guid", "[4].isActive", "[4].balance", "[4].picture", "[4].age", "[4].eyeColor", "[4].name.first", "[4].name.last", "[4].company", "[4].email", "[4].phone", "[4].address", "[4].about", "[4].registered", "[4].latitude", "[4].longitude", "[4].tags[0]", "[4].tags[1]", "[4].tags[2]", "[4].tags[3]", "[4].tags[4]", "[4].friends[0].id", "[4].friends[0].name", "[4].friends[1].id", "[4].friends[1].name", "[4].greeting", "[4].favoriteFruit", "[5]._id", "[5].index", "[5].guid", "[5].isActive", "[5].balance", "[5].picture", "[5].age", "[5].eyeColor", "[5].name.first", "[5].name.last", "[5].company", "[5].email", "[5].phone", "[5].address", "[5].about", "[5].registered", "[5].latitude", "[5].longitude", "[5].tags[0]", "[5].tags[1]", "[5].tags[2]", "[5].tags[3]", "[5].tags[4]", "[5].range[0]", "[5].range[1]", "[5].range[2]", "[5].range[3]", "[5].range[4]", "[5].range[5]", "[5].range[6]", "[5].range[7]", "[5].range[8]", "[5].range[9]", "[5].friends[0].id", "[5].friends[0].name", "[5].friends[1].id", "[5].friends[1].name", "[5].greeting", "[5].favoriteFruit", "[6]._id", "[6].index", "[6].guid", "[6].isActive", "[6].balance", "[6].picture", "[6].age"];

    t.deepEqual(result, expect, 'if is array');
    t.end();
});

test('arguments: no options', (t) => {
    const result = keys(json_object_small);
    const expect = ["name.first", "name.last", "age", "eyeColor", "friends[0].id", "friends[0].name"];

    t.deepEqual(result, expect, 'if no options');
    t.end();
});

test('arguments: options', (t) => {
    const options = {
        includeParent: true
    };
    const result = keys(json_object_small, options);
    const expect = ["name", "name.first", "name.last", "age", "eyeColor", "friends", "friends[0]", "friends[0].id", "friends[0].name"];

    t.deepEqual(result, expect, 'includeParent true');
    t.end();
});

test('arguments: options', (t) => {
    const options = {
        keyType: {
            number: {
                prefix: '.',
                suffix: ''
            }
        }
    };
    const result = keys(json_object_small, options);
    const expect = ["name.first", "name.last", "age", "eyeColor", "friends.0.id", "friends.0.name"];

    t.deepEqual(result, expect, 'prefixes if key is number type');
    t.end();
});

test('arguments: options', (t) => {
    const options = {
        keyType: {
            string: {
                prefix: '.',
                suffix: ''
            }
        }
    };
    const result = keys(json_object_small, options);
    const expect = [".name..first", ".name..last", ".age", ".eyeColor", ".friends[0]..id", ".friends[0]..name"];

    t.deepEqual(result, expect, 'prefixes if key is string type');
    t.end();
});