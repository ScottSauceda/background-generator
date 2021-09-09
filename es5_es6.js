// ECMA international

// ECMAScript === Javascript

// we are up to ES7 right now

// Babel <-- dev can use new Javascript features as they come,
// reads javascript and changes it to a version of javascript that all browsers understsand


// ES5 & ES6

/*
    let + const
*/

// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;

// if(experience > 90) {
//     let wizardLevel = true;
//     console.log("inside", wizardLevel);
// }

// console.log("outside", wizardLevel);

// const a = function() {
//     console.log("a");
// }



// Destructuring

// const obj = {
//     player : 'bobby',
//     experience : 100,
//     wizardLevel : false,
// }

// const player = obj.player;
// const experience = obj.experience;
// let wizardLebel = obj.wizardLevel;

// const {player, experience} = obj;
// let {wizardLevel} = obj;







// const name = 'john snow';
// const obj = {
//     [name]: 'hello',
//     ['ray + smith']: 'hihi'
// }

// const b = "Simon";
// const c = true;
// const d = {};

// old way
// const obj2 = {
//     b: b,
//     c: c,
//     d: d
// }

// new way
// const obj2 = {
//     b,
//     c,
//     d
// }



// Template strings

// old way
// const greeting = "hello " + name + "you seem to be doing " + mood;

// const name = "Sally";
// const age = 34;
// const pet = "horse";
// // new way
// const greetingBest = `Hello ${name} you seem to be doing ${age - 10}. What a lovely ${pet} you have`;


// console.log(greetingBest);



// default arguments

function greet(name = '', age = 30, pet = 'cat'){
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`
}

console.log(greet("john", 50, 
'monkey'));


// Symbol

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("bar");
// symbol used to identify object properties



// arrow functions

function add(a, b) {
    return a * b;
}

const add2 = (a, b) => a * b;