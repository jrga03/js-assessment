exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: async function (value) {
    return await value;
  },

  manipulateRemoteData: async function (url) {
    const names = [];
    await fetch(url).then(res => res.json()).then(data => data.people.forEach(obj => names.push(obj.name)));
    return names.sort();
  }
};
