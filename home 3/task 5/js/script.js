
function recursion (number){
	document.write(number )
	if (number > 0){
		document.write(',')
		return recursion(number = number - 1);
		
	}
}
recursion(10);


