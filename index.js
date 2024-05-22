class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  static titleize(str) {
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !excludedWords.includes(words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }
    return words.join(' ');
  }
}
