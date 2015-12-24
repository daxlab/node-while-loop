/**
 * Created by daxlab on 22/12/15.
 */

var loop = require('./../index');

var i = 1;
var j = 1;
var a = [];
var b = [];
loop.while(function () {
    return i * i < 10;
}, function () {
    a.push(i);
    console.log('a = ', a);
    i++;
});

loop.while(function () {
    return 2 * j < 20;
}, function () {
    b.push(j);
    console.log('b = ', b);
    j++;
});

