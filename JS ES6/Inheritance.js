// 4 Pillars for Object Oriented Programming

// 1. Abstraction (অপসারণ)
// 2. Encapsulation (the action of enclosing something in or as if in a capsule.) 
// 3. Inheritance (উত্তরাধিকার) 
// 4. Polymorphism (বহুরুপতা)




// Example: Class Extends, Inheritance

class Parent {
    constructor() {
        this.fatherName = "Rahman";
    }
}


class Child extends Parent{ // একটা প্যারেন্ট ক্লাস কে চাইল্ড ক্লাসের সাথে যুক্ত করে দেয়া হল। 
    constructor(name) {
        super(); // inherit করার জন্য অপশ্যই super() ব্যবহার করতে হবে। 
        this.childName = name;
    }

    // Class এর ভেতর ফাংশন লেখা যায়, যেটাকে মেথড বলে । এবং, ফাংশনটির ভিতর আবার ক্লাসের প্রপারটি গুলোকে ও এক্সেস করা যাবে। 

    getFullName(){
        return this.childName + " " + this.fatherName;
    }
} 

const myChild = new Child("Sobuj"); // Child { fatherName: 'Rahman', childName: 'Sobuj' }

const myNewChild = new Child("Sobuj").getFullName(); // class এর ভেতরের ফাংশন টি কে কল করা হল।  অর্থাৎ, মেথড কে কল করা হল।

console.log(myNewChild);