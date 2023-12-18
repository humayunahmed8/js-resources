// swap (অদলবদল), অর্থাৎ, একজনের জিনিস আরেকজনকে দেয়া। 


// ১ম পদ্ধতিঃ ভেরিয়েবলের মাধ্যমে swap করা। এক্ষেত্রে একটি খালি বা ডামি ভেরিয়েবল নিতে হবে, এবং সেটি ব্যবহার করে swap করতে হবে। 

var a = 10;
var b = 20;

console.log("Before Swap (ab): a=", a, "b=", b);

var temp = a; // একটি খালি ভেরিয়েবল নেয়া হল। যেখানে প্রথম a নিয়ে, a কে খালি করা হল। 
var a = b; // a যেহেতু খালি, তাই a এর ভিতর b কে রাখা হল। 
var b = temp; // ব যেহেতু a তে রাখা হয়েছে, তাই এখন b খালি। b এর ভিতর আগের খালি ভেরিয়েবল অর্থাৎ temp কে কল করা হয়েছে। 

console.log("After Swap (ab): a=", a, "b=", b);





// ২য় পদ্ধতিঃ  swap (অদলবদল) করার আরেকটি পদ্ধতি (সকল ল্যাংগুয়েজ এ মোটামুটি এভাবে কাজ করবে)

var x = 10;
var y = 20;
console.log("Before Swap (xy): x=", x, "y=", y);

x = x + y; // 10 + 20 = 30
y = x - y; // 30 - 20 = 10 
x = x - y; // 30 - 10 = 20 


console.log("After Swap (xy): x=", x, "y=", y);





// ৩য় পদ্ধতিঃ swap (অদলবদল) করার আরেকটি পদ্ধতি, (এটি মুলত ল্যাংগুয়েজ স্পেসিফিক বা জাবাস্ক্রিপ্ট এর নিজস্ব ফাংশন)

var p = 10;
var q = 20;
console.log("Before Swap (pq): p=", p, "q=", q);

[p, q] = [q, p];

console.log("After Swap (pq): p=", p, "q=", q);



