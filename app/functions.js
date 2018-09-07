exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr)
  },

  speak: function(fn, obj) {
    this.greeting = obj.greeting;
    this.name = obj.name;
    const newFn = fn.bind(this);
    return newFn();
  },

  functionFunction: function(str) {
    return (str2) => `${str}, ${str2}`;
  },

  makeClosures: function(arr, fn) {
    return arr.map((x) => () => fn(x));
  },

  partial: function(fn, str1, str2) {
    return (x) => fn(str1, str2, x)
  },

  useArguments: function(...args) {
    return args.reduce((a, b) => a + b);
  },

  callIt: function(fn, ...args) {
    return fn(...args);
  },

  partialUsingArguments: function(fn, ...args) {
    return fn.bind(this, ...args);
  },

  curryIt: function(fn) {
    return (a) => (b) => (c) => fn(a, b, c);
  }
};
