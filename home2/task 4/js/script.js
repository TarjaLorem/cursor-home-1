/*task 4*/
var arr = '#';
for (var i = 0; i <= 10; i++) {
	arr += '#';
	console.log(arr);
}

/*task 4.2*/
function recurs(n, str) {
    console.log(str);
    if (n !== 0) {
       recurs(n - 1, str + '#');
    }
}
recurs(10, '#');

