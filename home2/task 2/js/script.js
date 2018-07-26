/*task 2*/
function num (n){
	if ( n > 1){
		console.log(n)
		return num (n - 1);
	}
	else {
		return 'end';
	}
}
console.log(num(10))