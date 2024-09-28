const products = [
    { id: 1, name: "lenovo", price: 40000 },
    { id: 2, name: "dell", price: 45000 },
    { id: 3, name: "mac", price: 150000 },
    { id: 4, name: "hp", price: 60000 },
]
const pricePro = products.map(price => price.price);
// console.log(pricePro);

// forEach
// products.forEach(p => console.log(p.id))

// filter 
const expensive = products.filter(price => price.price > 50000);
// console.log(expensive);

// find;
const price = products.find(p => p.price < 50000)
// console.log(price);

// reduce
const total = products.reduce((acum, current) => acum + current.price,0);
console.log(total);