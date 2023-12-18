// ৬ এর রেন্ডম নাম্বার বের করা হয়েছে। 

var num = 2.444;

var resultOne = Math.floor(num); // . এর উপরে গেলেও এবংকি অন্য .৯৯ হলেও সে নিচের সংখ্যাটিই দেখাবে। 
var resultTwo = Math.ceil(num); // . এর উপরে গেলেই সে এক বেশী দেখাবে।  
var resultThree = Math.round(num); // রাউন্ড করে দেখাবে, .49 হলে নিচের সংখ্যা। .50 এর উপরে হলে উপরের সংখ্যা দেখাবে। 
var resultFour = Math.abs(num); // যা আছে তাই দেখাবে। 

var randNumber = Math.random() * 6; // একটি রেন্ডম নাম্বার কে ৬ দিয়ে গুন করা হয়েছে। 
var randNumberResult = Math.round(randNumber); //রেন্ডম নাম্বার কে রাউন্ড করা হয়েছে। 

console.log(randNumberResult);


// for লুপ ব্যবহার করে একসাথে ৬ টি রেন্ডম নাম্বার বের করার নিয়ম। 
for (i = 0; i < 6; i++) {
    var MultiplyTheRandom = Math.random() * 6; // একটি রেন্ডম নাম্বার কে ৬ দিয়ে গুন করা হয়েছে। 
    var MultipliedRandomOutput = Math.round(MultiplyTheRandom); //রেন্ডম নাম্বার কে রাউন্ড করা হয়েছে। 

    console.log(MultipliedRandomOutput);
}