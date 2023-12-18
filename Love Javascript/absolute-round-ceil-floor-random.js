// Javascript Absolute Number 
// Math.abs() ফাংশন এর কাজ হচ্ছে, নাম্বারের একুরেট ভ্যালু প্রদর্শন করা। একদম কাটাকাটা হিসেব হবে। 

var absoluteNumber = 5.3333;
var absoluteNumberResult = Math.abs(absoluteNumber);

console.log(absoluteNumberResult); // Ans. 5.3333 

// Javascript Round Number 
// Math.round() ফাংশন এর কাজ হচ্ছে, সে রাউন্ড ফিগার করে মান দেখাবে। যেমন, যদি মান ৫.৪৯ হয় তাহলে সে নিচের মানটি দেখাবে অর্থাৎ ৫ দেখাবে। অন্যদিকে, যদি মানটি হয় 5.51, তাহলে সে দেখাবে ৬।  

var roundNumber = 5.51;
var roundNumberResult = Math.round(roundNumber);

console.log(roundNumberResult); // Ans. 6, If Value is 5.49, Then it will be print 5 


// Javascript Ceil Number (উপরের মান)
// Math.ceil() ফাংশন এর কাজ হচ্ছে। সর্বদা উপরের মান দেখাবে। অর্থাৎ, দশমিক হলেই সে এক বাড়িয়ে দিবে। 

var ceilNumber = 5.1;
var ceilNumberResult = Math.ceil(ceilNumber);

console.log(ceilNumberResult); // Ans. 6


// Javascript Floor Number (নিচের মান)
// Math.floor() ফাংশন এর কাজ হচ্ছে। দশমিকের উপরে যাই হোক, .৯৯ ও হয় তবুও সে টেনে নিয়ে নিচের মানটিই দেখাবে। 

var floorNumber = 5.999999;
var floorNumberResult = Math.floor(floorNumber);

console.log(floorNumberResult); // Ans. 5 






// Random Number (রেন্ডম কিছু সংখ্যা দেখানো, যা প্রতি রিলোডে চেঞ্ঝ হবে, মানগুলো সাধারণত দশমিক হিসেবে দেখায়) 
// Math.random() ফাংশন এর কাজ হচ্ছে, রেন্ডম কিছু সংখ্যা দেখানো। প্রতি রিলোডে দশমিক আকারে দেখাবে। নতুন নতুন সংখ্যা দেখাবে। 


var randomNumberResult = Math.random(); 

console.log(randomNumberResult);






// রেন্ডম নাম্বারকে রাউন্ড করে দেখানোর একটা উদাহরণ 

var randomNumberExample = Math.random() * 100; // রেন্ডম একটি সংখ্যা ১০০ এর সাথে বার বার গুন করবে। ফলে, সংখ্যাটি বড় হবে।
var printRandomNumberRound = Math.round(randomNumberExample);

console.log(printRandomNumberRound);



