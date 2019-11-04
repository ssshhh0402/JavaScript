// // 데이터를 외부로 부터 받아와서 변수에 저장하고 출력하는 함수
// // 1. 비동기 X
// function getData() {
//     const data = {
//         'data' : 'some data'
//     }
//     return data
// }


// let response = getData()
// console.log(response)



// // 2. setTimeout
// function getData(){
//     let datas
//     setTimeout(function(){
//         console.log('요청을 보냈습니다.')
//         data = {'data' : 'somedata'}
//     }, 1000)
//     return data
// }

// let response1 = getData()
// console.log(response1)


// // 3. Callback function 정의
// function getDataCallback(callback){
//     setTimeout(function(){
//         const data = {'data' : 'some_data'}
//         callback(data)
//     }, 1000 )
// }
// // 함수 호출, 인자로 함수를 넘겨주는데 그게 출력하는 작업
// getDataCallback(function(data){
//     let response2 = data
//     console.log(response2)
// })


// // 4. promise 
// function getDataPromise(){
//     return new Promise(resolve => {
//         setTimeout(function(){
//             console.log('요청을 보냈습니다.')
//             const data = { 'data': 'some data'}
//             resolve(data)
//         }, 1000)
//     })
// }

// let response3 = getDataPromise()

// console.log(response3) // 1. 출력 pending

// // console.log(response3) // 2. 출력 resolved
// // result3.then(response => console.log(response)) // 3. data 출력


// 4-1 Promise
// function myPromise (url){
//     return new Promise((resolve, reject) => {
//         if (url === 'http'){
//             resolve('성공')
//         }
//         else{
//             reject('실패')
//         }
//     })
// }

// const promise1 = myPromise('http')
// // console.log(promise1)
// const promise2 = myPromise('www')

// //promise1.then(response => console.log(response))
// promise1.then(response =>{
//     console.log('성공')
//     console.log(response)
// })
// .catch(error => {   //catch만 실행됨
//     console.log('error')
//     console.log(error)
// })


// getDataPromise()
//     .then(response => {     //response = data
//         return response.data        //{'data' : 'somedata' }
//     })
//     .then(data =>{      //data = 'some data'
//         console.log(data)   //'somedata'
//     })
//     .catch(error =>{
//         console.log(error)
//     })

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         return response.data.userId
//     })
//     .then (data =>{
//         return axios.get(`https://jsonplaceholder.typicode.com/users/${data}`)
//     })
//     .then(result =>{
//         console.log(result.data.name)
//     })
    
//5 async / await -> 동기작업인척 하기 + promise

function getDataPromise(){
    return new Promise(resolve => {
        setTimeout(function(){
            console.log('요청을 보냈습니다.')
            const data = { 'data': 'some data'}
            resolve(data)
        }, 1000)
    })
}

async function printData(){
    const response = await getDataPromise()
    console.log(response)
}

async function printUser(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const userId = response.data.userId
        const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        console.log(user.data.name)

    } catch(error){
        console.log(error)
    }
}