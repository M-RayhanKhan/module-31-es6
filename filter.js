// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const numbers = [50, 55, 60 , 65 ,70 ,80 , 75 , 78 , 36];
// const selects = numbers.filter(num => num > 60) 
// const selects = numbers.filter(num => num > 70) 
// const selects = numbers.filter(num => num > 50) 
// const selects = numbers.filter(num => num < 50) 
// const selects = numbers.filter(num => num > 80) 

// const selects = numbers.filter(num => num % 2 === 1)
// const selects = numbers.filter(num => num % 2 === 0)


const friends = ['rayhan', 'forhad', 'tupazzul', 'nasir', 'rakib'];
// const selects = friends.filter(name => name.length % 2 === 1);
// const selects = friends.filter(name => name.length % 2 === 0);
const selected = friends.filter(name => name.length > 5);
console.log(selected);