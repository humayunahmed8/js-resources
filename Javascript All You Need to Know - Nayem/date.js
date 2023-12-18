var date = new Date();
console.log(date.toDateString()); // Sat May 01 2021

console.log(date.toTimeString()); // 17:43:22 GMT+0600 (Bangladesh Standard Time)

console.log(date.toLocaleString()); // (Bangladesh Standard Time)

console.log(date.getDate()); 
console.log(date.getMonth()); 
console.log(date.getHours()); 
console.log(date.getMinutes()); 
console.log(date.getSeconds()); 
console.log(date.getUTCHours());


// How to get pure month name without month numeric value 
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var monthName=months[d.getMonth()]; // "July" (or current month)
console.log(monthName);




let birthday = new Date("October 15, 1997 03:12:00");
console.log(birthday)









