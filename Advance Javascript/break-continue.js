// break এর কাজ হচ্ছে, একটি লুপের ভেতর কন্ডিশন দিলে। সে কন্ডিশন অনুযায়ী নির্দিষ্ট ভ্যালু দেখানোর পর তাকে থামিয়ে দেয়া। অর্থাৎ, তার পরে আমাদের আর কোন ভ্যালু লাগবেনা। 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < number.length; i++) {

    if(number[i] > 3){
        break;
    }
    const element = number[i];
    console.log(element);
}




// continue হচ্ছে break এরই বিপরীত।
// continue ব্যবহার করে, অ্যারে এর ভিতর যে ইন্ডেক্স গুলো প্রয়োজন নেই সেগুলো বাদ দিয়ে বাকী গুলো দেখাবে। 
// এখানে আর, break এর মত থামতে বলা হচ্ছেনা। বরং যে জিনিস গুলো কন্ডিশনের সাথে মিলবেনা। সেগুলা ignore করতে বলা হচ্ছে। 

const numberTwo = [1, -2, 3, -4, 5, 6, -7, 8, 9, 0];

for (let i = 0; i < numberTwo.length; i++) {

    if(numberTwo[i] < 0){
        continue;
    }
    const result = numberTwo[i];
    console.log(result);
} 