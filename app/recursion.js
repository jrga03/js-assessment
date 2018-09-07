exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const files = [];

    function findFiles(obj) {
      obj.files.map((item) => {
        if (typeof item === "object") {
          findFiles(item);
        } else if (dirName) {
          if (item.split(".").includes(dirName)) {
            files.push(item);
          }
        } else {
          files.push(item);
        }
      })
    }

    findFiles(data);

    return files;
  },

  permute: function (arr) {
    let permutations = [];

    function getPermutations(array, start) {      
      if (start >= array.length - 1) {
        permutations.push(Array.from(array));
      } else {
        for (let i=start; i<array.length; i++) {
          let temp = array[start];
          array[start] = array[i];
          array[i] = temp;

          getPermutations(array, start + 1);

          temp = array[start];
          array[start] = array[i];
          array[i] = temp;
        }
      }
    }

    getPermutations(arr, 0);
    return permutations;
  },

  fibonacci: function (n) {
    function getNextFib(arr) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
      
      if (arr.length - 1 !== n) {
        getNextFib(arr);
      }
      return arr;
    }
    
    const initialFib = [0, 1];
    const fibArr = getNextFib(initialFib);
    return fibArr[fibArr.length - 1];
  },

  validParentheses: function (n) {
    const unique = [];
    this.permute(("()".repeat(n)).split(""))
      .filter((permutation) => isValid(permutation))
      .forEach((x) => unique.includes(x.join("")) || unique.push(x.join("")));
  
    function isValid(arr) {
      let isValid = true;
      let stack = [];
      for (let i=0; i<arr.length; i++) {
        if (arr[i] === "(") {
          stack.push(arr[i]);
        } else if (stack.length > 0) {
          stack.pop();
        } else {
          isValid = false;
          break;
        }
      }

      if (stack.length > 0) {
        isValid = false;
      }
      return isValid;
    }

    return unique;

    // var expected = [ '((()))', '(()())', '(())()', '()(())', '()()()'];
    // var result = recursionAnswers.validParentheses(3);
  }
};
