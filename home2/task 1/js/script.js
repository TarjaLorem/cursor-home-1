/*task 1*/
var USD = 28;
 function convertUSD () {
 		var usd = document.getElementById('usd').value;
 		var html = usd + " USD" + " = " + "UAH " + usd * USD;
 		document.getElementById('result1').innerHTML = html;
 }	
document.getElementById('convertation1').addEventListener('click', convertUSD);

function convertUAH () {
	var uah = document.getElementById('uah').value;
	var html = uah + " UAH " + " = " + " USD " + uah / USD;
	document.getElementById('result2').innerHTML = html;
}
document.getElementById('convertation2').addEventListener('click', convertUAH);