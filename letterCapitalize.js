// capitalize the first letter of every word in a given string

var letterCapitalize = function (str) { 
  return str.split(' ').reduce(function(first, next) {
    return first + next.slice(0,1).toUpperCase() + next.slice(1) + ' ';
  }, '').slice(0, this.length-1);
}
