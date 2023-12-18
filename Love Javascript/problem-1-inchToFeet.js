// ইঞ্ছি কে ফিটে কনভার্ট করার জন্য একটি সিম্পল ফাংশন ব্যবহার করা হয়েছে। 

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var allInch = [156, 288];

// Show Array Length 
//console.log(allInch.length);

var FirstInch = inchToFeet(allInch[0]);
var SecondInch = inchToFeet(36);

console.log(SecondInch);


