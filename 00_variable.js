// console.log('Happy')

// // var  재할당 가능 / 재선언 가능
// console.log(a)
// var a= '변수'
// // 변수 hoisting(호이스팅) : 해당 스코프 범위 내에서 최상단에 자동으로 변수 선언을 함?
// // 그렇기 때문에 a를 선언하기 전 호출할 경우, undefined로 나옴!



// // let(ES6+) 재할당 가능 / 재선언 불가능
// 변수는 왠만하면 let 사용
// console.log(b)
// let b = '변수'


// // const(ES6+)
// // const는 재할당, 재선언 불가능(구데기) 
// const는 상수 에서만 사용
// const c = '변수 c'
// c = '단순한 c가 아님'   //재할당
// const c = '변수 c가 아님' //재 선언
// console.log(c)

// let, const vs var
// 재선언 불가능 vs 재선언 가능
// 블록 스코프 vs 함수 스코프
// var = 함수 스코프
// let = 블록 스코프
var outerVar = '밖'
if (true){
    console.log(outerVar)
    var outerVar = '안'
}

console.log(outerVar)

let outerLet = '밖'
if (true){
    let outerLet = '안'
}
console.log(outerLet)

// 재선언이 가능한 형식은 선언만 먼저 가능, 아닐 경우 선언만 하는거 불가능
const tak
let tak