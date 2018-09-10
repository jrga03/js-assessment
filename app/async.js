exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: async function (value) {
    return await value;
  },

  manipulateRemoteData: async function (url) {
    const response = await fetch(url);
    const json = await response.json();

    return json.people.reduce((acc, cur) => {
      acc.push(cur.name)
      return acc;
    }, []).sort();
  }
};
