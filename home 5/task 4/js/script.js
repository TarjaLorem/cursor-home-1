var bind = function (func,context) {
    var bindArg = [].slice.call(arguments,2);
    return function (){
        var fnBind = [].slice.call(arguments);
        return func.apply(context,bindArg.concat(fnBind));
    };
};


var sum = function(a, b, c) {
  return this.sum + a + b +c;
};
var bindedSum = bind(sum,{sum: 10},10,20,50)
console.log(bindedSum())
