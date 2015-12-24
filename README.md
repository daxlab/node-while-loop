# node-while-loop [![Build Status](https://travis-ci.org/daxlab/node-while-loop.svg?branch=master)](https://travis-ci.org/daxlab/node-while-loop)
A while loop alternative for Nodejs based on promises.

## Install

```
$ npm install --save node-while-loop
```

## Usage

```js
var loop = require('node-while-loop');

var i = 1;
loop.while(function () {
    return i * i < 10;
}, function () {
    console.log(i);
    i++;
});
console.log('Hello Node!');

/* Output
Hello Node!
1
2
3
*/
```

## API

### while(condition, action)

condition function refers to a bool returning function which when returns false, breaks the loop.

action function refers to the task which needs to be iteratively performed.

## License

MIT © [Mandeep Singh](http://github.com/daxlab)

## TODO

Tests
