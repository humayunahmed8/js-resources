// একটি স্ট্রিং এর লেখা গুলোকে কিভাবে রিভার্স বা উলটা করা যায়। 

function reverseString(str){

    var reverse = "";

    for(var i = 0; i < str.length; i++){
        var char = str[i];

        reverse = char + reverse;
    }

    return reverse;

}

var statement = "Hello Bangladesh";

var reverseResult = reverseString(statement);

console.log(reverseResult);