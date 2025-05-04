"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// any causing a error
function addTwo(num) {
    return num.toUpperCase() + 2;
}
var result = addTwo("kc2");
console.log(result);
// avoiding any
function add(num) {
    return num + 10;
}
var value = add(10);
console.log(value);
// string
function getUpper(value) {
    return value.toUpperCase();
}
var name = getUpper('Koushik Chowdhury');
console.log(name);
// sign up | each variable mark as any
function signUpUser(name, email, password) {
    return { name: name, email: email, password: password };
}
var user = signUpUser(1, 2, 3);
console.log(user);
console.log(typeof user.email); // number
// avoiding any
function signUpUserAgain(name, email, password, isPaid) {
    return { name: name, email: email, password: password, isPaid: isPaid };
}
var correctUser = signUpUserAgain('Koushik Chwodhury', 'csakoushik@gmail.com', 'hello1234', true);
console.log(correctUser);
console.log(typeof correctUser.name); // string
// arrow funciton
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
};
var logUser = loginUser('koushik', 'csakoushik@gmail.com');
console.log(logUser);
