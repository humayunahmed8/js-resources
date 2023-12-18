// আগে যেভাবে ফাংশন কল করা হত-

function hello() {
    return "Hello World!";
}

console.log(hello());

// চাইলে এভাবেও কল করা যায়। 

another = function() {
    return "Hello World!";
}


// Arrow Function যদি প্যারামিটার লাগে তাহলে এভাবে কল করতে হবে। 

arrowFunction = () => {
    return "Arrow Function with !";
}

console.log(arrowFunction());


//  প্যারামিটার ছাড়া, একলাইনের এরো ফাংশন কল করার নিয়ম 
arrowFunctionSingleLine = () => 'Single Line Arrow Function';

console.log(arrowFunctionSingleLine());

// প্যারামিটার সহ এরো ফাংশন কল করার নিয়ম। 
test = (num1, num2) => {
    return num1 + num2;
}

console.log(test(5, 5));