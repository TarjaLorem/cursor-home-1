const addPromise = () => Promise.resolve("V")

var getPromise = function(){
	addPromise().then(function(data){
		console.log(data);
	}).catch(function(err){
		console.log(err);
	})

}
getPromise();
