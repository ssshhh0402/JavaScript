function a(){
    console.log('a')
}
console.log('hi') // 출력 순서 1
setTimeout(a, 5000) //출력순서 3
console.log('bye')//출력순서 2


function printHello(){
    console.log('Hellooooooooo')
}

function baz(){
    setTimeout(printHello, 3000)
    console.log('baz')
}
function bar(){
    console.log('bar')
    baz()
}
function foo(){
    bar()
    console.log('foo')
}

foo()