// কোন একটা ফাংশনের প্যারামিটার গুলোর ভ্যালু যদি পরবর্তীতে এড না ও করা হয়। 
// তাহলে, সে সেট না করা প্যারামিটার এর একটি ডিফল্ট মান সেট করে রাখা যাবে। 

function friendAge(ageOne, ageTwo){
    return ageOne + ageTwo;
}

const friendsAgeResult = friendAge(15, 15); //30
//const result = friendAge(15); //NaN //যদি একটি একটি ভ্যালু দেয়া হত, তাহলে এরর দেখাতো। অথবা NaN দেখাতো। 

console.log(friendsAgeResult);





// পুরোনো নিয়মঃ

function brotherAge(ageOne, ageTwo){
    if(ageTwo == undefined){
        ageTwo = 0;
    }
    return ageOne + ageTwo;
}

const brotherAgeResult = brotherAge(15); //15

console.log(brotherAgeResult);




// আরেকটি নিয়মঃ

function motherAge(ageOne, ageTwo){
    ageTwo = ageTwo || 5; // যদি ageTwo দেয়া থাকে তাহলে সেটা, অথবা ডিফ্লট ভ্যালু পাবে 0
    return ageOne + ageTwo;
}

const motherAgeResult = motherAge(36); //41

console.log(motherAgeResult);



// ES6 এ একদম সিম্পল নিয়মে করা যাবে। 

function myAge(ageOne, ageTwo = 20){ // অর্থাৎ, ageTwo এর মান না পেলে, সেক্ষেত্রে সে ageTwo এর মান দেখাবে 20
    return ageOne + ageTwo;
}

const myAgeResult = myAge(21); //41

console.log(myAgeResult);