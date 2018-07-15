/*task 5*/
function fib (n) {
	var a = 1;
	var b = 1;
	for (var i = 2; i < n; i++) {
		 var c = a + b;
		 a = b;	
		 b = c;
	}
	return b;
}
console.log(fib(10));	