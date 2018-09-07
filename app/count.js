exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let counter = null;
    let count = start;
    console.log(count);
    counter = setInterval(function () {
      count++;
      console.log(count);

      if (count === end) {
        clearInterval(counter);
      }
    }
      , 100)

    this.cancel = () => {
      clearInterval(counter);
    }
    return this;
  }
};
