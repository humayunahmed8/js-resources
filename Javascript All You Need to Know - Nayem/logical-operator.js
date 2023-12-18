// Logical Operator 
// && (AND), || (OR)-(vertical bar), ! (NOT)


const a = 10;
const b = 20;
const c = 30;
const d = 40;


// && Operator : Every statement must be true 
if(a > b && a < c){ 
    console.log('A is greater than B, and C is also greater than A')
}else{
    console.log('Statement wrong') // False  
}


// || Operator : Only one statement must be true, otherwise it will be false 
if(a > b || c > a){
    console.log('A is greater than b and C is greater than a') // True 
}else{
    console.log('Statement wrong')
}

// ! (Reverse the value) , if statement is true, it will be provide value of false

const yourAge = !!(21); // ! = false, !! = true 
console.log(yourAge)

