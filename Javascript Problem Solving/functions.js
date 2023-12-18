
// Evenify Common Function 
function evenify(element){
    if(element % 2 == 0){
        console.log(element, 'This is even number');
    }else{
        console.log(element, 'This is odd number');
    }
}

// Evenify the All, We call common function evenify() in here; 
function evenifyAll(nums){
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        //console.log(element);
        evenify(element);
    }
}

// 1. evenfy this array 
nums = [10, 11, 12,16, 22, 27, 44, 47, 52, 41, 11];

evenifyAll(nums);



// 2. evenfy this array
friends_age = [45, 47, 12, 16, 84, 54, 24, 11];

evenifyAll(friends_age);