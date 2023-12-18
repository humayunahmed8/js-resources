// variable 

const x = 5;
const y = 5;

const total = x + y;

console.log(total);


// for Loop (Example : Get Square) 

const number = [4, 5, 6, 8, 12, 18];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const square = element * element;
    console.log(square);
}

// function 

function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

console.log(add(10, 12)); // 22

// Arrow Function 

const addNew = (numOne, numTwo) => {
    return numOne + numTwo;
}

console.log(addNew(10,90)); // 100

// Object 

const obj = {
    Name : 'Rahim',
    Id : 10
}

console.log(obj.Name, obj.Id); // Rahim 10

// ES6 String 

const myName = 'Md Karim Uddin';

const aboutKarim = `${myName} is Very Good Boy`;
console.log(aboutKarim); // Md Karim Uddin is Very Good Boy



