// জাবাস্ক্রিপ্ট ডেটাটাইপ (Javascript Datatype)
// জাবাস্ক্রিপ্টের কিছু ডেটা টাইপ হচ্ছে- (Number, String, Boolean)
// জাবাস্ক্রিপ্টের ডেটাটাইপ চেক করার জন্য ইউজ করতে হবে- typeof()

// Datatype Example 

var numberDataType = 1;
var floatDataType = 1.1; // যদিও এটি ফ্লোট ডেটাটাইপ কিন্তু জাবস্ক্রিপ্টে এটিকে নাম্বার দেখাবে 
var stringDataType = 'String Datatype';
var booleanDataType = true;

console.log(typeof(nullDataType));



// Method of String Value Conversion (UpperCase, LowerCase, Split)
// প্রয়োজন অনুযায়ী ডেটাটাইপ ভ্যালু গুলো মেথড দিয়ে পরিবর্তন করা যাবে। ধরুন, স্ট্রিং এর ভেতর ছোট হাতের অক্ষর সেটাকে ইচ্ছা করে বড়হাতের অক্ষরে দেখানো যাবে। 
// যেমনঃ toUpperCase(), toLowerCase(), Split 


//  স্ট্রিং এর ভেতরের ডেটা গুলোকে বিভিন্ন ভাবে প্রদর্শন করা যায়, তার একটি উদাহরণ 
var upperCaseContent = 'Hello WORLD!';
var lowerCaseContent = 'Hello WORLD!';
var splitContent = 'Hello WORLD!';

console.log(upperCaseContent.toUpperCase()); // HELLO WORLD!
console.log(lowerCaseContent.toLowerCase()); // hello world!
console.log(splitContent.split(' ')); // [ 'Hello', 'WORLD!' ]

