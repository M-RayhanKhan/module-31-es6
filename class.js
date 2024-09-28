const products = [
    { id: 1, name: "lenovo", price: 40000 },
    { id: 2, name: "dell", price: 45000 },
    { id: 3, name: "mac", price: 150000 },
    { id: 4, name: "hp", price: 60000 },
]

// has some properties , methods
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speck(talk){
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('le novo');
// console.log(lenovo);
// lenovo.speck('o mago kita kau')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject
    }
}
const shopn = new Teacher('Shopn sir', 'physics')
console.log(shopn);

const mijan = new Teacher('Mijan sir', 'Math');
console.log(mijan);