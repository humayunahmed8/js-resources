// Helpful Blog: https://medium.com/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE/%E0%A6%A8%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%AF%E0%A6%A6%E0%A6%BF%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F%E0%A6%83-%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA-%E0%A6%AB%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0-%E0%A6%B0%E0%A6%BF%E0%A6%A1%E0%A6%BF%E0%A6%89%E0%A6%B8-89e3526444ed

// The map() method creates a new array populated with the results of calling 
// a provided function on every element in the calling array.

// map,filter,reduce,find এগুলো হচ্ছে মুলত Array এর মেথড 
// এদের মেইন কাজ হলো অ্যাপ্লাইকৃত অ্যারের প্রত্যেকটা আইটেমের উপর একটা ফাংশন অ্যাপ্লাই করা। 
// অনেকটা লুপের মতো কাজ করে, কিন্তু লুপের মতো অর্থহীন বা জটিল টাইপের না।


// প্রথমে প্রচলিত নিয়মে একটি অ্যারে নিয়ে সেটার থেকে square বের করে দেখানো হল। 

const numbers = [3,5,8,9];
const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const getSquare = element * element;
//     output.push(getSquare);
// }

// console.log(output); // [ 9, 25, 64, 81 ]

// এটিকে আমরা আরো সহজে করার জন্য map মেথড ইউজ করব। 
//  map মেথড তিনটা প্যারামিটার নিতে পারে, 
// element: অর্থাৎ array এর ভিতর যতগুলো এলিমেন্ট আছে দেখাবে।
// index: array এর এলিমেণ্ট গুলোর ইন্ডেক্স কোনটার কত সেটা দেখাবে।
// array: পুরো array টাকেই দিবে।
// বেশীরভাগ ক্ষেত্রে আমরা element টাকেই ইউজ করব।

// তিনটি প্যারামিটার console.log করে দেখানো হল। 

// numbers.map(function (element, index, array) {
//     console.log(element, index, array);
// })

// .map মেথড ইচ্ছা করলে arrow function ইউজ করে এক লাইনেও লেখা যাবে। 
// যেমন- 
const result = numbers.map(element => element * element); 
console.log(result);
// নোটঃ এখানে element হচ্ছে ফাংশনের প্যারামিটার, এবং element * element হচ্ছে রিটার্ন ভ্যালু। 
// নোটঃ যেহেতু arrow function ইউজ করেছি, তাই আর function কিওয়ার্ড, function এর নাম এবং বন্ধনী {} দিতে হয়নি। তবে মাল্টিপল লাইন হলে বন্ধনী {} দিতে হবে। 
// নোটঃ আউটপুট দেখার জন্য map মেথড কে একটি ভেরিএবলে রাখা হয়েছে।

// উপরের জিনিসটি চাইলে আরো explicitly লেখা যাবে। যেমন- 

const newResult = numbers.map(function(element){
    return element * element; 
})
console.log(newResult); //[ 9, 25, 64, 81 ]





// .filter মেথড এর কাজ হচ্ছে, ফাংশনের ভেতর দেয়া কন্ডিশন অনুযায়ী যে জিনিসটা পাবে, শুধুমাত্র তাকে রিটার্ন করবে। 
// .filter সবসময় অ্যারে রিটার্ন করবে। 
const biggerNumber = numbers.filter(x => x < 5);
console.log(biggerNumber); // [3]


// .find মেথড এর কাজ হচ্ছে, কন্ডিশন চেক করে, শর্ত পুরনকারী কেন একটি  এলিমেন্ট পায়, তাহলে সে এলিমেন্ট টাকেই দিয়ে দিবে। 
// .find অ্যারে রিটার্ন করেনা। যাষ্ট একটি এলিমেন্ট দিবে। 
// যেমনঃ 

const isThere = numbers.find( x => x > 5);
console.log(isThere); // 8 
