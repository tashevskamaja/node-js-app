const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age);
    }// arrow functions dont allow this keyword, you shoud use old way function or method greet() {} 
};  

const printName = ({name}) => {
    console.log(name);
};

printName(person);

const { name, age } = person; //object destructuring
console.log(name, age);// name, age to match with properties to the object

// const copiedPerson = {...person}; // spred operator ...
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);// hobby1, hobby2 you can choose any name you want in an array

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));// transform an array, transform the values, makes copy and returnes the new array, updated
// // console.log(hobbies);

// // hobbies.push('Programming');// not return a new array will add to the existing array

// // const coppiedArray = hobbies.slice();// copies we cant pass values

// // const coppiedArray = [hobbies]; //array with one element - an array in it nested array

// const coppiedArray = [...hobbies]; //spred operator ... to copy existing arrays, to pull elements out of array or object
// console.log(coppiedArray);

// const toArray = (...args) => { //rest operator ... to merge multiply arguments, to have all args
//     return args;
// };

// console.log(toArray(1,2,3,4));