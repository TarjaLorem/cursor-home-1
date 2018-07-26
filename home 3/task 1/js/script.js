Array.prototype.map = function(func){
	var newArray = [];
	for (var i = 0; i < this.length; i++) {
		newArray.push(func(this[i], i, this))
	}
	return newArray;
};
var arr = [1,2,3];
var arr2 = arr.map(function(item, index, array){
	return item * 3;
})
console.log(arr2);


