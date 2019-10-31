const me = {
    name: 'kim',
    'phone number' : '01012345678',
    phone:{
        type : 'iphone XS MAX'
    },
    // 메서드 function 키워드만 작성하기!
    greeting: function(){
        console.log(this)
        console.log(`hi${this.name}`)
    },
    greeting2: () => {
        console.log(this)       //this = 전역객체 window
        console.log(`hi ${this.name}`)
    }
}

console.log(me.greeting())
console.log(me.greeting2())
console.log(window.name)


// ES6+ 오브젝트 리터럴
let book = '자바스크립트 완전정복'
let album = {
    IU:['좋은 날', '밤편지'],
    BTS:['ASDFG']
}

let bag = {
    book,
    album
}
console.log(bag)

//JSON(Javascripts object notation - 자바스크립트 , Python )
// 자바스크립트 오브젝트 표기법을 가지고 있다
// Object는 왠만하면 ""로 작성!

JSON.stringify(me)
let jsonData = JSON.stringify(me)   //JSON => Object
let myObject = JSON.parse(jsonData) // Object => Json