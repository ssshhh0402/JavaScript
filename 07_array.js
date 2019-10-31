
// 기본적으로 python과 유사하지만 음수(-1,-2...)로 접근하는거 불가능
let numbers = [10, 1, 3, 5]
console.log(numbers[0])
console.log(numbers.length)
numbers.reverse() //return += 원본 변화
console.log(numbers[0])
console.log(numbers.pop()) //numbers 맨 뒤에 있는 아이 + return (pop되는 아이)
numbers.push(3) // numbers 마지막에 추가 + return(numbers의 길이)
console.log(numbers) 
numbers.includes(1)     //1이 들어 있는가?(true/false)
numbers.includes(100)   // 100이 들어 있는가?

numbers.unshift(3) // numbers 제일 앞에 추가 + return(numbers의 길이)
numbers.shift() // numbers 가장 앞에 있는 원소 제거
numbers.indexOf(10) // 10의 위치 반환. 단, 같은 원소가 여러개 있을 경우 가장 앞에 있는 아이 반환
numbers.join('-')   // python join과 동일. 기본은 ,
