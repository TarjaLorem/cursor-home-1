// task 2.1
// let bob = {
//   name: 'Bob',
//   age: 22
// }

// let joe = {
//   name: 'Joe',
//   lastname: 'Doe',
//   age: 21,
//   location: 'NY'
// }
// Object.prototype.numberOfProps = function(){
//     var cont = -1;
//     for (var key in this){
//         cont++;
//     }
//     return cont;
// };
// console.log(joe.numberOfProps())

// task 2.2
// let obj1 = {
//   item1: 23,
//   item2: 'aaaa',
//   item3: '11',
//   item4: NaN,
//   item5: 0
// }

// let obj2 = {
//   item1: 3,
//   item2: -1,
// }

// Object.prototype.sumOfNumberProps = function(){
//     var sum = 0;
//     for(key in this){
//         if (!isNaN(this[key]) || this[key] === Number(this[key]) ){
//             sum += Number(this[key]);
//         }
//     }
//     return sum;
// };
// console.log(obj1.sumOfNumberProps()) // 34
// console.log(obj2.sumOfNumberProps()) // 2


// /*task 2.3*/
// Object.prototype.objectMap = function(func){
//     Object.keys(this).map(name => {
//     	var newObject = func(this[name],name);
//     	console.log(newObject)
//     });
// };
// // Object.prototype.objectMap = function(func){
// //     var newObject;
// //     for (key in this){
// //         newObject = func(this[key], key)
// //         // console.log(newObject);
// //     }
// // };
// let obj1 = {
//   item1: 23,
//   item2: 'none',
//   item3: '11',
//   item4: NaN,
//   item5: 0
// }

// let obj2 = {
//   item1: 3,
//   item2: -1
// }
// // console.log(obj1,obj2);



// obj1.objectMap(function(item,key) {
//     return `${key} ${item + 1};`
// }) // {
//     //    item1: 24,
//     //    item2: 'none1',
//     //    item3: '111',
//     //    item4: NaN,
//     //    item5: 1
//     //  }
// obj2.objectMap((item,key) => {
//   return  item + 1 
// }) // {
//     //    item1: 4,
//     //    item2: 0
//     //  }
// // console.log(obj1,obj2);


// task 2.4
// let num = 4;

// Number.prototype.increment = function(argument){
//   let a = this.valueOf();
//   if (!argument) argument = 1;
//   a += argument;
//   this.__proto__.valueOf = () => a;
//   return a
// };


// console.log(num.increment()) // 4 +1 = 5
// console.log(num.increment(10)) // 5 + 10 = 15
// console.log(num.increment(10)) // 15 + 10 = 25

// task 2.5
// let num = 4;
// let num2 = 4;
// Number.prototype.increment = function(argument){
//   let a = this.valueOf();
//   if (!argument) argument = 1;
//   a -= argument;
//   this.__proto__.valueOf = () => a;
//   return a
// };


// console.log(num2.increment()) // 4 +1 = 5
// console.log(num.increment(10)) // 5 + 10 = 15
// console.log(num.increment(10)) // 15 + 10 = 25


// task 2.6
// let num1 = 123;
// let num2 = 479;

// Number.prototype.sumOfDigits = function(){
//   var sum = 0;
//   var strNum = this + '';
//   var arrNum = strNum.split('');
//   for (var i = 0; i < arrNum.length; i++) {
//     sum += +arrNum[i];
//   }
// return sum;
// };


// console.log(num1.sumOfDigits()) // 1 + 2 + 3 => 6
// console.log(num2.sumOfDigits()) // 4 + 7 + 9 => 20


// task 2.7

// let arr1 = [3, 5, 6, 8, 2];
// let arr2 = [6, 8, 11, 4, 13];

// Array.prototype.sumOfFirstLast = function(argument){
//     var firstElem = this[0];
//     var lastElem = this[this.length - 1];
//     return sum = firstElem + lastElem;      
// };
// console.log(arr1.sumOfFirstLast()) // 5
// console.log(arr2.sumOfFirstLast()) // 19

/*task 2.8*/
// var arr = [1,2,3,[4,5,6,[7,8,9]]];

// // // function arrReturn(arr){
// // // 	for (var i = 0; i < arr.length; i++) {
// // // 		if (!Array.isArray(arr[i])){
// // // 			newArr.push(arr[i])
// // // 		}
// // // 		if(Array.isArray(arr[i])){
// // // 			newArr.push(arrReturn(arr[i]));
// // // 			console.log(newArr) 
// // // 	 	}	
// // // 	}
// // // }


// Array.prototype.innerMap = function(func){
// 	// console.log(this)
// 	var newArr = [];
//  	for (var i = 0; i < this.length; i++) {
//  		if (!Array.isArray(this[i]) ) {
//  			newArr.push(func(this[i]))
//  		}
//  		if (Array.isArray(this[i])) {
// 			newArr[i] = this[i].innerMap(func);
//  		}
//  	}
//  	return newArr
// };


// arr2 = arr.innerMap(function(item){
// 	return item + 1;
// })

// console.log(arr2)
















