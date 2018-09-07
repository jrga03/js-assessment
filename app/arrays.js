exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function (arr) {
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }
    return arr.reduce((x, y) => x + y);
  },

  remove: function (arr, item) {
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] !== item) newArr.push(arr[i])
    // }
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
    let occurence = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) occurence++;
    }
    return occurence;
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
    let occurences = [];
    arr.forEach((item, i) => item === target && occurences.push(i));

    return occurences;
  }
};
