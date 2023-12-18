// অ্যারে এর ভেতর অবজেক্ট এর একটি প্রপার্টিকে for লুপ দিয়ে বের করে। সেটাকে নতুন একটি অ্যারেতে push করা হল। 


const actor = [
    {id : 1, name : 'Salman'},
    {id : 2, name : 'Sahrukh'},
    {id : 3, name : 'Varun'}
]

// const newActor = [];

// for (let i = 0; i < actor.length; i++) {
//     const element = actor[i].name;
//     newActor.push(element);
// }

// console.log(newActor);

// উপরের কাজটি সিম্পল একটি map মেথড ইউজ করে করা হল। 
const actorName = actor.map( aName => aName.name);
const actorId = actor.map( aId => aId.id);
console.log(actorName); // [ 'Salman', 'Sahrukh', 'Varun' ]
console.log(actorId); // [ 1, 2, 3 ]



// 3 এর কম আইডি গুলোকে দেখার জন্য। .filter ইউজ করা হয়েছে।
const biggerActor = actor.filter( act => act.id < 3);
console.log(biggerActor); // [ { id: 1, name: 'Salman' }, { id: 2, name: 'Sahrukh' } ]

const smallerActor = actor.filter( act => act.id > 2);
console.log(smallerActor); // [ { id: 3, name: 'Varun' } ] // কারণ 2 এর বেশী একটি অবজেক্ট ই আছে! 



