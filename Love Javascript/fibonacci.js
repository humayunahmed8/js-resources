// Fibonacci ফিবোনাচি মুলত হচ্ছে একটা সিরিজ বা সংখ্যার একটি সেট 

// ফিবোনাচি সিরিজের ব্যবহার হচ্ছে, সে প্রথম থেকে দুইটা সংখ্যা যোগ করে করে তৃতীয় নম্বর সংখ্যাটি দেখাবে। 
// যেমনঃ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 (০+১=১, ১+১=২, ২+৩=৫, ৫+৮=১৩...)

// iterative(পুনরাবৃত্তি) ওয়েতে ফিবোনাচি সিরিজ বের করার নিয়ম। 


function fiboNacciFunc(num) {

    var fiboNacci = [0, 1];

    for (var i = 2; i <= num; i++) {


        // বিষয়টা এরকম হবে, ফিবোনাচি সিরিজের সংখ্যা গুলো বের করার সময়, প্রত্যেক সংখ্যার ১ ঘর আগের সংখ্য ও ২ ঘর আগের সংখ্যা সে খুজে বের করবে, এবং সে দুইটি সংখ্যাকে সে একসাথে যোগ করে দিবে। 
        // fiboNacci[2] = fiboNacci[2-1] + fiboNacci[2-2] 
        // fiboNacci[3] = fiboNacci[3-1] + fiboNacci[3-2] 
        // fiboNacci[4] = fiboNacci[4-1] + fiboNacci[4-2] 
        // fiboNacci[5] = fiboNacci[5-1] + fiboNacci[5-2] 
        // fiboNacci[6] = fiboNacci[6-1] + fiboNacci[6-2]  
        // fiboNacci[n] - fiboNacci(n-1) + fiboNacci(n-2) (n দিয়ে প্রকাশ করা হল)
        // fiboNacci[i] - fiboNacci(i-1) + fiboNacci(i-2) (i দিয়ে প্রকাশ করা হল)


        fiboNacci[i] = fiboNacci[i - 1] + fiboNacci[i - 2];

        //console.log( fiboNacci[i], fiboNacci[i - 1], fiboNacci[i - 2])
    }

    return fiboNacci;
}

var fiboNacciResult = fiboNacciFunc(10);

console.log(fiboNacciResult);