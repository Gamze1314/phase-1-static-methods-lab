class Formatter {
  //add static methods here

  static capitalize(str) {
    // capitalizes the first letter in the str
    return str.charAt(0).toUpperCase() + str.substring(1);
  }


 
  static sanitize(str) {
    // removes non-alphanumeric char.
    if (str.includes("@") || str.includes("!") || str.includes("/") || str.includes("%") || str.includes("$") || str.includes("#") || str.includes("*")|| str.includes("{")|| str.includes("(")|| str.includes("-")|| str.includes("^")) {
      return str.replace(/[@*({#!^/%$]/g, "");
    }
    return str;
  }

  static titleize(str) {
    // Capitalize the first letter of each word
    return str
      .split(' ') // split each word
      .map((word) => {
        if (['the','a' 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word)) { // lower case
          return word; // return as it is
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase(); // rest capitalize
      })
      .join(' ');
  }
}

console.log(Formatter.sanitize('ca$@#tching cold'))
console.log(Formatter.sanitize('Entert*ain(i{ng-Elephan^ts'))
console.log(Formatter.titleize('a tale of two cities'))
console.log(Formatter.titleize('chicken soup with rice and a few other songs'))