// ভেরিএবলের ভ্যালু না থাকলে, Undefined দিবে।
// ফাংশনের  return রিটার্ন ভ্যালু না দেয়া থাকলে, তাহলে সে Undefined দেখাবে। 
// কোন একটি প্যারামিটারকে pass না করলে undefined দেখাবে। 
// object এর ভেতর যে property এর অস্ত্বীত্ব নেই, এমন property কে এক্সেস করতে চাইলে Undefined দেখাবে। 
// রিজার্ব ওয়ার্ড Undefined দিয়ে কিছু করলে, সেটা Undefined হবে। 
// অ্যারে এর ইন্ডেক্স না থাকলে, সেটিকে এক্সেস করতে চাইলেও undefined দেখাবে। 

// null মানে নাই বা খালি, অথবা Not existence  

// ভেরিয়েবলের ভ্যালু নেই! তাই Undefined দেখাচ্ছে 
let myName;
console.log(myName); // undefined 


// return না করলে, কাজ করলেও Undefined দেখাবে। 
function add(num1, num2){
    console.log(num1 + num2);
}

const result = add(10, 10); // 20, Undefined 
console.log(result);



// একটি প্যারামিটার এর ভ্যালু না দিলেও, Undefined দেখাবে। 
function sums(num1, num2){
    console.log(num1, num2);
} 

const sumResult = sums(10); // 10, Undefined, Undefined 
console.log(sumResult);


// object এর ভেতর যে property এর অস্ত্বীত্ব নেই, এমন property কে এক্সেস করতে চাইলে Undefined দেখাবে। 

const friends = {
    name: "Rahim",
    phone: 0
}

console.log(friends.text); // undefined, যেহেতু এই নামে কোন প্রপার্টি নেই! 


// রিজার্ব ওয়ার্ড Undefined দিয়ে কিছু করলে, সেটা Undefined হবে। 

const reservedName = undefined;
console.log(reservedName); // Undefined 




// অ্যারে এর ইন্ডেক্স না থাকলে, সেটিকে এক্সেস করতে চাইলেও undefined দেখাবে। 

const undefinedIndex = [10, 20, 30];
console.log(undefinedIndex[5]); // Undefined  


