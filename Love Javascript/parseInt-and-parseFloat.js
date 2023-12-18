// জাবাস্ক্রিপ্ট পার্স ইন্টিজার অ্যান্ড ফ্লোট (parseInt and parseFloat)
// parseInt ফাংশন এর কাজ হচ্ছে ডেটা টাইপ যাই থাকুক, সেটাকে সে পার্স করে ইন্টিজার হিসেবে দেখাবে 
// parseFloat ফাংশন এর কাজ হচ্ছে ডেটা টাইপ যাই থাকুক, সেটাকে সে পার্স করে ফ্লোট মান হিসেবে দেখাবে 

var number1 = 25; // Number 

var number2 = '15.5'; // String 
//number2 = parseFloat(number2); // Define Explicitly  
//number2 = +number2; // Define Shortly,  Same as => number2 = parseFloat(number2); 

number2 = +number2; // Define Float Shortly, Same as => number2 = parseInt(number2);

console.log(number1 + number2); // 40.5 







// Javascript এ অনেকসময় দশমিক মানকে যোগ করার সময়, সঠিক উত্তর দেখায়না। যা toFixed() ফাংশন দিয়ে, দশমিক এর পরে কত সংখ্যা দেখাবে তা বলে দেয়া যাবে। 

// উদাহরণ 

var decimalNumber1 = 1.1;
var decimalNumber2 = 1.2;
var total =  decimalNumber1 + decimalNumber2;
total = total.toFixed(4); // দশমিক এর পর ৪ সংখ্যা দেখানো হবে। 


console.log(total); // 2.3000 , অর্থাৎ দশমিকের পর ৪ সংখ্যা দেখাচ্ছে। 