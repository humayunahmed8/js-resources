// Factorial (গৌনিক) বের করার রিকার্সিব উপায় 

// রিকার্সিভ ওয়েতে ফেক্টরিয়াল বের করতে হলে, আমাদের আগে বুঝতে হবে 

// 1! = 0; অর্থাৎ, ০ এর রিকার্সিভ সবসময় ১ হবে। এটা রিকার্সিভ এর একটি সর্বজন স্বীকৃত আইন। 
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 1*2*3*4*5*6
// 7! = (7-6)!*7 (এটার মানে হচ্ছে,যেহেতু আমরা ৭ এর রিকার্সিব বের করছি, সেহেতু ৭ এর আগে হচ্ছে ৬। তার মানে, ৬ এর রিকার্সিভ এর সাথে ৭ গুন করলে আমরা ৭ এর রিকার্সিভ পাব। একই ভাবে, ৬ এর রিকার্সিভ বের করার জন্য ৬ থেকে ১ কম হচ্ছে ৫, ৫ এর রিকার্সিভ এর সাথে ৬ গুন করলে আমরা পাব ৬ এর রিকার্সিভ)

// n! = (n-1)!*n (রিকার্সিভ কে n হিসেবে ধরে নেয়া হচ্ছে)

// ইচ্ছা করলে এসোসিয়েটিব-ল বা আগে পরে করেও লেখা যাবে। 
// n! = n * (n-1)! (রিকার্সিভ কে n হিসেবে ধরে নেয়া হচ্ছে, আগে পরে করেও লেখা যাবে, এটাকে এসোসিয়েটিব-ল বলে)




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