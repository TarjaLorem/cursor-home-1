function tenSeconds () {
  return new Promise (function(resolve, reject){
      setTimeout(function(){
        Math.random() > .5 ? resolve("It started 10 seconds ago"): reject("error");
        },1000)
  })
}
function promiseFirst (data){
	return new Promise (function(resolve,reject){
		resolve(tenSeconds().then(function(data){
			console.log(data);
		}))
	})
}

async function showAllData(){
	try{
		await promiseFirst();
	} catch(err){
		console.log(err);
	}
}
showAllData();