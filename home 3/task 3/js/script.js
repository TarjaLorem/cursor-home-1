function tenSeconds () {
  return new Promise (function(resolve, reject){
      setTimeout(function(){
        Math.random() > .5 ? resolve(): reject("error");
        },10000)
  })
}
tenSeconds("10").then(function(){
    console.log("It started 10 seconds ago");
}).catch(function(error){
  console.error(error)
})