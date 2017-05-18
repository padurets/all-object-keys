var _ = require('lodash');

var defaultOptions = {
    includeParent: false,
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

function getKeys (obj, opt, keys = [], prev_path = '') {

    _.each(obj, (item, index) => {
        var name_type = typeof index;
        var name_opt = opt.keyType[name_type];
        var name = name_opt.prefix+index+name_opt.suffix;
        var itemIsArray = _.isArray(item);
        var itemIsObject = _.isObject(item);
        var separator = (!!prev_path && name_type !== 'number') ? opt.separator : '';
        var path = prev_path+separator+name;
        var isFn = typeof item === 'function';

        if(opt.includeParent){
            keys.push(path)
        }

        if(itemIsObject && !isFn){
            getKeys(item, opt, keys, path);
        }else{
            if(!opt.includeParent){
                keys.push(path)
            }
        }
    });

    return keys;
}

function endKeys (obj, opt) {
    var options = _.merge({}, defaultOptions, opt);

    return getKeys(obj, options);
}

module.exports = endKeys;
