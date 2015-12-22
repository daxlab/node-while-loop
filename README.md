# node-while-loop
A while loop alternative for Nodejs based on promises.

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
```

## API

### while(condition, action)

condition refers to a bool returning function which when returns false, breaks the loop.

action refers to the task which needs to be iteratively performed.

