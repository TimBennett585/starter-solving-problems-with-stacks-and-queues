const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  let middle = Math.floor(sentence.length / 2);

  let result = new Stack();

  for (let i = 0; i < middle; i++) {
    result.push(sentence[i]);
  }

  middle += sentence.length % 2 === 0 ? 0 : 1;

  for (let i = middle, limit = sentence.length; i < limit; i++) {
    if (sentence[i] !== result.pop()) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
