// যদি কোন একটি ফাংশনের প্যারামিটার এর অতিরিক্ত কোন ভ্যালু pass করা হয়।
// তাহলে ফাংশনের ভেতর arguments দিতে হয়।
// মুলত ফাংশনের প্যারামিটার এবং পরে ফাংশন কল করার সময় যে ভ্যালু দেয়া হয়। এই ভ্যালু গুলো মুলত arguments এ সেব হয়ে থাকে।  যা arguments কিওয়ার্ড দিয়ে দেখা যায়। 
// arguments যে আউটপুট দেয়। সেটা মুলত অ্যারে এর মত দেখালেও সেটা আসলে array নয়। সেটাকে আমরা array এর মত object বা array like object বলতে পারি। এই object এর ইন্ডেক্স নাম্বার ও থাকে। 
// arguments টিকে চাইলে array syntax ইউজ করে array তে কনভার্ট করা যাবে। এবং অতিরিক্ত ভ্যালু প্রোভাইড করার জন্য spread operator ব্যবহার করা যাবে। 


// Example 1
function add(num1, num2){
    console.log(arguments); // [Arguments] { '0': 2, '1': 5 }
    return num1 + num2 + arguments[2]; // arguments এর 2 নম্বর ইন্ডেক্স কে পাওয়ার জন্য
}
const result = add(2, 5, 5);
console.log(result);



// Example 2
function student(resultOne, resultTwo){
    console.log([...arguments]); // spread operator ইউজ করে, array তে কনভার্ট করা হল। 
    return resultOne + resultTwo + arguments[2]; // arguments এর 2 নম্বর ইন্ডেক্স কে পাওয়ার জন্য
}
const StudentFullResult = student(2, 5, 5);
console.log(StudentFullResult);



// Example 3 : চাইলে arguments এর index ধরে, সেগুলোর উপর loop চালানো যাবে। 
function actor(actorAgeOne, actorAgeTwo){
    let actorAgeArg = [...arguments];
    for (let i = 0; i < actorAgeArg.length; i++) {
        const element = actorAgeArg[i];
        //console.log(element);
        const square = element * element;
        console.log(square);
    }
    return actorAgeArg;
}

const actorAgeResult = actor(5, 10, 5, 12);
console.log(actorAgeResult);