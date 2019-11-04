const me = {
    name : 'tak',
    phone : '010-9281',
    greeting : function(){
        return 'hi ' + this.name
    }
}


const Person = function(name, phone){
    this.name = name
    this.phone = phone
    this.greeting = function(){
        return 'hi ' + this.name
    }
}

const Animal = name =>{
    this.name= name
} 
const dog = new Animal('dog') // 오류!


const name = '겨레'
const phone = '123412341234'
const greeting = function(){
    return 'hi ,' + this.name
}
const you = {
    name,
    phone,
    greeting,
}