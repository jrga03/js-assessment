exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let arr = [];
    let letterStack = [];
    let prevLetter = "";
    for (let i = 0; i < str.length; i++) {
      let currLetter = str[i];
      if (prevLetter !== currLetter) {
        arr = [...arr, ...letterStack];
        prevLetter = currLetter;
        letterStack = [];
      }

      if (letterStack.length < amount) {
        letterStack.push(currLetter);
      }

      if (i === str.length - 1) {
        arr = [...arr, ...letterStack]
      }
    }
    return arr.join("");
  },

  wordWrap: function (str, cols) {
    const arr = str.split(" ");
    let strArr = [];
    let lineStr = "";
    for (let i = 0; i < arr.length; i++) {
      if (lineStr.length === 0) {
        lineStr = arr[i];
      } else if (`${lineStr} ${arr[i]}`.length <= cols) {
        lineStr = `${lineStr} ${arr[i]}`;
      } else {
        strArr.push(lineStr);
        lineStr = arr[i];
      }

      if (i === arr.length - 1 && lineStr.length !== 0) {
        strArr.push(lineStr)
      }
    }
    return strArr.join("\n");
  },

  reverseString: function (str) {
    return str.split("").reverse().join("");
  }
};
