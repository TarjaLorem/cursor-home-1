var input = document.querySelectorAll('input');
var save = document.getElementById('save');
var arr2 = [];


save.onclick = function () {
    createTrInTable()
	addTableElem();
}
function addTableElem(){
	var arr = new Array();
	// for (var i = 0; i <= arr2.length; i++) {
	// 	table.className = i;
	// }
 //    console.log(table.className)
	for (var i = 0; i < input.length; i++) {
		if (document.querySelectorAll('input')[i].value === '') return console.error('Input your data');
		var people = document.querySelectorAll('input')[i].value;
		arr.push(people);
		var tableTd = document.createElement("td");
		var elemTable = document.querySelector("tbody tr:last-child").appendChild(tableTd);
		var textTable = document.querySelector("tbody tr:last-child td:last-child").innerHTML = arr[i];
	}	
}

function createTrInTable(){
    var tableTr = document.createElement("tr");
    var table = document.querySelector("tbody").appendChild(tableTr);
    arr2.push(tableTr);
    for (var i = 1; i <= arr2.length; i++) {
        var cklickOnTr = document.querySelectorAll('tbody tr')[i];
        cklickOnTr.onclick = function(){
    		addDataVisibility(this);
        	for (var j = 0; j < arr2.length; j++) {
        		notDataVisibility(arr2[j]);
        	}
    	}
    }    
}
function notDataVisibility(arr){
	arr.classList.toggle('notDataVisable');
}
function addDataVisibility(arr){
	arr.classList.toggle('isDataVisible');
}