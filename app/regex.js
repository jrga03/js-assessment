exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    const regex = new RegExp( /\d/ );
    return regex.test(str);
  },

  containsRepeatingLetter: function(str) {
    const regex = new RegExp( /([A-Za-z])\1/ );    
    return regex.test(str);
  },

  endsWithVowel: function(str) {
    const regex = new RegExp( /[aeiouAEIOU]$/ );
    return regex.test(str);
  },

  captureThreeNumbers: function(str) {
    const regex = new RegExp( /\d{3}/ );
    return regex.test(str) && str.match(regex).slice(0,3).join("")
  },

  matchesPattern: function(str) {
    const regex = new RegExp( /^\d{3}-\d{3}-\d{4}$/ );
    return regex.test(str);
  },

  isUSD: function(str) {
    const regex = new RegExp( /^\$(?=\d)(\d{1,3})(,(\d{3}))*(\.(\d{2}))?$/ );
    // console.log(str, regex.test(str))
    return regex.test(str);
  }
};
