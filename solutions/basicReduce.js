function countWords(inputWords) {
  return inputWords.reduce((result, word) => {
    result[word] = ++result[word] || 1
    return result
  }, {})
}

module.exports = countWords
