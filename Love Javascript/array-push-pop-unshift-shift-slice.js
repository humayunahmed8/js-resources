//  arrayName.push() এর কাজ হচ্ছে, অ্যারে এর শেষে ভ্যালু সেট করবে। 
//  arrayName.pop() এর কাজ হচ্ছে, অ্যারে এর শেষের দিকে থেকে একটি একটি ভ্যালু রিমুভ করতে থাকবে। 
//  arrayName.unshift() এর কাজ হচ্ছে, অ্যারে এর প্রথমে মান যুক্ত করবে।
//  arrayName.shift() এর কাজ হচ্ছে, অ্যারে এর প্রথমে থেকে একটি করে মান রিমুভ করবে।
//  arrayName.slice(1, 3) এর কাজ হচ্ছে, অ্যারে থেকে প্রয়োজন অনুযায়ী ভ্যালু গুলো ডিরেকশন অনুযায়ী বের করে নিয়ে আসা। 
 

var studenNHS = ['Humayun', 'Niharika', 'Mizan'];

//.push
studenNHS.push('Jahid', 'Karim'); // অ্যারে এর শেষে সে দুইটি ভ্যালু সেট করে দিবে।  // output: [ 'Humayun', 'Niharika', 'Mizan', 'Jahid', 'Karim' ]

//.pop
studenNHS.pop();  // [ 'Humayun', 'Niharika', 'Mizan', 'Jahid' ]
studenNHS.pop();  // [ 'Humayun', 'Niharika', 'Mizan' ]

//unshift 
studenNHS.unshift('Ayrin', 'Sumi'); // unshift() মুলত অ্যারে এর প্রথমে একটি মান যুক্ত করবে।  [ 'Ayrin', 'Sumi', 'Humayun', 'Niharika', 'Mizan' ] 

// shift 
studenNHS.shift(); // প্রথম থেকে একটি করে মান রিমুভ করবে। [ 'Sumi', 'Humayun', 'Niharika', 'Mizan' ]
 
console.log(studenNHS); 



// .slice() এর একটি উদাহরণ 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'horse'];

console.log(animals.slice(2)); // ২ থেকে শুরু করে সে শেষ পর্যন্ত দেখাবে। 
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(1, 3)); // ১ থেকে ৩ পর্যন্ত তার রেঞ্জ। কিন্তু সে, শেষের মানটি আর দেখাবেনা। 
// expected output: Array ["bison", "camel"]

console.log(animals.slice(1, 5)); // ১ থেকে শুরু করবে। কিন্তু এখানে যেহতু ইন্ডেক্স ৫ নেই, সেহেতু ১ থেকে শেষের মান গুলো দেখাবে। 
// expected output: Array ["bison", "camel", "duck", "elephant"]




