exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    const binary = this.convertToBinary(num);
    return parseInt(binary[binary.length - bit]);
  },

  base10: function (str) {
    let int = 0;
    for (let i = 0, exp = str.length - 1; i < str.length; i++ , exp--) {
      if (parseInt(str[i]) === 1) {
        int += 2 ** exp;
      }
    }
    return int;
  },

  convertToBinary: function (num) {
    let number = num;
    let binary = "";
    let i = Math.ceil(Math.log2(num));
    do {
      if (2 ** i <= number) {
        binary = binary.concat("1");
        number -= 2 ** i;
      } else {
        binary = binary.concat("0");
      }
      i--;
    } while (i > -1);
    return binary;
  },

  multiply: function (a, b) {
    let decimalPlaces = b.toString().substring(b.toString().indexOf(".") + 1).length;
    return parseFloat((a * b).toFixed(decimalPlaces));
  }
};
