// Array এর ভিতর সব গুলো নাম্বারকে যোগ করার নিয়ম।


// Way One : Without Function 
var sum = [10, 20];
var total = 0;

for(var i = 0; i < sum.length; i++){
    var number = sum[i];
    total = total + number; 
}

console.log(total); // 30


// Way Two: With Function (Reusable), Recommended 
function getArraySum(sum){
    var total = 0;

    for(var i = 0; i < sum.length; i++){
        var number = sum[i];
        total = total + number; 
    }

    return total;
}

var calculate = [10, 20, 50];
var result = getArraySum(calculate);
console.log(result); //80

// একই ফাংশন ব্যবহার করে, ফাংশন এর প্যারামিটার অনুযায়ী, নতুন অ্যারে ডিফাইন করেও যোগ করা যাবে। সেক্ষেত্রে, ফাংশন বার বার বানাতে হবেনা। 
var resultTwo = getArraySum([10, 50, 100]);
console.log(resultTwo); // 160