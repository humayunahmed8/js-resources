
// Ref: https://github.com/humayunahmed8/programming-hero-assignment-three

function woodCalculator(table, chair, bed){

    // check given quantity is negative or not.
    if((table < 0) || (chair < 0) || bed < 0){
      return "WARNING: Quantity can't be negative!";
    }

    var tableCost = table * 50;
    var chairCost = chair * 100;
    var bedCost = bed * 500;
    var totalCost = tableCost + chairCost + bedCost;

    return totalCost;
  }

  var result = woodCalculator(1, 2, 3); // (50*1 + 100*2 + 500*3 = 1750)

  console.log(result);





// Factorial (Iterative Way)

function factoiral(number) {
  var fact = 1;
  for (var i = 1; i <= number; i++) {
    fact = fact * i;
    //console.log(i, fact);
  }
  return fact;
}
var result = factoiral(5);

console.log(result);










// Factorial Recursive Way (With Explanation)


// Explanation

// !5 = 5*4*3*2*1
// 5*FactorialRecursive(num - 1) // 4, এখানে num - 1 হচ্ছে, যত ফ্যাক্টরিয়াল করা হবে, তার থেকে এক কম। অর্থাৎ, ৫ হলে ৫ এর এককম হচ্ছে ৪ 
// 4*FactorialRecursive(num - 1) // 3
// 3*FactorialRecursive(num - 1) // 2
// 2*FactorialRecursive(num - 1) // 1
// 1*FactorialRecursive(num - 1) // 0 // Stoping Condition 

function FactorialRecursive(num){
  
  if(num == 1){ // Stoping Condition
    return 1;
  }else{
    //console.log(num, num - 1)
    return num * FactorialRecursive(num - 1);
  }

}

var factResult = FactorialRecursive(5);

console.log(factResult);






