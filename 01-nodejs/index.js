// console.log('Hello World');


let num1 = 1;
let num2 = 2;
let totalSum = num1 + num2;
// console.log(`The sum is ${totalSum}`);


// funkcija koja sabire dva broja
const sum = (num1, num2) => {
    return num1 + num2;
};
// console.log(sum(3, 4));


// pronaci da li element postoji u nizu - true ili false rezultat
const checkIfElementExistsInArray = (number, arr) => {
    return arr.includes(number);
};
const NUMBERS = [1,2,3,4,5];
let numberToCheck = 3;
// const result = checkIfElementExistsInArray(numberToCheck, NUMBERS);
// console.log(result);


// ispisati sve brojeve vece od 10
const filterOutNumbersBiggerThan10 = (arr) => {
    const filteredNumbers = arr.filter((number) => number > 10);
    return filteredNumbers;
};
const ARR = [5, 10, 15, 20, 25];
// const result = filterOutNumbersBiggerThan10(ARR);
// console.log(result);


// brisanje korisnika po id-u
const removeUserById = (id) => {
    const users = [{ id: 1, name:' John' }, {id: 2, name: 'Kerim' }];
    const filteredUsers = users.filter((user) => user.id !== id);
    console.log(filteredUsers);
};
removeUserById(1);


// mapiranje svakog broja i uvecavanje njegove vrijednosti za 10
const increaseNumbersByTen = (arr) => {
    const increasedNumbers = arr.map((number) => number + 10);
    console.log(increasedNumbers);
};
increaseNumbersByTen([1,2,3,4,5]);


// pronaci element po id-u
const getUserById = (id) => {
    const users = [{ id: 1, name:' John' }, {id: 2, name: 'Kerim' }];
    const user = users.find((user) => user.id === id);
    console.log(user);
};
getUserById(1);


// izmjeniti korisnikovo ime po id-u
const changeUserName = (id, newName) => {
    const users = [{ id: 1, name:' John' }, {id: 2, name: 'Kerim' }];
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users[userIndex].name = newName;
        console.log(users);
    };
};
changeUserName(1,'Haris');
