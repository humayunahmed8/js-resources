var number = 11;
var stringName = '';

if(number % 2 == 0){
    console.log('Even Number')
}else{
    console.log('ODD Number')
}

console.log(stringName);

// Please use ternary operator, when you have to execute single line of statement. 
// Otherwise, you can use if-else statement. 
const resultWithTernaryOperator = number % 2 == 0 ? 'Even' : 'False'; 
console.log(resultWithTernaryOperator);