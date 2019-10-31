var my_var //선언 
my_var = 1 //할당
console.log(my_var)

var my_var = 'hello'

console.log(my_var)

let mylet
mylet = 1
console.log(mylet)
mylet = 2
console.log(mylet)
mylet = 'mylet'
console.log(mylet)
// let mylet = 5        // let 재선언 -> 오류!
// console.log(mylet)

//const myconst         const는 재선언/할당이 안되기 때문에 선언할때 할당안해주면
//                      오류
const myconst = 3
console.log(myconst)

// myconst= 5           const 재 할당 -> 오류
// console.log(myconst)

// const myconst = 'bye'    const 재선언 -> 오류!
// console.log(myconst)

let VarFunction = function(){
    var myVar = 5
    console.log(myVar)
    if (true){
        var myVar = 9
        console.log(myVar)
    }
    console.log(myVar)
}

let LetFunction = function(){
    let myLet = 5
    console.log(myLet)
    if (true){
        let myLet = 9
        console.log(myLet)
    }
    console.log(myLet)
}

VarFunction()
LetFunction()
