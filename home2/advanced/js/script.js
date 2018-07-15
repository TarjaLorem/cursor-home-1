/*Advanced
task 1*/
function XO(str) {
  var ste = str.toLowerCase().split('');
  for(var i = 0; i < ste.length; i++){
    if(ste[i] !== 'x' && ste[i] !== 'o'){
     ste[i] = 0;
    }
    if(ste[i] == 'x'){
     ste[i] = 1;
    }
    else if(ste[i] == 'o'){
      ste[i] = -1;
    }
} 
var result = ste.reduce(function(sum, current) {
  return sum + current;
}, 0);
if ( result == 0 ){
  return true;
}
else{
  return false;
  }
}

console.log(XO('xooxx'));

/*task2*/
function array_diff(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      result.push(a[i]);
    }
  }
  return result;
}
console.log(array_diff([1,2], [2]));
/*task3*/

function validatePIN (pin) {
var arr = pin.split('');
for (var i = 0; i < arr.length; i++){
    arr[i] = +arr[i];
    if (isNaN(arr[i])){
      return false;
    }
}
if (arr.length ==6 || arr.length == 4){
  return true;
  }
  return false;
}
console.log(validatePIN("994a"));

/*task4*/
function solution(number){
var sum = 0;
for (var i = 1;i < number; i++){
    if (i % 5 == 0 || i % 3 == 0){
       sum += i;
    }
  }
  return sum;
}
console.log(solution(16));

/*task5*/
function filter_list(l) {
var arr = [];
for (var i = 0; i < l.length; i++){
     if (l[i] !== l[i] + '') {
         arr[i] = l[i];
     }
  }
return arr;
}
console.log(filter_list([1,2,'a','b']));