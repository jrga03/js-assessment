exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    // return arr.indexOf(item);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function (arr) {
    return arr.reduce((x, y) => x + y);
  },

  remove: function (arr, item) {
    return arr.filter((x) => x !== item);
  },

  removeWithoutCopy: function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    return arr.concat(item)
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return [...arr1, ...arr2]
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    return arr.reduce((occurence, cur) => {
      if (item === cur) occurence++;
      return occurence;
    }, 0);
  },

  duplicates: function (arr) {
    return arr.reduce((acc, cur, i, srcArr) => {
      if (!acc.includes(cur) && srcArr.indexOf(cur) !== srcArr.lastIndexOf(cur)) {
        acc.push(cur);
      }
      return acc;
    }, []);
  },

  square: function (arr) {
    return arr.map(item => item * item);
  },

  findAllOccurrences: function (arr, target) {
    return arr.reduce((acc, cur, i) => {
      if (target === cur) acc.push(i);
      return acc;
    }, []);
  }
};
