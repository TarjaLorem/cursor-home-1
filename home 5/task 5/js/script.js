var multiple = function (a) {
	curentMulty  = a;
	function func (b){
		curentMulty *= b;
		return func;
	};
	func.toString = function(){
		return curentMulty;
	}
	return func;
};

console.log(multiple(10)(50)(50))
