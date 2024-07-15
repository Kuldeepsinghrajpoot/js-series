// lets begin

// first we need to declare a variable

// var ke bare ,
// var is a keyword used to declare a variable in javascript 
// var is function scoped or a global scoped es ko nahi padna hai abhi thoda sa wait karo m bata dunga latter

// var can be redeclared and updated
// var can be declared without assigning a value to it

var myVariable = 10;  // myvariable eak name h jo ki values ko hold karta h , or yah var type ka h
var myVariable = 20;
var myVariable

console.log(myVariable); // 10

// we can also declare a variable without assigning a value to it
// let ko eak bar declare karne ke bad dubara declare nahi kar sakte
// let is block scoped
// let is a keyword used to declare a variable in javascript
// let can't be redeclared but can be updated
{ let isUserLoggedIn }

{ let isUserLoggedIn = true; }

{ let isUserLoggedIn = false; }

// same variable name could't assign in the let
let headmaster = 'akalesh';
 headmaster = 'kuldeep';



// cosnt is blocked scoped
// const is a keyword used to declare a variable in javascript
// const can't be redeclared or updated
// const must be assigned a value at the time of declaration
const myConstVariable = 10;
const name = 'hi';

// = assignment operator