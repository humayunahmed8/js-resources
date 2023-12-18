// Factorial বা গৌনিক বের করার নিয়ম। 

// উদাহরণসরুপ 3 এর ফ্যাক্টরিয়াল বের করতে বলা হলে। !3= 3*2*1
// উদাহরণসরুপ 4 এর ফ্যাক্টরিয়াল বের করতে বলা হলে। !4= 4*3*2*1
// উদাহরণসরুপ 10 এর ফ্যাক্টরিয়াল বের করতে বলা হলে। !10= 10*9*8*7*6*5*4*3*2*1


// for loop and while loop দিয়ে ফ্যাক্টরিয়াল(গৌণিক)  বের করলে তাকে বলা হয়, Iterative(পুনরাবৃত্তি) মেথড 


// Factorial with For Loop 

function factorialWithFor(num){

    var FactCalc = 1; 

    for(var  i = 1; i <= num; i++){
        FactCalc = FactCalc * i;
        //console.log(factorial);
    }

    return FactCalc;

}

var factorialResultOne = factorialWithFor(10);
console.log(factorialResultOne);





// Factorial With While Loop 

function FactorialWithWhile(number) {
    var i = 1;
    var factorialCalc = 1;

    while (i <= number) {
        factorialCalc = factorialCalc * i;
        //console.log(i, factorial);
        i++;
    }

    return factorialCalc;
}

var FactorialResultTwo = FactorialWithWhile(10);
console.log(FactorialResultTwo);



