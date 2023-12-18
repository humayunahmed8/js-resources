// Only dual condition, you can use if-else 
var a = 2;
var b = 4;

if( a > b) {
    console.log( a + 'is greater than' + b)
} else {
    console.log( b + ' is greater than ' + a)
}

// For more than multiple condition, you can use else-if
var number = 0;

if(number == 0){
    console.log(number + ' is zero');
}else if (number % 2 == 0){
    console.log(number + 'is even number')
}else{
    console.log(number + 'is odd number')
}



var mainDate = new Date('April 30, 2021');
// console.log(days.getMonth() + 1); // Because getmonth() start from 0

var days = mainDate.getDay();

// 0 - sunday 
// 1 - Monday
// 2 - tuesday
// 3 - wednesday 
// 4 - thursday 
// 5 - friday
// 6 - saturday 

if(days == 0) {
    console.log('Sunday')
}else if(days == 1){
    console.log('Monday')
}else if(days == 2){
    console.log('Tuesday')
}else if(days == 3){
    console.log('Wednesday')
}else if(days == 4){
    console.log('Thursday')
}else if(days == 5){
    console.log('Friday')
}else{
    console.log('Saturday')
}