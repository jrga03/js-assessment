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
    const combinations = [];

    function buildCombination(str, open, close) {
      if (open === 0 && close === 0) {
        combinations.push(str)
      } else {
        if (open > 0) {
          buildCombination(str+"(", open-1, close+1);
        }
        if (close > 0) {
          buildCombination(str+")", open, close-1);
        }
      }
    }

    buildCombination("", n, 0);
    console.log(combinations);
    
    return combinations;
  }
};
