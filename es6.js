/**
 * 1. var let const
 * 2. default parameter 
 * 3.template sting
 * 4.arrow function
 * 5.destructuring and spread operator
 * 6.Object.keys, object.values, Object.entries
 * 7.for of used in array and string
 * 8.for loop used in object
 * */ 

const a = 56;
 const numbers = [56, 7, 8];
 const person ={
    name: 'sakib khan'
 }
 const message = `Hi ${person.name} has a: ${a} access to ${numbers[2]}`
 const square = x => x * x;
 const sum = (a, b) => a + b;

 const {age, z, ...others} = {x:2, y:3, z: 4, name: king, age: 29}