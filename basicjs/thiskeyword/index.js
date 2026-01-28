function greet(greet,message){
    console.log(`${greet} ${this.name} ${message}`)
}
let person = {
    name:"adam"
}
// greet.call(person,"hello","how are u?")
// const bindFun=greet.bind(person,"hello","how are you?")
// bindFun()
const bindFun = greet.bind(person)
bindFun("hello","how are u?")