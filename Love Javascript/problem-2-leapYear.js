// কিভাবে লিফ ইয়ার বা অধিবর্ষ নির্নয় করতে হয়, তার একটি উদাহরণ জাবাস্ক্রিপ্টের সাহায্যে দেয়া হলো। 


// অধিবর্ষ হওয়ার কতগুলো শর্ত 
// ১. বছরটি অবশ্যই ৪ দিয়ে ভাগ যেতে হবে।  (Is year divisible by 4 = NO = Not a Leap Year)
// ২. বছরটি ১০০ দিয়ে ভাগ হবেনা।  (Is year divisible by 100 = NO = Leap Year)
// 3. বছরটি অবশ্যই ৪০০ দিয়ে ভাগ যেতে হবে, এবং ভাগশেষ ০ হতে হবে।  (Is year divisible by 400 = NO = Not a Leap Year)

// Ref: (14.4, Jhankar), https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php


function checkLeapYear(year){
    if( (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
        console.log('This is Leap Year');
    }else{
        console.log('This is not Leap year');
    }

    return checkLeapYear;
}

checkLeapYear(1800);


