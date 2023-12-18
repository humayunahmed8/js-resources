// Const দিয়ে ভেরিএবল কল করলে, সেটিকে রি-এসাইন করা যায়না।

// const country = 'Hello Bangladesh';
// country = 'Sorry'; // এভাবে রিএসাইন করা যাবেনা। 

// console.log(name);


let country = "Hello Bangladesh";
country =  "Welcome to Bangladesh";
console.log(country);

// Const দিয়ে অ্যারে বানালে, সেটির আবার ইন্ডেক্স নাম্বার চেঞ্জ করা যাবে।

const age = [12, 18];
age[0] = 14;
age.push(12); // অ্যারে এর শেষে আরেকটি ভ্যালু সেট করবে। 
//age = ['Rahim', 'Karim']; // const দিয়ে অ্যারে বানালে, সম্পূর্ন অ্যারে চেঞ্জ করা যাবেনা। তবে, let দিয়ে অ্যারে বানালে সম্পূর্ন অ্যারেকে আবার রিএসাইন করে চেঞ্জ করা যাবে। 
console.log(age); // 14 


// const দিয়ে, অবজেক্ট করলেও, সেটা পুরোটা চেঞ্জ করা যাবেনা। তবে,
// অবজেক্ট এর ভিতর প্রপার্টিগুলো কে এক্সেস ও রিএসাইন করা যাবে। 


const actor = {
    name: "Sahruk Khan",
    phone: 0,
}

actor.name = "Salman Khan";

console.log(actor['name']); // Salman Khan
console.log(actor.name); // Salman Khan

// যেটার মান চেঞ্জ হতে পারে। সেক্ষেত্রে let দিয়ে ভেরিএবল কল করতে হবে। 
// let কে আবার scope ভেরিএবল বলে। 
// let সবসময় scope এর ভেতর থাকবে। সেটা বাহিরে যাবেনা।
// var টা scope এর বাহিরে যায়। 

// const মানে constant 
// let মানে changeable
// let আবার leak proof 

let student = "Rarim";
student = "Karim";
console.log(student); // Karim 

// for লুপের ভেতর let দিয়ে যে ভেরিএবল কল করা হয়। সেটিকে আবার বাহির থেকে এক্সেস করা যাবেনা। 

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i); // এভাবে কল করা যাবেনা। যদি var দিয়ে কল করা হত, তাহলে যেত! 


