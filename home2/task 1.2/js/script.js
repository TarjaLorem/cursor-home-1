/*task 1.2*/
var arr = [1,2,3,3,9,-1,10];
function sortMin(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
}
function sortMax(a, b) {
	if (a < b) return 1;
	if (a > b) return -1;
}
var min = arr.sort(sortMin);
var max = arr.slice().sort(sortMax);
console.log("MIN: " + min[0] + " MAX: " + max[0]);
