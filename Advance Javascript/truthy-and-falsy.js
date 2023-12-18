// কোন ভ্যালু গুলো সবসময় True আর False হবে, সেগুলো দেখানো হল। 
// 0 যেহেতু নেগেটিভ তাই এটি False, আবার 0 যদি " " এর ভিতর কল করলে সেটা ট্রু হয়ে যাবে। 
// 1 যেহেতু পজিটিব তাই এটি True
// [] খালি অ্যারে ও True 
// {} খালি অবজেক্ট ও True  
 
// Falsy Values 
// 0 
// ""
// undefined 
// null 
// NaN
// false

// Truthy Values 
// true 
// " "
// "0"
// "Something"
// {} 
// []

const defaultZeroFalse = 0; // False 
const zeroStringTrue = "0"; // False 
const nullValueFalse = null; // False 
const NaNValueFalse = NaN; // False 
let blankVariable; // Undefined, False  // Blank variable must be called by let 
const emptyStringFlase = ""; // False
const whiteSpaceStringTrue = " "; // True
const defaultTrue = 4; // True 
const stringLengthTrue = "Something"; // True
const emptyObject = {}; //True 
const emptyArray = []; // True 



if(emptyObject){
    console.log("This is true");
}else{
    console.log("This is false");
}