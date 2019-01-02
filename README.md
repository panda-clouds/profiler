
PCProfiler
=========
maintained by [PandaClouds.com](https://pandaclouds.com)

`PCProfiler` is a lightweight JavaScript library for Node.js that provides methods for tracking the time it takes to execute commands.


Installation
------------

1. If you want to use this library, you first need to install the [Node.js](https://nodejs.org/en/).

2. When you install node.js, will also be installed [npm](https://www.npmjs.com/).

3. Please run the following command.

```
npm install --save @panda-clouds/profiler
```

Usage
-----

### Node.js

```javascript
const PCProfiler = require('@panda-clouds/profiler');

// example usage
const profiler = new PCProfiler("myName"); // => begins the profiler named "myName";
SomeLongTask("123");
profiler.tick(); // => logs "myName tick 1, 2.3456 s (Δ 2.3456 s)"
AnotherLongTask("ABC");
profiler.tick("after AnotherLongTask"); // => logs "myName after AnotherLongTask, 9.987 s (Δ 7.6414 s)"
```

You can replace PCProfiler with any variable.


Methods
-------

[Unit Tests] are an additional resource for learning functionality.


### - tick(string)

logs the delta and total time since last tick or since begin.


Example:

```javascript
const profiler = new PCProfiler("myName"); // => begins the profiler named "myName";
PCProfiler.tick("After myFunction()"); // => logs "myName after AnotherLongTask, 9.987 s (Δ 7.6414 s)"
```


Contributions
-------------

Pull requests are welcome! here is a checklist to speed things up:

- modify `PCProfiler.js`
- add unit tests in `PCProfiler.spec.js`
- run `npm test`
- document method in `README.md`
- add your name to 'Contributors' in `README.md`


### Contributors

(Add your name)

- [*] [Marc Smith](https://github.com/mrmarcsmith)


[Unit Tests]: https://github.com/panda-clouds/profiler/blob/master/spec/PCProfiler.spec.js
