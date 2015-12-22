/**
 * Created by daxlab on 22/12/15.
 */

var Promise = require('bluebird');
var pw = {};
pw.while = function (condition, action) {
    /* condition refers to a bool returning function which when returns false, breaks the loop.
     action refers to the task which needs to be iteratively performed
     */

    var resolver = Promise.defer();

    var iter = function () {
        if (!condition()) return resolver.resolve(action);
        return Promise.cast(action())
            .then(iter)
            .catch(resolver.reject);
    };

    process.nextTick(iter);

    return resolver.promise;
};

module.exports = pw;
