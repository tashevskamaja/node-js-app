const name = 'Max';
let age = 29;
const hasHobbies = true;

const summerizeUser = (userName, userAge, userHasHobbies) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);
};

console.log(summerizeUser(name, age, hasHobbies));

// const add = (a,b) => a + b;
// const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1,2));
// console.log(addOne(1));
console.log(addRandom());