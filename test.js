function sum(x, callbackfn){
    setTimeout(callbackfn, 100, x+1) // setTimeout 3번째 인자 => arguments
}
var result = 0

sum(2, function(x){
    result = x
})
console.log(result) //0

