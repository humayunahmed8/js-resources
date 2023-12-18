const firstName = ''

// যদি firstName খালি হয়, তাহলে তার স্ট্রিং এর ভেতর স্টেটমেন্টের ডেটাটি ইনপুট হবে। 
// আর যদি firstName খালি না হয়, সেক্ষেত্রে সেটাই প্রিন্ট হবে। || এর পরের ডেটাটি আর execute করবেনা।
const fullName = firstName || 'Rahim Uddin'
console.log(fullName);

// একটা ভেরিএবল নিয়ে, সেটার মাধ্যমে একটি কন্ডিশন execute করা হচ্ছে। 
const hello = false 
hello && console.log('How are you?') || console.log("Don't worry Man")