/**
 * Created by daxlab on 22/12/15.
 */

var loop = require('./../index');

var i = 1;
var a = [];
loop.while(function () {
    return i * i < 10;
}, function () {
    a.push(i);
    console.log(a);
    i++;
});

