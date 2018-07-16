/*task 2*/
var arr = [1,10]
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
var midl = result / arr.length;
console.log(midl);