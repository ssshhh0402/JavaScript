/*
    Array helper methods
    */
/*
    Array.forEach
    */
let numbers_i = [1,2,3]
// 1. 반복문
    for(let i = 0; i < numbers_i.length; i++){
        console.log(numbers_i[i])
    }

// 2. 반복문 (for...of)
    for (number of numbers_i){
        console.log(number)
    }

numbers_i.forEach(function(number){
    console.log(number)
})


const images = [
    {height: 30, width : 20},
    {height: 100, width: 100},
    {height: 10, width: 5}
]
let areas = []
images.forEach(function(image,idx){
    console.log(idx)
    areas.push(image.height * image.width)
})
console.log(areas)


/*
    <map>
*/
let numbers = [1,2,3]
let doubleNumbers = numbers.map(function(number){
    return numbers.push(number * 2)
})
console.log(doubleNumbers)

let doubleNumbers2 = numbers.map(number => number*2)

//실습 images => map

let areas2 = images.map(image => image.width * image.height)
console.log(areas2)
let areas3 = images.map(function(image){
    return image.width * image.height
})
console.log(areas3)


/* 
    filter 
*/
let areas4 = []
//images 의 높이가 100보다 작은 object만 담은 배열
for (image of images){
    if (image.height <= 100){
        areas4.push(image.hieght * image.width)
    }
}
// return에 있는 조건문이 true/false를 판단하여 treu일 경우 보내준다.
myImage = images.filter(function(image){
    return image.height < 100
})
console.log(myImage)

let products = [
    {name : 'banana', type :'frut'},
    {name: 'tomato', type: 'vegetable'},
    {name : 'apple', type: 'fruit'},
    {name: 'cucumtber', type: 'vegetables'}
]


let bag = []
bag = products.filter(function(number){
    return number.type === 'fruit'
    
})
bag = products.filter(product => product.type === 'fruit')

/*
    reduce
    */

let mySsafy = [100, 100, 95, 90]
let score = 0
for (let score of mySsafy){
    score += score
}
let totalScore = mySsafy.reduce(function(total, score){
                        console.log(score)      // 각각 점수     
                        console.log(total)      // 합친 것들
                        return total + score
},100)      //초기 값
console.log(totalScore)
mySsafy.reduce((total,score) => total + score, 100)

/*
    find  : 일치하는 첫번째 원소를 리턴
*/
mySsafy.find(function(score){
    return score === 2
})

mySsafy.find(score => score === 2)

let heros = [
    {name: '헐크', age : 100},
    {name : '아이언맨', age : 50},
    {name : '스파이더맨', age : 30}
]


//나이가 30인 사람
let a = heros.find(function(hero){
    return hero.age === 30
})
console.log(a)
let b = heros.find(hero => hero.age === 30)
console.log(b)

/* 
    <some, every>
*/

let myNumbers = [1,2,3,4]
myNumbers.some(function(number){
    return number % 2 === 0
})
myNumbers = [1,3,5,7]
const c = myNumbers.some(function(number){
    return number % 2 !== 0
})
console.log(c)
const d = myNumbers.every(number => number % 2 !== 0)
console.log(d)