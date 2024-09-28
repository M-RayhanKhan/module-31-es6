const numbers = [4, 2, 5, 3];

function doubled (num){
    // console.log('num', num);
    return num * 2;
}   

const result = numbers.map(doubled);
// console.log(result); 

const doubled2 = x => x * 2;

const result2 = numbers.map(doubled2);
// console.log(result2);

const output = numbers.map(n => n * 3);
console.log(output);

// const boubled = [];
// for (const num of numbers) {
//     const result = num * 2;
//     boubled.push(result)
// }
// console.log(boubled);