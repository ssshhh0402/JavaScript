/*
<함수>

*/
console.log(myAdd(1,2))
//console.log(myAdd2(1,2))

// 선언식 -> hoisting 가능 하기떄문에 선언하기전에 호출해도 출력
function myAdd(a,b){
    return a + b
}

// 표현식
// let myAdd2 = function(a, b){
//     return a+b
// }

/*
<arrow function>
* ES6+
** function myFunction(a){
    console.log(a+1)
}
// 1. function 키워드 삭제 후 =>
** let myArrowFunction = (a) => {return a+1}
// 1-1. 인자가 하나라면 소괄호 삭제 가능
// 1-2 문장이 한줄이고, 리턴이라면 중괄호 및 return 키워드 생략 가능
** let myArrowFunction2 = a => a+1

*/


// 제곱의 결과를 나타내는 square 함수
let Square = function(a){
    return a ** 2
}
Square = (a) => {return a**2}
Square = a => a**2

let greeting = function(){
    console.log('happy!')
}
greeting = () => {console.log('happy!')}
greeting = _ => {console.log('happy!')}

// 1-4. 기본인자
// () 안에 인자가 들어올 경우 들어온 인자로 출력 없을 경우 default인 '타키'로 출력
let greeting2 = (name='타키') => name


/* <익명함수> 
*/

(function (a){
    return a * 10 
}(10))
((a) => a * 10)(10)