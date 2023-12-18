// scope বলতে গন্ডিকে বুঝানো হচ্ছে। অর্থাৎ, কোন একটি ভেরিএবল বা ফাংশনের গন্ডি বলা যেতে পারে।
// ফাংশনের ভেতরের ভেরিএবল কে চাইলে ফাংশনের বাহিরে কল করা যাবেনা। 
// কিন্তু ফাংশনের বাহিরের ভেরিএবল আবার ফাংশনের ভিতরে কল করা যাবে। 

// যখন কোন একটি ফাংশন এর বাহিরে ভেরিএবল কল করা হয়। সেটিকে বলা হয় গ্লোভাল ভেরিএবল।
// গ্লোবাল ভেরিএবল যে কোন জায়গা থেকে এক্সেস করা যায়। 


// Example : 1
function sum(first, second){
    let result = first + second;
    return result;
}

const output = sum(3, 7);

console.log(output);

// আমরা যদি ফাংশনের ভেতরের result variable কে এখন কল করতে চাই, সেটা আমরা পারবনা। 

//console.log(result); // কিন্তু এটি ফাংশনের ভিতরে কাজ করবে। 



// Example 2: Global Variable 
let globalVariable = 20; 
function numbers(one, two){
    let total = one + two + globalVariable; 
    return total;
}

const mainOutput = numbers(5, 7); 

console.log(mainOutput); // (5+7+20) = 32




// Example 3 :  Block Scope 
let NewglobalVariable = 10; 
function age(one, two){
    let totalAge = one + two + NewglobalVariable; 

    // if টাকে বলা হচ্ছে block scope 
    if(totalAge > 20){
        // if block এর ভেতরে ছাড়া বাইরে এই mood ভেরিএবল কে পাওয়া যাবেনা। 
        const mood = 'Happy';
        console.log(mood); // এখানে পাওয়া যাবে। 
    }

    //console.log(mood); // output: Error, এখানে পাওয়া যাবে না।  

    return totalAge;
}

const totalAgeOutput = age(5, 7); 

console.log(totalAgeOutput); // (5+7+10) = 22



// hoisting কি? 
// কোন একটি scope এর ভেতর যদি var লিখে কোনো ভেরিএবল declare করি,
// তাহলে ঐ ভেরিএবলের declaration টাকে ঐ scope এর বাহিরে 
// গিয়ে তার প্যারেন্ট যে scope আছে, সেখানে নিয়ে নিবে। 

// তারপর আমরা যদি কোন কোন জায়গায় ভ্যালু সেট করি, 
// তাহলে সেটি ফাংশনের অন্যান্য জায়গা থেকে সেটি accessible হবে। 
// কিন্তু যদি let বা const দিয়ে declare করি, তাহলে ঐ scope এর মধ্যেই থেকে যাবে। 
// সেটাকে আর hoisting করবেনা। 


// মোট কথা, hoisting হচ্ছে, কোন একটা declare করা ভেরিএবলের scope কে, তার নিজের scope থেকে  উপরের স্কোপে নিয়ে যাবে।



// Example 4 : Hoisting 

let MainVariable = 10; 
function add(numberOne, numberTwo){
    let totalNumber = numberOne + numberTwo + MainVariable; 

    // if টাকে বলা হচ্ছে block scope 
    if(totalNumber > 20){
        // if block এর ভেতরে ছাড়া বাইরে এই mood ভেরিএবল কে পাওয়া যাবেনা। 
        // var দিয়ে কল করলে, সেটিকে পাওয়া যাবে। এটিকে বলা হচ্ছে Hoisting 
        var feelings = 'Happy';
    }
    console.log(feelings); // এখানে পাওয়া যাবে। কারণ var ব্যবহার করার কারণে, এর বর্তমান scope চেঞ্জ হয়ে, সেটা if block scope এ hoisting হবে। 

    return totalNumber;
}

const totalNumberOutput = add(5, 10); 

console.log(totalNumberOutput); // (5+7+10) = 22

