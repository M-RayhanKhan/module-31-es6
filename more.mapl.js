const numbers = [12,10, 8 , 15, 7];
const doubled = numbers.map(num => num * 2);
// console.log(doubled);

const tenBonus = numbers.map(num => num + 10);
// console.log(tenBonus);

const halves = numbers.map(num => num / 2);
// console.log(halves);

const friends = ['Rakib','Abu Bakar','Kamal','Ibrahim', 'Babu'];
const nameLength = friends.map(fri => fri.length)
// console.log(nameLength);
const firstLetter = friends.map(firs => firs[0]);
console.log(firstLetter);