let userName = prompt('넌 누구냐')
let message = `<h1>${userName} 환영</h1>`


if (userName === 'ssafy'){
    message = 'Hello SSAFY'
}else if (userName === '1q2w3e4r'){
    message = 'Admin page입니다'
}
else{
    message = `<h1>${userName} 환영합니다.</h1>`
}

switch(userName){
    case '1q2w3e4r':{
        message = '<h2> ㅎㅇㅎㅇ </h2>'
        break
    }
    case 'ssafy':{
        message= '<a href="https://edu.ssafy.com"> 싸피 </a>'
        break
    }
    default: {
        message = `<h1>${userName} 환영합니다. </h1>`
        break
    }
}
document.write(message)

/* 반복문
var는 함수 스코프를 가지고 있어서 for 문 이후에 i 변수 값 유지
let은 블록 스코프를 가지고 있어서 for 문 이후에 해당 변수 없음 
*/
for (var i = 0; i < 5; i++){
    document.write(i)
}
console.log(i)

// for (let a = 0; a < 5; a++){
//     document.write(a)
// }
// console.log(a)

let myArray = ['태우', '경호', '은비']

for (let name of myArray){
    document.write(name)
}