
const numbers = [1,3,5,7,9];
for(let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 1) {
        numbers[i] += 1
    }
}
// console.log(numbers);

const result = numbers.map(num => num++);
// console.log(result);

// task 2
const arrayNumber = [33, 50, 79,78, 90, 101, 10];
const result1 = arrayNumber.filter(number => number % 10 === 0);
// console.log(result1);
const result2 = arrayNumber.find(number => number % 10 === 0);
// console.log(result2);

// task 3
const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Akil', age: 30, position: 'Senior'}
]

const senior = instructor.filter(sen => sen.position === 'Senior');
console.log(senior);