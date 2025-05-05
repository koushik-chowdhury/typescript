// any causing a error
function addTwo(num) {
    return num.toUpperCase() + 2
}
let result = addTwo("kc2")
console.log(result)

// avoiding any
function add(num: number) {
    return num + 10
}
let value = add(10)
console.log(value)

// string
function getUpper(value: string) {
    return value.toUpperCase()
}
let name = getUpper('Koushik Chowdhury')
console.log(name)

// sign up | each variable mark as any

function signUpUser(name, email, password) {
    return { name, email, password }
}
let user = signUpUser(1, 2, 3)
console.log(user)
console.log(typeof user.email) // number

// avoiding any
function signUpUserAgain(name: string, email: string, password: string, isPaid: boolean) {
    return { name, email, password, isPaid }

}
let correctUser = signUpUserAgain('Koushik Chwodhury', 'csakoushik@gmail.com', 'hello1234', true)
console.log(correctUser)
console.log(typeof correctUser.name) // string

// arrow funciton

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    return { name, email, isPaid }
}
let logUser = loginUser('koushik', 'csakoushik@gmail.com')
console.log(logUser)

// Function that takes a number and returns a string (but should return a number)

function addition(num: number) {
    return `Hello i am string`
}
console.log(addition(2)) // expect return number

// corrected version

function Addition(num: number): number {
    return num + 5
}

console.log(Addition(10))

// function type in arrow function

const helloWorld = (s: string): string => {
    return "Koushik Chowdhury"
}

// const heros = ['thor','spiderman','ironman']
const heros = [1,2,3]

heros.map(hero=>{
    return `Hero is ${hero}`
})

// another type of function

function consoleError(errmsg:string):void{
    console.log(errmsg)
}
consoleError("hello")

function handleError(errmsg:string):never{
    throw new Error(errmsg)
}

export { }