// class এর কাজ কি?
// class এর কাজ হচ্ছে, অবজেক্ট বানানো। 
// অর্থাৎ, যদি আমাদের আলাদা আলাদা অবজেক্ট তৈরী করার প্রয়োজন পড়ে, তাহলে সেক্ষেত্রে আমরা class লিখব। 
// class এর ভিতর যে constructor থাকবে। এই constructor ই মুলত কতগুলো প্যারামিটার নিবে(ফাংশনের মত), এবং সে অনুযায়ী object তৈরী করবে। 

class Student {
    constructor(firstName, LastName, Scholarship) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.Scholarship = Scholarship;
    }
}

const studentOne = new Student('Md', 'Karim', 12000);  
const studentTwo = new Student('Rahim', 'Uddin', 5000); 

console.log(studentOne); // { firstName: 'Md', LastName: 'Karim', Scholarship: 12000 }
console.log(studentTwo); // { firstName: 'Rahim', LastName: 'Uddin', Scholarship: 5000 }