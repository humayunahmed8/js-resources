// == (double equal) এবং === (triple equal) এর মধ্যে পার্থক্য।
// == শুধু কন্ডিশন চেক করবে। বা শুধু মানটা চেক করবে।
// === (triple equal) কন্ডিশন ও ডেটা টাইপ ও চেক করবে। 

const first = '12';
const second = 12;

if(first === second){ // == দিলে শুধু মান চেক করবে। === দিলে টাইপ সহ চেক করবে। 
    console.log('This is true');
}
else{
    console.log('This is false'); // false 
}

