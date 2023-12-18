// 15.7 একটি অ্যারে এর ভিতর থেকে সেম বা ডুপ্লিকেট ডেটা/নাম্বার গুলো রিমুভ করার উপায়। 


var number = [1, 2, 3, 1, 2, 5, 2, 5];
var uniqueNumber = [];

for (var i = 0; i < number.length; i++) {
    var element = number[i];
    var index = uniqueNumber.indexOf(element);

    if (index == -1) {
        uniqueNumber.push(element);
    }
}

console.log(uniqueNumber);