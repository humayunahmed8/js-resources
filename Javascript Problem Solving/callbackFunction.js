// ১৯.৩ঃ  Callback Function হচ্ছে, কোণ একটা ফাংশন এর ভেতর থেকে কোন একটা ফাংশনকে ফাস করে দিয়ে কল করা হয়। 
// দুইধরনের কলব্যক ফাংশন হচ্ছে, সিনক্রোনাজ এন্ড এসিনক্রোনাজ কলব্যাক ফাংশন। 


function callbackFunction(name, age, task){
    console.log('Welcome', name);
    console.log('Your Afe', age);
    task();
}

function handWash(){
    console.log('Wash your hand with soap properly');
}

function takeShower(){
    console.log('take a shower immediately');
}

callbackFunction('Md Rahman', 17, handWash);
callbackFunction('Md Rahim', 18, takeShower);

