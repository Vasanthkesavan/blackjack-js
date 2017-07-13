# List of ES6 usages

This document contains all the properties related to ES6 used to build this project.

## Classes

JavaScript classes introduced in ECMAScript 2015 are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.

### Class in older version of JavaScript
```
var Dog = function(name) {
  this.name = name;
}
```
### Class in ES6

```
class Dog {
  constructor(name) {
    this.name = name;
  }
}
```

## for loops

### for loop in older versions
```
for(var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

### for-of loop in ES6

```
for(let value of array) {
  console.log(value);
}
```
