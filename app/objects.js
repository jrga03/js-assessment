exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return fn.bind(obj)();
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;    
    return constructor;
  },

  iterate: function (obj) {
    const keys = Object.keys(obj);
    return keys.map((key) => `${key}: ${obj[key]}`)
  }
};