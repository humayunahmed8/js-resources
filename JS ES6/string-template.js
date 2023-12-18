const firstName = "Mr.";
const lastName = "Rahman";
const fullName = firstName + ' ' + lastName + ' is a banker';

console.log(fullName);

// ES6 টেমপ্লেট করার জন্য এটিকে আরো সহজ করে দিয়েছে। 
// `` ক্যারেট এর ভেতর ভেরিয়েবল, এবং টেক্সট, এছাড়াও চাইলে নতুন লাইন ও করা যাবে। 
// কোন কনকেটিনেশন এর প্রয়োজন নেই! 

const fullName2 = `${firstName} ${lastName} is a good boy`;
const fullNameWithLineBreak = `${firstName} ${lastName} is a good boy, 
He is also poem writer`;
console.log(fullNameWithLineBreak);